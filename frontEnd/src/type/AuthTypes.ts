export interface LoginRequestProps {
    user_id: string;
    user_password: string;
}

export interface LoginResponseProps {
    message?: string;
    token: string;
    Auth: boolean;
}

export interface userData {
    id: string;
    access: string;
    name: string;
}

export interface tokenResponseProps {
    Auth: boolean;
    message: string;
}
