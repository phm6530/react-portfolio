import { useMutation } from '@tanstack/react-query';
import { uploadThumbNail } from 'services/uploadService';
import { UploadThumbnailResponseProps } from '@type/ProjectTypes';

const useThumbnailUploader = () => {
    return useMutation<
        UploadThumbnailResponseProps,
        Error,
        { img: FormData; projectKey: string }
    >({
        mutationFn: uploadThumbNail,
    });
};

export default useThumbnailUploader;
