import usePrograssbar from '@hooks/usePrograssbar';
import useTextsnap from '@hooks/useTextsnap';
import styled from 'styled-components';

const PrograssbarStyle = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 1rem;
    position: relative;
    background: var(--borer-line-color);
    border-radius: 5px;
    margin-bottom: 1rem;

    .bar {
        border-radius: 1rem;
        height: 20px;
        position: absolute;
        left: 0;
        width: 0;
        z-index: 1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        background: linear-gradient(
            90deg,
            #7b69e7 0%,
            #7498de 100%,
            #c981cb 100.01%
        );
        /* background: rgb(73 53 247); */
    }
`;

const Percent = styled.div`
    position: absolute;

    /* Rectangle 459 */
    right: 5px;
    box-sizing: border-box;

    color: #fff;
    /* box-shadow: 4px 4px 12.4px rgba(228, 233, 237, 0.75); */
    border-radius: 14px;
    text-align: center;
    font-size: 12px;
    span {
        color: #fff;
        display: inline-block;
    }
    .shape {
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        top: calc(100% + 7px);
        transform: translate(-50%, -50%);
        border-top: 10px solid #3e3866; /* 왼쪽 테두리 */
        border-left: 5px solid transparent; /* 왼쪽 테두리 */
        border-right: 5px solid transparent; /* 오른쪽 테두리 */
        border-bottom: 10px solid transparent; /* 아래쪽 테두리 */
    }
`;

const Prograssbar = ({ percent }: { percent: number }) => {
    const PrograssRef = usePrograssbar(percent);
    const textRef = useTextsnap(percent);

    return (
        <PrograssbarStyle>
            <div
                ref={PrograssRef} //프로그래스바 커스텀훅
                className="bar"
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <Percent>
                    <span ref={textRef}></span>%
                    {/* <span className="shape"></span> */}
                </Percent>
            </div>
        </PrograssbarStyle>
    );
};

export default Prograssbar;
