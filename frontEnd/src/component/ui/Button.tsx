import styled from 'styled-components';
import { IoMdArrowForward } from 'react-icons/io';
import { MdUpload } from 'react-icons/md';
import { device } from 'config/DeviceConfig';

interface ButtonProps {
    style?: React.CSSProperties;
    children: React.ReactNode;
    disabled?: boolean;
    active?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    type?: 'button' | 'submit' | 'reset';
}

const SimpleBtn = styled.button`
    font-size: 0.9rem;
    background: #000;
    padding: 1rem;
`;

const Type: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <SimpleBtn {...props}>{children}</SimpleBtn>;
};

const Submit: React.FC<ButtonProps> = ({ children, disabled, ...props }) => {
    return (
        <button className="btn-mainSubmit" disabled={disabled} {...props}>
            {children}
            <div className="submit_Icon">
                <IoMdArrowForward />
            </div>
        </button>
    );
};

const Cancle: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="cancelButton"
            // $page={page}
            {...props}
        >
            {children}
            <div className="submit_Icon">
                <IoMdArrowForward />
            </div>
        </button>
    );
};

const ForsquareBtn: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className="btn-scheduleControl" {...props}>
            {children}
        </button>
    );
};

const Popup = () => {
    return (
        <button className="btn-popupTrigger">
            Guest Book Wirte
            <img src="/img/board/arrow2.png" alt="arrow_2" />
        </button>
    );
};

const ConfirmButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className="btn-confirm" {...props}>
            {children}
        </button>
    );
};

const UploadBtn = styled.label`
    font-size: 14px;
    display: flex;
    align-items: center;
    border: 1px solid var(--color-lightBlue);
    color: var(--color-lightBlue);
    padding: 0.5rem 0.7rem;
    border-radius: 5px;
    cursor: pointer;
    &:active {
        background: #304149;
    }
    & svg {
        margin-left: 0.5rem;
    }
`;

interface UploadButtnProps extends ButtonProps {
    htmlFor: string;
}

const UploadButton: React.FC<UploadButtnProps> = ({ children, ...props }) => {
    return (
        <UploadBtn {...props}>
            {children}
            <MdUpload />
        </UploadBtn>
    );
};

const BtnSubmitStyle = styled.button<{ $active?: boolean }>`
    background: var(--background-category-color);
    height: 2.4rem;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 1rem;
    border-radius: 3rem;
    margin: 0.4rem;
    background: var(--background-category-color);
    ${props =>
        props.$active &&
        `            
            background-color: #000;
            color: rgba(255, 255, 255, 1);
    `};
    /* border: 1px solid var(--borer-line-color); */
    @media ${device.tablet} {
        margin: 0.2rem;
        height: 2.2rem;
    }
`;

const SubmitButton: React.FC<ButtonProps> = ({
    children,
    active,
    ...props
}) => {
    return (
        <BtnSubmitStyle $active={active} {...props}>
            {children}
        </BtnSubmitStyle>
    );
};

const ActionButtonStyle = styled.button`
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    background: #ffffff05;
    margin-left: 0.5rem;
    font-size: 14px;
    font-family: var(--fontfamily-type-1);

    &:hover {
        background: #3a363623;
    }
    transition: background 0.3s ease;
`;

const Action: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <ActionButtonStyle {...props}>{children}</ActionButtonStyle>;
};

export function Button({ children }: ButtonProps) {
    return <button>{children}</button>;
}

Button.Type = Type;
Button.Submit = Submit;
Button.Popup = Popup;
Button.ForsquareBtn = ForsquareBtn;
Button.ConfirmButton = ConfirmButton;
Button.Cancle = Cancle;
Button.UploadButton = UploadButton;
Button.SubmitButton = SubmitButton;
Button.Action = Action;
