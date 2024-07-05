import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { Controller, FieldErrors, useFormContext } from 'react-hook-form';
import { Wrapper } from 'component/editor/EditorStyle';
import { InputLabel } from 'component/ui/TextArea';

import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import InputErrorMessage from 'component/error/InputErrorMessage';
import { FaRegCalendar } from 'react-icons/fa';
import { ProjectDetailProps } from '@type/ProjectTypes';

// 데이터피커 스타일
const DatePickerStyle = styled(DatePicker)<{ $error?: boolean }>`
    padding: 5px 10px;
    border-radius: 0.5em;
    background: ${({ theme }) => theme.inputBackground};
    border: 1px solid var(--color-lightBlue);
    /* background: transparent; */
    font-size: 14px;
    cursor: pointer;
    ${props => props.$error && `border: 1px solid var(--color-error);`};
`;

const RageStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 1rem;
`;

const CustumDatePickerStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const CustumWrapper = styled(Wrapper)`
    flex-direction: row !important;
`;

const PickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormWrap = styled.div`
    position: relative;
    & svg {
        position: absolute;
        pointer-events: none;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        color: var(--color-lightBlue);
    }
`;

interface CustumDatePickerProps {
    label: string;
    startDateName: keyof ProjectDetailProps;
    endDateName: keyof ProjectDetailProps;
}
const CustumDatePicker: React.FC<CustumDatePickerProps> = ({
    label,
    startDateName,
    endDateName,
}) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const {
        control,
        formState: { errors },
    } = useFormContext();

    const getErrorMessage = (
        error: FieldErrors<ProjectDetailProps> | undefined,
        name: keyof ProjectDetailProps,
    ): string | undefined => {
        const fieldError = error ? error[name] : undefined;
        if (fieldError && 'message' in fieldError) {
            return fieldError.message;
        }
        return undefined;
    };

    const isValidDateValue = (
        value: unknown,
    ): value is string | number | Date => {
        return (
            value instanceof Date ||
            typeof value === 'string' ||
            typeof value === 'number'
        );
    };
    return (
        <CustumDatePickerStyle>
            <InputLabel>{label}</InputLabel>
            <CustumWrapper>
                <PickerWrapper>
                    <Controller
                        name={startDateName}
                        control={control}
                        render={({ field: { onChange, value } }) => {
                            const date = isValidDateValue(value)
                                ? new Date(value)
                                : null;
                            return (
                                <FormWrap>
                                    <DatePickerStyle
                                        $error={!!errors?.[startDateName]}
                                        onChange={(date: Date | null) => {
                                            setStartDate(date);
                                            onChange(date);
                                        }}
                                        showMonthDropdown={true}
                                        selected={date}
                                        placeholderText="시작일을 입력해주세요."
                                        dateFormat="yyyy-MM-dd"
                                        maxDate={endDate}
                                    />
                                    <FaRegCalendar />
                                </FormWrap>
                            );
                        }}
                    />

                    {getErrorMessage(errors, startDateName) && (
                        <InputErrorMessage>
                            {getErrorMessage(errors, startDateName)}
                        </InputErrorMessage>
                    )}
                </PickerWrapper>
                <RageStyle>-</RageStyle>

                <PickerWrapper>
                    <Controller
                        name={endDateName}
                        control={control}
                        render={({ field: { onChange, value } }) => {
                            const date = isValidDateValue(value)
                                ? new Date(value)
                                : null;
                            return (
                                <FormWrap>
                                    <DatePickerStyle
                                        $error={!!errors?.[endDateName]}
                                        onChange={(date: Date | null) => {
                                            setEndDate(date);
                                            onChange(date);
                                        }}
                                        showMonthDropdown={true}
                                        selected={date}
                                        placeholderText="종료일을 입력해주세요."
                                        dateFormat="yyyy-MM-dd"
                                        minDate={startDate}
                                    />
                                    <FaRegCalendar />
                                </FormWrap>
                            );
                        }}
                    />
                    {getErrorMessage(errors, endDateName) && (
                        <InputErrorMessage>
                            {getErrorMessage(errors, endDateName)}
                        </InputErrorMessage>
                    )}
                </PickerWrapper>
            </CustumWrapper>
        </CustumDatePickerStyle>
    );
};

export default CustumDatePicker;
