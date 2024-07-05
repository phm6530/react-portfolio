import styled from 'styled-components';
import InputErrorMessage from 'component/error/InputErrorMessage';
import { InputLabel, InputStyle } from 'component/ui/TextArea';

// import { MdCancel } from 'react-icons/md';
import { HashTag } from '@style/commonStyle';
import { Button } from '@mui/material';
import { Wrapper } from './EditorStyle';
import { useRef } from 'react';
import { ProjectDetailProps } from '@type/ProjectTypes';
import { useFormContext } from 'react-hook-form';
import { MdCancel } from 'react-icons/md';

const CustomInputWrap = styled(InputStyle)`
    flex-grow: 1;
    ${props => props.$error && 'border: 1px solid red'}
`;

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    max-width: 300px;
    width: 90%;
`;

const HashtagWrap = styled.div`
    border: 1px solid ${({ theme }) => theme.listColor};
    background: ${({ theme }) => theme.listBackground};
    border-radius: 0.3rem;
    padding: 0.5rem 0.5rem;
    min-height: 30px;
`;

interface EditorAddHashprops {
    label: string;
    value: keyof ProjectDetailProps;
}

const EditorAddHash: React.FC<EditorAddHashprops> = ({ label, value }) => {
    const valueRef = useRef<HTMLInputElement>(null);
    const {
        getValues,
        trigger,
        setValue,
        formState: { errors },
    } = useFormContext();
    const prevArr = getValues(value) as string[];

    // hashTag
    const addHashTag = () => {
        if (valueRef.current) {
            const newArr = [...prevArr, valueRef.current.value];
            setValue(value, newArr);
            valueRef.current.value = '';
        }
        trigger(value); // 유효성검사
    };

    const removeHashtag = (index: number) => {
        const newArr = prevArr.filter((_, idx) => idx !== index);
        setValue(value, newArr);
        trigger(value); // 유효성검사
    };

    const arr = getValues(value) as string[];
    const errorMessage = errors[value]?.message as string | null;

    return (
        <>
            <Wrapper>
                <InputLabel>{label}</InputLabel>

                <InputWrap>
                    <CustomInputWrap ref={valueRef} />
                    <Button onClick={() => addHashTag()}>+ Add</Button>
                </InputWrap>
                {errorMessage && (
                    <InputErrorMessage>{errorMessage}</InputErrorMessage>
                )}

                <HashtagWrap>
                    {arr.map((hashTag: string, index: number) => {
                        return (
                            <HashTag key={`hash${index}`}>
                                {hashTag}
                                <button
                                    type="button"
                                    onClick={() => removeHashtag(index)}
                                >
                                    <MdCancel />
                                </button>
                            </HashTag>
                        );
                    })}
                </HashtagWrap>
            </Wrapper>
        </>
    );
};

export default EditorAddHash;
