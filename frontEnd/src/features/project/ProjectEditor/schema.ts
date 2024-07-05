import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string().required('필수 입력란 입니다.'),
    skill: Yup.array()
        .of(Yup.string().required('스킬 항목은 필수입니다.'))
        .min(1, '한 개 이상의 stack을 등록해주세요.')
        .required('스킬 항목은 필수입니다.'),
    company: Yup.string().required('필수 입력란 입니다.'),
    hashtag: Yup.array()
        .of(Yup.string().required('해시태그 항목은 필수입니다.'))
        .min(1, '한 개 이상의 해시태그를 등록해주세요.')
        .required('해시태그 항목은 필수입니다.'),
    projectUrl: Yup.string()
        .required('필수 입력란 입니다.')
        .url('Url 형식으로 입력해주세요. 예)https://sitename.com'),
    startDate: Yup.date()
        .nullable() // null을 허용
        .transform((value, originalValue) =>
            originalValue === null ? null : new Date(originalValue),
        )
        .test(
            'startDate-before-endDate',
            '시작일은 종료일보다 빨라야 합니다.',
            function (value) {
                const { endDate } = this.parent;
                if (value && endDate) {
                    return value <= endDate;
                }
                return true;
            },
        )
        .required('시작일을 입력해주세요'),
    endDate: Yup.date()
        .nullable() // null을 허용
        .transform((value, originalValue) =>
            originalValue === null ? null : new Date(originalValue),
        )
        .test(
            'endDate-after-startDate',
            '종료일은 시작일 이후로 설정해주세요.',
            function (value) {
                const { startDate } = this.parent;
                if (value && startDate) {
                    return value >= startDate;
                }
                return true;
            },
        )
        .required('종료일을 입력해주세요'),
    thumbnail: Yup.string().required('프로젝트 썸네일을 첨부해주세요.'),
    description: Yup.string()
        .required('필수 입력란 입니다.')
        .min(6, '6글자 이상 써주세요.'),
    projectDescription: Yup.string().required('필수 입력란 입니다.'),
    projectRoles: Yup.array()
        .of(Yup.object().required('Role 항목은 필수입니다.'))
        .min(1, '한 개 이상의 Role을 등록해주세요.')
        .required('한개이상'),
});

export default schema;
