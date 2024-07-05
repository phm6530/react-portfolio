import styled from 'styled-components';
import { Button } from './Button';

const ConfirmStyle = styled.div`
    text-align: center;
    p {
        font-weight: bold;
        font-size: 1rem;
        padding: 20px 0;
        span {
            color: rgba(114, 100, 239, 1);
        }
    }
`;

interface ConfirmProps {
    message: string;
    confirm: () => void;
}

export default function Confirm({ message, confirm }: ConfirmProps) {
    return (
        <ConfirmStyle>
            <p>
                [<span>{message}</span>]을/를 삭제하시겠습니까?
            </p>
            <Button.ConfirmButton onClick={confirm}>YES</Button.ConfirmButton>
        </ConfirmStyle>
    );
}
