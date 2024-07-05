import {
    Label,
    RadioWrap,
    RadioStyle,
    CrectorDeScription,
} from '@features/Board/BoardCrector/BoardCrectorStyle';

interface BoardCrectorProps {
    value: string;
    onChange: (value: string) => void;
    name: string;
}

const BoardCrector: React.FC<BoardCrectorProps> = ({
    value,
    onChange,
    name,
}) => {
    const handleIconChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
        <>
            <Label>
                <img
                    src="/img/board/talk2.png"
                    alt=""
                    style={{ width: '25px', marginRight: '10px' }}
                />
                <span>Crector </span>
                <span
                    style={{
                        fontSize: '13px',
                        opacity: 0.5,
                        marginLeft: '15px',
                        marginTop: '5px',
                        fontWeight: 'normal',
                    }}
                >
                    댓글에 남겨질 캐릭터에요!
                </span>
                <CrectorDeScription></CrectorDeScription>{' '}
                {/* <span style={{ marginBottom: '4px' }}>
                    <QuestionMark
                        style={{ color: '#0000005e', fontSize: 20 }}
                    />
                </span> */}
            </Label>

            <RadioWrap>
                {[...Array(6)].map((_, idx) => {
                    const icon = `person_${idx + 1}`;

                    return (
                        <RadioStyle
                            key={icon}
                            className={icon === value ? 'checked' : undefined}
                        >
                            <img src={`/img/board/${icon}.png`} alt="" />
                            <input
                                type="radio"
                                value={icon}
                                onChange={handleIconChange}
                                name={name}
                                checked={value === icon}
                            />
                        </RadioStyle>
                    );
                })}
            </RadioWrap>
        </>
    );
};

export default BoardCrector;
