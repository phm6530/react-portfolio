import { requestHandler } from 'utils/apiUtils';
import axios from 'axios';
import { ENDPOINT_URL } from 'constants/apiUrl';
import { mailFormProperty } from '@type/contactTypes';

export const fetchMailHandler = async (mailData: mailFormProperty) => {
    const url = `${ENDPOINT_URL}/contact`;
    return requestHandler(() => axios.post(url, mailData));
};
