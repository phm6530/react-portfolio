import styled from 'styled-components';
import { InputLabel, TextAreaStyle } from 'component/ui/TextArea';
import { Wrapper } from './EditorStyle';
import InputErrorMessage from 'component/error/InputErrorMessage';
import React from 'react';
import { ProjectDetailProps } from '@type/ProjectTypes';
import { useFormContext } from 'react-hook-form';

const CustumTextAreaStyle = styled(TextAreaStyle)<{ $error?: boolean }>`
    flex-grow: 1;
`;

interface EditorTextAreaProps {
    label: string;
    value: keyof ProjectDetailProps;
    placeholder: string;
}

const EditorTextArea: React.FC<EditorTextAreaProps> = ({
    label,
    placeholder,
    value,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const errorMessage = errors[value]?.message;

    return (
        <>
            <Wrapper>
                <InputLabel>{label}</InputLabel>
                <CustumTextAreaStyle
                    $error={!!errorMessage}
                    placeholder={placeholder}
                    {...register(value)}
                />
                {typeof errorMessage === 'string' && (
                    <InputErrorMessage>{errorMessage}</InputErrorMessage>
                )}
            </Wrapper>
        </>
    );
};

export default EditorTextArea;
