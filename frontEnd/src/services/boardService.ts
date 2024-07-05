import { BoardInfinityResponse } from '@type/BoardTypes';
import axios from 'axios';
import { ENDPOINT_URL } from 'constants/apiUrl';
import { requestHandler } from 'utils/apiUtils';

// 초기 데이터 + 페이징
const fetchReply = async (
    page: number | null,
): Promise<BoardInfinityResponse> => {
    const targetIdx = page || 0;
    const Url = `${ENDPOINT_URL}/Board/${targetIdx}`;
    const tes = await requestHandler<BoardInfinityResponse>(() =>
        axios.get(Url),
    );
    return tes;
};

interface deleteData {
    board_key: string;
}

//댓글 삭제로직
const deleteFetch = async (data: deleteData) => {
    const token = localStorage.getItem('token');
    const Url = `${ENDPOINT_URL}/board/reply/delete`;

    const requestFormData = {
        ...data,
        auth: Boolean(token),
    };

    const headers = {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
    };

    return requestHandler(() => axios.post(Url, requestFormData, { headers }));
};

// reply Submit 로직
const addReply = async (formData: object) => {
    const token = localStorage.getItem('token');
    const Url = `${ENDPOINT_URL}/Board/reply${token ? '/auth' : ''}`;

    const headers = {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
    };

    const result = await requestHandler(() =>
        axios.post(Url, formData, { headers }),
    );
    return result;
};

export { addReply, fetchReply, deleteFetch };
