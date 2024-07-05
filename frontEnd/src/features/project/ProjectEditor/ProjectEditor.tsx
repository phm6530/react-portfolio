import { useEffect, useMemo } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { yupResolver } from '@hookform/resolvers/yup';

// Quill 에디터
import {
    Controller,
    FormProvider,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import CustumDatePicker from 'component/editor/CustumDatePicker';

import { SubTitle } from 'component/ui/Subtitle';
import EditorInput from 'component/editor/EditorInput';
import styled from 'styled-components';
import { Button } from 'component/ui/Button';
import schema from './schema';

import EditorAddHash from 'component/editor/EditorAddHash';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PROJECT_STACK } from 'constants/pageConstacts';

import EditorChecklist from 'component/editor/EditorChecklist';
import EditorTextArea from 'component/editor/EditorTextArea';
import ProjectThumbnailUploader from '@features/project/ProjectEditor/ProjectThumbnailUploader';
import useKey from 'hooks/useKey';
import useEditorFetchDetail from '@features/project/hooks/useEditorFetchDetail';
import useEditorAction from '@features/project/hooks/useEditorAction';
import { ProjectDetailProps } from '@type/ProjectTypes';
import TestQuillEditor from 'component/editor/TestQuillEditor';
import {
    EditorGetPreview,
    transImgSrc,
} from 'component/editor/EditorGetPreview';
import ProjectEditorRoles from '@features/project/ProjectEditor/ProjectEditorRoles';

const AdminProjectStyle = styled.div`
    background: var(--background-color-box);
    border: var(--border--btn-type-1);
    border-radius: 1em;
    padding: 2rem;
`;

const FormStyle = styled.form`
    margin-top: 30px;
`;

const ButtonWrap = styled.div`
    display: flex;
`;

export default function ProjectEditor() {
    const navigate = useNavigate();
    const [Params] = useSearchParams();

    const { key: projectKey } = useKey();
    const pageType = Params.get('type') || null;

    const initalFormValue: ProjectDetailProps = useMemo(
        () => ({
            title: '',
            company: '',
            skill: [],
            hashtag: [],
            projectUrl: '',
            startDate: null,
            endDate: null,
            thumbnail: '',
            description: '',
            projectDescription: '',
            projectRoles: [],
        }),
        [],
    );

    const formhookMethod = useForm<ProjectDetailProps>({
        /* eslint-disable @typescript-eslint/no-explicit-any */
        resolver: yupResolver(schema) as any, //초기값 null때문에 요것만 any 허용
        defaultValues: initalFormValue,
    });

    const { data } = useEditorFetchDetail(projectKey, pageType);
    const { mutate } = useEditorAction(pageType, projectKey);

    useEffect(() => {
        if (data && pageType === 'edit') {
            const updatedData = {
                ...data,
                projectDescription: transImgSrc(data.projectDescription),
            };
            const formData = updatedData || initalFormValue;
            formhookMethod.reset(formData);
        }
    }, [data, pageType, formhookMethod, initalFormValue]);

    const cancelEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
    };

    const onSubmitHandler: SubmitHandler<ProjectDetailProps> = data => {
        const getItem = EditorGetPreview(data.projectDescription);
        const newProjectDescription = getItem.getPost();

        const updatedData = {
            ...data,
            projectDescription: newProjectDescription,
        };
        mutate(updatedData);
    };

    return (
        <AdminProjectStyle>
            <SubTitle>Add project --</SubTitle>
            <FormProvider {...formhookMethod}>
                <FormStyle
                    onSubmit={formhookMethod.handleSubmit(onSubmitHandler)}
                >
                    <EditorInput
                        label="프로젝트 명"
                        placeholder="프로젝트 명을 입력해주세요."
                        value="title"
                    />

                    <EditorInput
                        label="프로젝트 의뢰기관"
                        placeholder="프로젝트 의뢰 기간을 입력해주세요."
                        value="company"
                    />

                    <CustumDatePicker
                        label="프로젝트 기간"
                        startDateName="startDate"
                        endDateName="endDate"
                    />

                    <EditorChecklist
                        label="프로젝트 기술스택"
                        value="skill"
                        list={PROJECT_STACK}
                    />

                    {/* 해시태그 */}
                    <EditorAddHash label="# 해시태그" value="hashtag" />

                    {/* 섬네일 */}
                    <ProjectThumbnailUploader
                        label="# 썸네일"
                        value="thumbnail"
                        projectKey={projectKey}
                    />

                    <EditorInput
                        label="Site Url"
                        placeholder="URL을 입력해주세요"
                        value="projectUrl"
                    />

                    <EditorTextArea
                        label="Contents"
                        value="description"
                        placeholder="썸네일 설명을 기재해주세요."
                    />

                    <ProjectEditorRoles keyName="projectRoles" />

                    {/* Quill Editor */}
                    {projectKey && (
                        <>
                            <Controller
                                name="projectDescription"
                                control={formhookMethod.control}
                                render={({ field }) => {
                                    const { ref, ...restField } = field;
                                    void ref; // `ref`를 제외하고 나머지 필드를 추출
                                    return (
                                        <TestQuillEditor
                                            {...restField} // `ref`를 제외한 나머지 프로퍼티 전달
                                            page={'project'}
                                            postKey={projectKey}
                                        />
                                    );
                                }}
                            />
                            {formhookMethod.formState.errors
                                .projectDescription && (
                                <p className="errorMessage">
                                    {
                                        formhookMethod.formState.errors
                                            .projectDescription.message
                                    }
                                </p>
                            )}
                        </>
                    )}
                    <ButtonWrap>
                        <Button.Submit>등록</Button.Submit>
                        <Button.Cancle onClick={cancelEvent}>
                            취소
                        </Button.Cancle>
                    </ButtonWrap>
                </FormStyle>
            </FormProvider>
        </AdminProjectStyle>
    );
}
