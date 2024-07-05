const { NotFoundError } = require('../util/error');
const {
    postInsert,
    postUpdate,
    renderingData,
    blogtabService,
    getBlogDetail,
    getNewPostList,
} = require('../service/blogService');
const { runTransaction, getConn } = require('../util/dbUtil');

// 동적 카테고리 탭
const handleCategory = async (_, res, next) => {
    try {
        const categoryList = await runTransaction(async (conn) => {
            return blogtabService(conn);
        });
        res.json({ message: 'success', resData: categoryList });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

// 초기랜딩 + paging
const handleViewPostList = async (req, res, next) => {
    try {
        const { data, paging } = await runTransaction(async (conn) => {
            return renderingData(conn, req);
        });
        res.json({ message: 'success', resData: data, paging });
    } catch (error) {
        next(new NotFoundError(error.message));
    }
};

//post
const handleCreatePost = async (req, res, next) => {
    try {
        const body = req.body;
        await runTransaction(async (conn) => {
            const postResult = await postInsert(conn, body);
            return postResult;
        });
        res.status(200).json({ message: 'success' });
    } catch (error) {
        next(new NotFoundError(error.message));
    }
};

//post
const handlelViewPost = async (req, res, next) => {
    try {
        const postKey = req.params;
        const result = await runTransaction(async (conn) => {
            const postResult = await getBlogDetail(conn, postKey.key);
            return postResult;
        });

        res.status(200).json({ message: 'success', resData: result });
    } catch (error) {
        next(new NotFoundError(error.message));
    }
};

//postDelete
const HandleDeletePost = async (req, res, next) => {
    try {
        const result = await getConn(async (conn) => {
            const key = req.params.key;
            const sql_detetePost = 'delete from blog_metadata where post_id = ?;';

            const [row] = await conn.query(sql_detetePost, [key]);

            const isDelete = await row.affectedRows;
            return isDelete === 1 ? true : false;
        });

        res.status(200).json({ message: 'success', result });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

// update
const handleUpdatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const result = await runTransaction(async (conn) => {
            const updateResult = await postUpdate(conn, body, id);
            return updateResult;
        });

        res.status(200).json({ message: 'success', resData: result });
    } catch (error) {
        next(new NotFoundError(error.message));
    }
};

// 새글 컨트롤러
const HandleNewPostList = async (_, res, next) => {
    try {
        const result = await getConn((conn) => {
            return getNewPostList(conn);
        });

        res.status(200).json({ message: 'success', resData: result });
    } catch (error) {
        next(new NotFoundError(error.message));
    }
};

// 관련 댓글 get
const handlePostRelated = async (req, res, next) => {
    try {
        const postId = req.params.id;

        const result = await getConn(async (conn) => {
            const sql_RelatedList = `
            select 
                bm2.post_id,
                bm2.post_title,
                bm2.create_at,
                bt.thumnail_url
                from
                blog_metadata bm1
            join
                blog_metadata bm2 on bm1.category_id = bm2.category_id AND bm1.subcategory_id = bm2.subcategory_id 
            join 
                blog_thumnail bt on bm2.post_id = bt.post_id
            where
                bm1.post_id = ? AND bm2.post_id <> ?
            order by 
                post_id desc limit ? offset 0;
            `;
            const [rows] = await conn.query(sql_RelatedList, [postId, postId, 4]);
            ``;
            return rows;
        });

        res.status(200).json({ message: 'success', resData: result });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

module.exports = {
    handleCategory,
    handleViewPostList,
    handleCreatePost,
    handlelViewPost,
    HandleDeletePost,
    handleUpdatePost,
    HandleNewPostList,
    handlePostRelated,
};
