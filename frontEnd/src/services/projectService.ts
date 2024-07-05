import axios from 'axios';
import { requestHandler } from 'utils/apiUtils';
import { ENDPOINT_URL } from 'constants/apiUrl';
import { ProjectDetailProps, ProjectPostProps } from '@type/ProjectTypes';

interface ApiResData<T> {
    resData: T;
}

// Insert or Update하기
export const projectAction = async (
    formData: ProjectPostProps,
    Type: string | null,
): Promise<void> => {
    const url = `${ENDPOINT_URL}/project/action?type=${Type === 'edit' ? 'edit' : 'add'}`;
    await requestHandler(() => axios.post(url, formData));
};

// 초기데이터
export const projectFetch = async (): Promise<ProjectDetailProps[]> => {
    const url = `${ENDPOINT_URL}/project`;
    const { resData } = await requestHandler<ApiResData<ProjectDetailProps[]>>(
        () => axios.get(url),
    );
    return resData;
};

// 초기 edit 매핑
export const projectEdit = async (
    projectKey: string,
): Promise<ProjectDetailProps> => {
    const url = `${ENDPOINT_URL}/project/edit/${projectKey}`;
    const { resData } = await requestHandler<ApiResData<ProjectDetailProps>>(
        () => axios.get(url),
    );
    return resData;
};

// Detail
export const fetchDetail = async (key: string): Promise<ProjectPostProps> => {
    const url = `${ENDPOINT_URL}/project/${key}`;
    const { resData } = await requestHandler<ApiResData<ProjectPostProps>>(() =>
        axios.get(url),
    );

    return resData;
};

// Delete
export const projectDelete = async (key: string) => {
    const url = `${ENDPOINT_URL}/project/delete/${key}`;
    return requestHandler(() => axios.delete(url));
};

interface PrevnextList {
    description: string;
    id: number;
    thumbnail: string;
    project_key: string;
    isPage: string;
    title: string;
}

export const fetchProjectNextPrevList = async (
    key: string,
): Promise<PrevnextList[]> => {
    const url = `${ENDPOINT_URL}/project/nextprev/${key}`;
    const { resData } = await requestHandler<ApiResData<PrevnextList[]>>(
        async () => {
            return axios.get(url);
        },
    );
    return resData;
};
