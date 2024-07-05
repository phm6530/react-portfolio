require('dotenv').config();
const blogModel = require('../models/blogModel');

// newPostList 새글
const getNewPostList = async (conn) => {
    const sql_getNewpost = `
    select 
        post_id,
        post_title,
        post_description,
        create_at,
        (
            CASE
                WHEN create_at >= CURRENT_DATE - INTERVAL 2 DAY THEN 1
                ELSE 0
            END
        ) AS post_new
    from
        blog_metadata as bm
    order by post_id desc limit ? offset 0;`;
    const [rows] = await conn.query(sql_getNewpost, [5]);
    return rows;
};

const postInsert = async (conn, body, id) => {
    const { title, category, post, user, key, thumNail, description } = body;
    const [mainCategory, subCategory] = category.split(':');

    const sqlGetCategoryId = 'SELECT category_id FROM blog_categories WHERE category_name = ?;';
    const sqlGetSubCategoryId = `SELECT bs.subcategory_id FROM blog_subcategories bs JOIN blog_categories bc ON bs.fk_category_id = bc.category_id WHERE bs.subcategory_name = ? AND bc.category_name = ?;
    `;

    const [[category_id], [subCategory_id]] = await Promise.all([
        conn.query(sqlGetCategoryId, [mainCategory]),
        conn.query(sqlGetSubCategoryId, [subCategory, mainCategory]),
    ]);

    const sql_postMeta = `insert into blog_metadata 
    (post_title , post_description , create_at, create_user , category_id , subcategory_id )  
    values(? , ? , now() , ? , ? , ?)`;

    const [meta_result] = await conn.query(sql_postMeta, [
        title,
        description,
        user.name,
        category_id[0].category_id,
        subCategory_id[0].subcategory_id,
    ]);

    console.log(meta_result);

    const postId = meta_result.insertId;

    const sql_contents = `
        insert into blog_post (post_id , contents , contents_key ) values(?, ?, ?);
    `;
    await conn.query(sql_contents, [postId, post, key]);

    const sql_thumNail = `
        insert into blog_thumnail (post_id, thumnail_url) values(?, ?);
    `;
    await conn.query(sql_thumNail, [postId, thumNail]);
};

/**
 *
 * @param {d} conn
 * @param {*} body
 * @param {*} postId 포스트 아이디 임 프론트에서 보냈음
 */
const postUpdate = async (conn, body, postId) => {
    const { title, category, post, user, thumNail, description } = body;

    console.log(body);

    const [mainCategory, subCategory] = category.split(':');

    const sqlGetCategoryId = 'SELECT category_id FROM blog_categories WHERE category_name = ?;';
    const sqlGetSubCategoryId = `SELECT bs.subcategory_id FROM blog_subcategories bs JOIN blog_categories bc ON bs.fk_category_id = bc.category_id WHERE bs.subcategory_name = ? AND bc.category_name = ?;
    `;

    const [[category_id], [subCategory_id]] = await Promise.all([
        conn.query(sqlGetCategoryId, [mainCategory]),
        conn.query(sqlGetSubCategoryId, [subCategory, mainCategory]),
    ]);

    const sql_UpdateMeta = `
        UPDATE blog_metadata 
        SET 
            post_title = ? , 
            post_description = ? , 
            update_at = now() , 
            create_user = ? , 
            category_id = ? , 
            subcategory_id = ?
        WHERE 
            post_id = ?`;

    const [meta_result] = await conn.query(sql_UpdateMeta, [
        title,
        description,
        user.name,
        category_id[0].category_id,
        subCategory_id[0].subcategory_id,
        postId,
    ]);

    const sql_contents = `
        update blog_post set 
            contents = ?
        where post_id = ? 
        ;
    `;
    await conn.query(sql_contents, [post, postId]);

    const sql_thumNail = `
        update blog_thumnail set 
        thumnail_url = ? 
        where
            post_id = ?
    `;
    await conn.query(sql_thumNail, [thumNail, postId]);
};

//rending Data
const renderingData = async (conn, req) => {
    const renderModel = blogModel.renderingDataModel(conn);

    const page = parseInt(req.params.page, 10); // 페이지
    const category = req.query.category.toLocaleLowerCase(); // category
    const item = req.query.item === 'null' ? null : req.query.item; // subCategory
    const search = req.query.search === 'null' ? null : req.query.search;

    if (isNaN(page) || page < 1) {
        throw new Error('정상적인 경로가 아닙니다.');
    }

    // 쿼리 파라미터
    const baseParams = [];

    // baseSQL
    let baseQuery = `        
        from 
            blog_metadata bm 
        join 
            blog_thumnail bt on bm.post_id = bt.post_id
        join 
            blog_categories bc on bm.category_id = bc.category_id
        join 
            blog_subcategories bs on bm.subcategory_id = bs.subcategory_id 
        where 
            1=1
    `;

    // 카테고리 필터
    if (category !== 'all') {
        baseQuery += ' AND bc.category_name = ? AND bs.subcategory_name = ?';
        baseParams.push(category, item);
    }

    // 검색 필터
    if (search) {
        baseQuery += ' AND bm.post_title like ?';
        baseParams.push(`%${search}%`);
    }

    // 처음 + 마지막 인덱스 계산
    const idxCalculator = (curPage, listCnt) => (curPage - 1) * listCnt;

    const limit = 9;
    const offset_idx = idxCalculator(page, limit);

    const count = await renderModel.getCount(baseQuery, baseParams);
    const postList = await renderModel.getPostList(baseQuery, baseParams, limit, offset_idx);

    // 전체페이지
    const getPaging = (cnt, limit) => Math.ceil(cnt / limit);

    const paging = getPaging(count, limit);

    const result = { data: postList, paging };
    return result;
};

// 블로그 탭
const blogtabService = async (conn) => {
    // 모델 호출
    const tabModel = blogModel.blogTabModel(conn);

    let categoryList = {};

    const allCount = await tabModel.getAllPostCount();
    categoryList['All'] = allCount.cnt;

    const response = await tabModel.getPostCategories();

    response.forEach((item) => {
        const { category, subcategory_name, post_count, new: post_new } = item;
        if (!categoryList[category]) {
            categoryList[category] = {};
        }
        categoryList[category][subcategory_name] = {
            post_count,
            post_new: post_new !== 0 ? true : false,
        };
    });

    return categoryList;
};

// 디테일
const getBlogDetail = async (conn, key) => {
    const detailModel = blogModel.blogDetailModel(conn);
    const row = await detailModel.getDetail(key);
    if (row.length === 0) {
        throw new Error('삭제되었거나 없는 게시물입니다.');
    }
    return row[0];
};

module.exports = {
    postInsert,
    renderingData,
    blogtabService,
    getBlogDetail,
    postUpdate,
    getNewPostList,
};
