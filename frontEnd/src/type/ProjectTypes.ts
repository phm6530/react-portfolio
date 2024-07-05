export type ProjectKey = string;
export type HashTagType = string[];
export type skillType = string[];
export type startDate = Date | null;
export type endDate = Date | null;

export interface projectRoles {
    role: number;
    roleName: string;
    rolePercent: number;
    role_id?: number;
}
export interface ProjectDetailProps {
    title: string;
    skill: skillType;
    company: string;
    hashtag: HashTagType;
    projectUrl: string;
    startDate: startDate;
    endDate: endDate;
    thumbnail: string;
    description: string;
    projectDescription: string;
    projectRoles: projectRoles[];
}

export interface ProjectPostProps extends ProjectDetailProps {
    projectKey?: string | null;
}
export interface UploadThumbnailResponseProps {
    message: string;
    imgUrl: string;
}
