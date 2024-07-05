import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';

const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    text-align: center;
    padding-right: 28px;
    border-radius: 4rem;
    margin-right: 10px;

    cursor: pointer;
    svg {
        margin-left: auto;
        font-size: 12px;
        opacity: 0.6;
    }
    &:hover {
        transform: translateY(-5px);
    }

    transform: translateY(0);
    transition: transform 0.5s ease;
    span {
        font-weight: bold;
        /* color: #222; */
        font-size: 12px;
        ${props =>
            props.onClick &&
            `
            color: var(--color-link);
            text-decoration: underline;
        `}
    }
    img {
        width: 25px;
        margin-right: 15px;
    }
`;

export default function ContactButtons(): JSX.Element {
    return (
        <>
            <ButtonWrap>
                <ContactButton
                    onClick={() =>
                        window.open('https://open.kakao.com/o/sq4skkTf')
                    }
                >
                    <img src="img/contact/kakao.png" alt="kakao" />
                    <span>OPEN KAKAO TALK</span>
                    {/* <IoIosArrowForward size={'15'}/> */}
                    <FaLink />
                </ContactButton>
                <ContactButton
                    onClick={() => window.open('https://github.com/phm6530/')}
                >
                    <img src="img/contact/git.png" alt="git" />
                    <span>Git / @phm6530</span>
                    <FaLink />
                </ContactButton>

                <ContactButton>
                    <img src="img/contact/call.png" alt="call" />
                    <a href="call:01050278530">
                        <span>010-5027-8530</span>
                    </a>

                    {/* <IoIosArrowForward size={'15'}/> */}
                </ContactButton>

                <ContactButton>
                    <img src="img/contact/mail1.png" alt="mail" />
                    <span>squirrel309@naver.com</span>
                </ContactButton>
            </ButtonWrap>
        </>
    );
}
