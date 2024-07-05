import styled from 'styled-components';
import InputErrorMessage from 'component/error/InputErrorMessage';
import { Button } from 'component/ui/Button';
import { useFormContext } from 'react-hook-form';
import useThumbnailUploader from '@features/project/hooks/useThumbnailUploader';

const UPloadFileName = styled.div`
    font-size: 12px;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;

    margin-left: 1rem;
`;

const WrapperFlex = styled.div`
    display: flex;
    align-items: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

interface ProjectThumbnailUploaderProps {
    label: string;
    value: string;
    projectKey: string;
}

const ProjectThumbnailUploader: React.FC<ProjectThumbnailUploaderProps> = ({
    value,
    projectKey,
}) => {
    const {
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();
    const thumNail = watch('thumbnail');
    const { mutateAsync } = useThumbnailUploader();
    const fileFiler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const ImgFile = e.target.files![0];

        if (!ImgFile) return; //없으면 리턴 해버림
        const imgSize = ImgFile.size / 1024 / 1024;

        if (parseInt(imgSize.toFixed(2)) > 5) {
            alert(`${imgSize} 는 너무 크네요.. 5mb이하만 가능합니다. `);
            return;
        }
        if (!ImgFile.type.startsWith('image/')) {
            alert('이미지 파일만 업로드 가능합니다.');
            return;
        }

        const formData = new FormData();
        const newFileName = ImgFile.name.replace(/[^\w.-]/g, '_');

        formData.append('image', ImgFile, newFileName); // 'img' 필드에 파일 추가

        //서버요청
        const { imgUrl } = await mutateAsync({ img: formData, projectKey });
        setValue(value, imgUrl, { shouldValidate: true });
        // shouldValidate = 설정된 값이 true일때 유효성 검사를 진행함.
        // 값이 변경될때도 반영됨
    };

    const errorMessage = errors[value]?.message as string | null;

    return (
        <Wrapper>
            {/* <InputLabel>{label}</InputLabel> */}
            <WrapperFlex>
                <Button.UploadButton htmlFor="input-file">
                    Upload a File
                </Button.UploadButton>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    id="input-file"
                    onChange={e => fileFiler(e)}
                />
                <UPloadFileName>
                    {thumNail ? thumNail : '파일없음'}
                </UPloadFileName>
            </WrapperFlex>

            {errorMessage && (
                <InputErrorMessage>{errorMessage}</InputErrorMessage>
            )}
        </Wrapper>
    );
};

export default ProjectThumbnailUploader;
