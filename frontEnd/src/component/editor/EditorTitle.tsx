import styled from 'styled-components';
import { InputLabel, InputStyle } from 'component/ui/TextArea';
import { Wrapper } from './EditorStyle';
import InputErrorMessage from 'component/error/InputErrorMessage';
import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

const CustomInputWrap = styled(InputStyle)<{ $error: boolean }>`
    flex-grow: 1;
    font-size: 16px;
    ${props => props.$error && 'border: 1px solid red'}
`;
interface EditorTitleProps {
    placeholder: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
}

const EditorTitle: React.FC<EditorTitleProps> = ({
    placeholder,
    error,
    register,
}) => {
    return (
        <>
            <Wrapper>
                <InputLabel>제목</InputLabel>
                <CustomInputWrap
                    $error={!!error?.message}
                    placeholder={placeholder}
                    {...register}
                />
                {error && error && (
                    <InputErrorMessage>{error?.message}</InputErrorMessage>
                )}
            </Wrapper>
        </>
    );
};

export default EditorTitle;
