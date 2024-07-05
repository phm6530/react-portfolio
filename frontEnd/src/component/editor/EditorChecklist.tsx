import { InputLabel } from 'component/ui/TextArea';
import InputErrorMessage from 'component/error/InputErrorMessage';
import { Wrapper } from './EditorStyle';
import styled from 'styled-components';
import { ProjectDetailProps } from '@type/ProjectTypes';
import { useFormContext } from 'react-hook-form';

const ProjectSkillWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const CheckStyle = styled.label`
    display: inline-block;
    color: #555969;
    border-radius: 4px;
    padding: 0.3rem 0.5rem;
    font-size: 12px;
    font-weight: bold;
    margin-right: 0.6rem;
    color: rgb(120, 141, 170);

    display: flex;
    cursor: pointer;
    padding: 0.3rem 0.3rem;
    & input {
        margin-right: 0.5rem;
    }

    border: 1px solid rgba(48, 56, 64, 0.5);
`;

interface EditorChecklistProps {
    label: string;
    value: keyof ProjectDetailProps;
    list: string[];
}

const EditorChecklist: React.FC<EditorChecklistProps> = ({
    label,
    value,
    list,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const errorMessage = errors[value]?.message as string | null;

    return (
        <Wrapper>
            <div style={{ display: 'flex' }}>
                <InputLabel>{label}</InputLabel>
            </div>
            <ProjectSkillWrap>
                {list.map((item: string, idx: number) => {
                    return (
                        <CheckStyle key={idx}>
                            <input
                                type="checkbox"
                                key={item}
                                value={item}
                                {...register(value)}
                                // onChange={() => isCheck(item)}
                            />
                            {item}
                        </CheckStyle>
                    );
                })}
                {errorMessage && (
                    <InputErrorMessage>{errorMessage}</InputErrorMessage>
                )}
            </ProjectSkillWrap>
        </Wrapper>
    );
};

export default EditorChecklist;
