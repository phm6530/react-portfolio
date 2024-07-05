import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import { useMemo, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/atom-one-dark.min.css';
import { IMG_URL } from 'constants/apiUrl';
import { uploadContentsImg } from 'services/uploadService';
const EditorStyle = styled.div`
    /* padding: 2rem 0; */
`;

const ReactQuillStyle = styled(ReactQuill)`
    /* background: var(--color-background-input); */
    .ql-toolbar {
        span,
        button,
        svg,
        path,
        line,
        polygon,
        rect,
        polyline {
            color: var(--quill-toolbar-color);
            stroke: var(--quill-toolbar-color) !important;
        }
        .ql-active span,
        .ql-active button,
        .ql-active svg,
        .ql-active path,
        .ql-active line,
        .ql-active polygon,
        .ql-active rect,
        .ql-active polyline {
            color: red;
            stroke: #239bd5 !important;
        }
    }
    .ql-editor {
        max-height: 500px !important;
        line-height: 2 !important;
        font-size: 16px;
        font-family: 'Poppins', 'SUIT-Regular', sans-serif;
    }
    .ql-align-center {
        text-align: center;
        img {
            display: block;
            margin: auto;
        }
    }
`;

interface testQuillProps {
    postKey: string;
    page: string;
}

const TestQuillEditor: React.FC<testQuillProps> = ({
    postKey,
    page,
    ...props
}) => {
    const quillRef = useRef<ReactQuill>(null);

    const { mutateAsync } = useMutation({
        mutationFn: uploadContentsImg,
        onSuccess: () => {
            toast.success('업로드됨');
        },
    });

    const previewImage = async (file: File) => {
        const formData = new FormData();

        const newFileName = file.name.replace(/[^\w.-]/g, '_');
        formData.append('image', file, newFileName); // 'img' 필드에 파일 추가

        //quill editor
        if (quillRef.current) {
            const editor = quillRef.current.getEditor();

            //커서위치 가져옴
            const range = editor.getSelection();
            if (range) {
                const result = await mutateAsync({
                    key: postKey,
                    formData,
                    page,
                });

                editor.insertEmbed(
                    range.index,
                    'image',
                    `${IMG_URL}/${result.imgUrl}`,
                );
                editor.insertText(range.index + 1, '\n'); //뒤로 한칸가서 엔터 치기
                editor.setSelection(range.index + 2, 0); //마우커서는 엔터 뒤로
            }
        }
    };

    const imageHandler = () => {
        const input = document.createElement('input')!;
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.click(); // 이미지 input 강제 트리거 시키는거

        input.addEventListener('change', async () => {
            const file = input.files && input.files[0];
            if (file instanceof File) {
                previewImage(file);
            } else {
                toast.error('파일형식이 아닙니다');
            }
        });
    };

    hljs.configure({
        languages: [
            'javascript',
            'ruby',
            'python',
            'java',
            'cpp',
            'kotlin',
            'sql',
        ],
    });

    //게시판 형식 메모이제이션해서 매번 다시 할당되지 않도록 함
    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ size: ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'code-block'],
                    ['image'],
                    ['blockquote'],
                    // [({ list: 'ordered' }, { list: 'bullet' })],
                    // [{ script: 'sub' }, { script: 'super' }],
                    [
                        'align',
                        { align: 'center' },
                        { align: 'right' },
                        { align: 'justify' },
                    ],
                    [{ color: [] }],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
            syntax: {
                highlight: (text: string) => hljs.highlightAuto(text).value,
                languages: hljs.registerLanguage('javascript', javascript),
            },
            history: {
                delay: 2000, // 변경 사항 간의 최소 시간 간격 (밀리초)
                maxStack: 500, // 히스토리 스택의 최대 길이
                userOnly: true, // 사용자 입력만 히스토리에 저장
            },
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <EditorStyle>
            {/* <SubTitle><span className='subText'>PROJECT - 내용</span></SubTitle> */}
            <ReactQuillStyle modules={modules} ref={quillRef} {...props} />
        </EditorStyle>
    );
};

export default TestQuillEditor;
