import styled from 'styled-components';
import InputErrorMessage from 'component/error/InputErrorMessage';
import { InputStyle, InputLabel } from 'component/ui/TextArea';
import { Wrapper } from './EditorStyle';
import { ProjectDetailProps } from '@type/ProjectTypes';
import { useFormContext } from 'react-hook-form';

const CustomInputWrap = styled(InputStyle)<{ $error?: boolean }>`
    flex-grow: 1;
    ${props => props.$error && 'border: 1px solid red'}
`;

interface EditorInputProps {
    label: string;
    placeholder: string;
    value: keyof ProjectDetailProps;
}

const EditorInput: React.FC<EditorInputProps> = ({
    label,
    placeholder,
    value,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const errorMessage = errors[value]?.message as string | undefined;

    return (
        <>
            <Wrapper>
                <InputLabel>{label}</InputLabel>
                <CustomInputWrap
                    $error={!!errors[value]}
                    placeholder={placeholder}
                    {...register(value)}
                />
                {errorMessage && ( // 에러 메시지가 존재하면 출력
                    <InputErrorMessage>{errorMessage}</InputErrorMessage>
                )}
            </Wrapper>
        </>
    );
};

export default EditorInput;
