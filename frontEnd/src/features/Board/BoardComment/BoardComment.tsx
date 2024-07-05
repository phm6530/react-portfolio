import styled from 'styled-components';
import * as Yup from 'yup';

import { forwardRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// icon
import { TiDelete } from 'react-icons/ti';
import { FaCircleCheck } from 'react-icons/fa6';

import CommentDelete from '@features/Board/BoardCommentControl/CommentDelete';
import useCommentDelete from '@features/Board/hooks/useCommentDelete';

import {
    ReplyWrap,
    ReplyPicture,
    ReplyBubble,
    ReplyUserName,
} from '@features/Board/BoardComment/BoardCommentStyle';

import usePopupHook from '@hooks/usePopupHook';

import { type BoardCommentItemProps } from '@type/BoardTypes';
import { userRole } from '@type/CommonTypes';
import useStore from 'store/zustandStore';

const HoverStyle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return <span className={className}>{children}</span>;
};

const HoverStyled = styled(HoverStyle)`
    svg {
        color: #1d1d1d;
        opacity: 0.5;
    }
    &:hover {
        // 아이콘에 대한 호버 스타일 정의
        svg {
            opacity: 1;
        }
    }
`;

interface BoardCommentProps {
    item: BoardCommentItemProps;
    role: string;
    selectIdx: boolean;
    setSelectIdx: React.Dispatch<React.SetStateAction<string | null>>;
}

const BoardComment = forwardRef<HTMLDivElement, BoardCommentProps>(
    ({ item, role, selectIdx, setSelectIdx }, ref) => {
        const login = useStore(state => state.userAuth.login);
        const { mutate } = useCommentDelete();
        const { popupSetView, PopupComponent } = usePopupHook();

        const { user_icon, user_name, contents, date, board_key } = item;

        const schema = Yup.object({
            password: login
                ? Yup.string().notRequired()
                : Yup.string().required('비밀번호를 입력해주세요.'),
        });

        const { formState, ...restFormProps } = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                password: '',
            },
        });

        const deleteHandler = (key: string) => {
            login ? popupSetView(true) : setSelectIdx(key);
        };

        const deleteConfirm = async () => {
            mutate({ board_key });
        };

        return (
            <>
                <PopupComponent type="confirm" event={() => deleteConfirm()} />

                <ReplyWrap ref={ref} $admin={role === userRole.Admin}>
                    <ReplyPicture
                        $picture={user_icon}
                        className="replyPicture"
                    />

                    <ReplyBubble $admin={role === userRole.Admin}>
                        <div className="replyHeader">
                            <ReplyUserName>
                                {user_name}{' '}
                                {role === userRole.Admin && <FaCircleCheck />}
                            </ReplyUserName>
                            {(role === userRole.Admin && !login) || (
                                <div className="replyDelete">
                                    {!selectIdx && (
                                        <button
                                            onClick={() =>
                                                deleteHandler(board_key)
                                            }
                                        >
                                            <HoverStyled>
                                                <TiDelete size={20} />
                                            </HoverStyled>
                                        </button>
                                    )}
                                    {selectIdx && (
                                        <FormProvider
                                            {...restFormProps}
                                            formState={formState}
                                        >
                                            <CommentDelete
                                                board_key={board_key}
                                                setSelectIdx={setSelectIdx}
                                                mutate={mutate}
                                            />
                                        </FormProvider>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="replyDescription">{contents}</div>
                        <p className="replyDate">{date}</p>
                    </ReplyBubble>

                    {formState.errors.password && (
                        <p>{formState.errors.password.message}</p>
                    )}
                </ReplyWrap>
            </>
        );
    },
);

export default BoardComment;
