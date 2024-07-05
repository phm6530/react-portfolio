import axios from 'axios';
import { UploadThumbnailResponseProps } from '@type/ProjectTypes';
import { ENDPOINT_URL } from 'constants/apiUrl';
import { requestHandler } from 'utils/apiUtils';

// 썸네일 이미지 업로드
const uploadThumbNail = async ({
    img,
    projectKey,
}: {
    img: FormData;
    projectKey: string;
}): Promise<UploadThumbnailResponseProps> => {
    const url = `${ENDPOINT_URL}/project/uploadimg/${projectKey}?page=project`;
    return requestHandler<UploadThumbnailResponseProps>(() =>
        axios.post(url, img),
    );
};

// 에디터 이미지 업로더
const uploadContentsImg = async ({
    key,
    formData,
    page,
}: {
    key: string;
    formData: FormData;
    page: string;
}): Promise<UploadThumbnailResponseProps> => {
    const url = `${ENDPOINT_URL}/${page}/uploadimg/${key}?page=${page}`;
    return requestHandler<UploadThumbnailResponseProps>(() =>
        axios.post(url, formData),
    );
};

export { uploadThumbNail, uploadContentsImg };
