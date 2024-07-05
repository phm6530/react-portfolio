//댓글 카운팅 타입
type Board_todayReply = number;
type Board_AllReplyCount = number;

type Board_key = string;
type Board_contents = string;
type Board_date = string;
type Board_idx = number;
type Board_role = 'admin' | 'user';
type user_icon = string;
type user_name = string;

export interface BoardCommentItemProps {
    board_key: Board_key;
    contents: Board_contents;
    date: Board_date;
    idx: Board_idx;
    role: Board_role;
    user_icon: user_icon;
    user_name: user_name;
}

export interface BoardInfinityResponse {
    path: string;
    todayReply: Board_todayReply;
    counter: Board_AllReplyCount;
    pageData: BoardCommentItemProps[];
    nextPage: number | null;
}
