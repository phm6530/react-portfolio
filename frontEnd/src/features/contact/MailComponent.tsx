import { InputStyle, TextAreaStyle } from '../../component/ui/TextArea';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { SubTitle } from 'component/ui/Subtitle';
import { Button } from '../../component/ui/Button';
import { FaCheck } from 'react-icons/fa';
import ErrorBubble from 'component/error/ErrorBubble';
import DotLoading from 'component/loading/DotLoading';
import { mailFormProperty } from '@type/contactTypes';

import {
    FormStyle,
    FieldLabel,
    ContactContents,
    InputMargin,
    RadioLabel,
    RadioWrap,
} from '@features/contact/MailComponentStyle';
import useMail from '@features/contact/hooks/useMail';

//라디오폼
const mailRadio: string[] = [
    '일반 문의',
    '뉴스레터',
    '유지보수',
    '홍보 페이지 제작',
    '기타',
];

export default function MailComponent() {
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<mailFormProperty>();
    const [mailSubmit, setMailSubmit] = useState<boolean>(false);
    const [radioIdx, setRadioIdx] = useState<number>(0);
    const { mutateAsync } = useMail();

    //초기값
    useEffect(() => {
        reset({
            radioOption: '일반 문의',
        });
    }, [reset]);

    const onSubmitHandler: SubmitHandler<mailFormProperty> = async (
        data: mailFormProperty,
    ) => {
        setMailSubmit(true);
        await mutateAsync(data);
        setMailSubmit(false);
        reset();
    };

    return (
        <>
            {mailSubmit && <DotLoading Message={'메일 전송중...'} />}
            <ContactContents>
                <FormStyle onSubmit={handleSubmit(onSubmitHandler)}>
                    <SubTitle>
                        {/* <img src="/img/contact/dev_person_1.png" alt="dev_icon" className='dev_icon'/> */}
                        <div className="subText">
                            <span className="point">HI! PHM, DEVELOPER</span>
                        </div>
                    </SubTitle>
                    <RadioWrap>
                        <FieldLabel>
                            문의내용 *{' '}
                            <span>해당 문의사항은 메일로 전달됩니다.</span>
                        </FieldLabel>

                        <Controller
                            name="radioOption"
                            control={control}
                            rules={{ required: '문의 내용을 선택해주세요' }}
                            render={({ field }) => (
                                <>
                                    {mailRadio.map((e, idx) => {
                                        return (
                                            <RadioLabel
                                                $check={radioIdx === idx}
                                                key={`radio_${idx}`}
                                            >
                                                <input
                                                    type="radio"
                                                    {...field}
                                                    onChange={() => {
                                                        setRadioIdx(idx);
                                                        field.onChange(e);
                                                    }}
                                                />
                                                <FaCheck size={'14'} />
                                                <span>{e}</span>
                                            </RadioLabel>
                                        );
                                    })}
                                </>
                            )}
                        />
                        {errors.radioOption && (
                            <ErrorBubble>
                                {errors.radioOption.message}
                            </ErrorBubble>
                        )}
                    </RadioWrap>

                    <InputMargin>
                        <FieldLabel>보내는 분 *</FieldLabel>
                        <InputStyle
                            placeholder="보내시는 분"
                            type="text"
                            {...register('who', {
                                required: '성함이나 회사명을 입력해주세요.',
                            })}
                            $error={!!errors.who}
                        />
                        {errors.who && (
                            <ErrorBubble>{errors.who.message}</ErrorBubble>
                        )}
                    </InputMargin>

                    <InputMargin>
                        <FieldLabel>회신 받으실 연락처*</FieldLabel>
                        <InputStyle
                            placeholder="보내시는 분"
                            type="text"
                            {...register('yourContact', {
                                required: '회신 받으실 연락처를 적어주세요~',
                            })}
                            $error={!!errors.yourContact}
                        />
                        {errors.yourContact && (
                            <ErrorBubble>
                                {errors.yourContact.message}
                            </ErrorBubble>
                        )}
                    </InputMargin>

                    <InputMargin>
                        <FieldLabel>내용 *</FieldLabel>
                        <TextAreaStyle
                            rows={7}
                            placeholder="내용을 넣어주세요"
                            {...register('description', {
                                required: '내용을 적어주세요',
                                minLength: {
                                    value: 10,
                                    message: '10글자 이상 기재 부탁드립니다.',
                                },
                            })}
                            $error={!!errors.description}
                        />
                        {errors.description && (
                            <ErrorBubble>
                                {errors.description.message}
                            </ErrorBubble>
                        )}
                    </InputMargin>

                    <Button.Submit
                        style={{ marginLeft: 'auto' }}
                        disabled={mailSubmit}
                    >
                        문의 메일 보내기
                    </Button.Submit>
                </FormStyle>
            </ContactContents>
        </>
    );
}
