import { forwardRef } from 'react';
import { InputStyle, TextAreaStyle } from 'component/ui/TextArea';

import styled from 'styled-components';
import ErrorBubble from 'component/error/ErrorBubble';
import { FieldError } from 'react-hook-form';

const FormInputDiv = styled.div`
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    position: relative;
    flex-direction: column;

    textarea {
        width: 100%;
        min-height: 10px;
    }

    input:focus,
    textarea:focus {
        background: #fff;
    }

    span {
        left: 10px;
        display: block;
        font-weight: bold;
        width: 80px;
        margin-left: 5px;
        margin-bottom: 4px;
        margin-top: 0.2rem;
    }
`;
interface BoardCommentInputProps {
    label: string;
    error?: FieldError;
    type?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    isAuth?: boolean;
}
const BoardCommentInput = forwardRef<
    HTMLInputElement | HTMLDivElement,
    BoardCommentInputProps
>(({ label, error, type, isAuth, name, ...rest }, ref) => {
    return (
        <>
            <FormInputDiv>
                <span>{label}</span>
                {type === 'textarea' ? (
                    <TextAreaStyle
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        $error={!!error}
                        {...rest}
                    />
                ) : (
                    <InputStyle
                        ref={ref as React.Ref<HTMLInputElement>}
                        $error={!!error}
                        type={name === 'password' ? 'password' : 'text'}
                        autoComplete="off"
                        disabled={isAuth}
                        {...rest}
                    />
                )}
                {error && <ErrorBubble>{error.message}</ErrorBubble>}
            </FormInputDiv>
        </>
    );
});

export default BoardCommentInput;
