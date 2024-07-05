import styled from 'styled-components';

//toast css
import 'react-toastify/dist/ReactToastify.css';

import { useForm, FormProvider, Controller } from 'react-hook-form';
import {
    useMutation,
    useQueryClient,
    useQuery,
    useIsFetching,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import {
    useSearchParams,
    useNavigate,
    useParams,
    useLocation,
} from 'react-router-dom';
//lib 버전 통일위해서 lib.js 운용할란다..

export const ReactStyled = styled;
export const ReactHookForm = { useForm, FormProvider, Controller };
export const ReactQuery = {
    useMutation,
    useQueryClient,
    useQuery,
    useIsFetching,
    QueryCache,
    QueryClient,
    QueryClientProvider,
};
export const ReactRouteDom = {
    useSearchParams,
    useNavigate,
    useParams,
    useLocation,
};
