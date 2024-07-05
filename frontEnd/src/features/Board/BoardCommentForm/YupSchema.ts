import * as Yup from 'yup';
import { findForBadword } from 'utils/wordingFilters';

const yupSchema = (login: boolean) =>
    Yup.object({
        userIcon: Yup.string().required('필수항목 입니다.'),
        userName: Yup.string()
            .required('필수항목 입니다.')
            .min(2, '최소 2글자 이상 적어주세요..')
            .max(20, '최대 20글자 이하로 적어주세요'),
        contents: Yup.string()
            .required('필수항목 입니다.')
            .min(4, '최소 4글자 이상 적어주세요..')
            .test('filterBadWord', '비속어는 입력 불가합니다...', value =>
                findForBadword(value),
            ),
        password: login
            ? Yup.string().notRequired()
            : Yup.string()
                  .required('비밀번호를 입력해주세요.')
                  .min(4, '최소 4글자 이상 적어주세요..'),
    });

export { yupSchema };
