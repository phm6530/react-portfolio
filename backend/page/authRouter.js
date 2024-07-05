const express = require('express');
const router = express.Router();
const { verify, createToken } = require('../util/auth'); // 검증
const { isValidAdmin } = require('../util/auth');

const db = require('../util/config');

const loginState = async (id) => {
    const sql = `update admin_user set state = 1 where id = ?`;
    return await db.query(sql, [id]);
};

// Login Token 생성
router.post('/login', async (req, res) => {
    const { user_id, user_password } = req.body;

    if (!user_id) {
        return res.status(400).json({ message: 'ID is missing' });
    }

    if (!user_password) {
        return res.status(400).json({ message: 'Password is missing' });
    } else {
        try {
            // ID와 비밀번호가 모두 제공된 경우
            // JWT 토큰 생성 및 응답 로직
            const { id, role, admin_name } = await isValidAdmin(user_id, user_password); // id가 할당된 User 객체를 가져오면 됨

            // 외부 검증로직
            // if(!admin){
            //     return res.status(401).json({message : 'not found this guy'});
            // }

            // const isState = await loginState(user_id);
            const token = createToken(id, role, admin_name);

            return res.json({
                message: 'Token is Created',
                token: token,
                Auth: true,
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status).json({ message: error.message, Auth: false });
        }
    }
});

const logoutState = async (id) => {
    const conn = await db.getConnection();
    const sql = `update admin_user set state = 0 where id = ?`;

    const [result] = await conn.query(sql, [id]);

    conn.release();
    return result;
};

router.post('/logout', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);

    await logoutState(req.id);
    // 파일에 로그 기록
    // logger.info(`User ${req.user.id} logged out`);
    return res.status(200).json({ message: 'logOut Success' });
});

router.post('/auth', verify, (req, res, next) => {
    res.json({ Auth: true, message: 'Access Token' });
});

module.exports = router;
