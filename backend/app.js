const express = require('express'); // express 라이브러리 로드
const cors = require('cors'); // cors 허용
require('dotenv').config();

const http = require('http');
const app = express(); // 익스프레스 서버
const httpServer = http.createServer(app); //서버생성

const initializeWebSocket = require('./util/websoket');
const wss = initializeWebSocket(httpServer);

const path = require('path');
global.appRoot = path.resolve(__dirname); // 전역 root 경로 설정

// page
const boardRouter = require('./page/board'); // Board
const blogRouter = require('./page/blog'); // Blog
const projectRouter = require('./page/project'); //프로젝트
const scheduleRouter = require('./page/schedule'); //스케줄
const contactRouter = require('./page/contact'); // 메일보내기

const authRouter = require('./page/authRouter'); //login logout 로직

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//전체허용
app.use(cors());

//CORS 내꺼만 허용
// const allowedOrigins = ['http://localhost:3000'];
// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//                 callback(null, true);
//             } else {
//                 callback(new Error('Not allowed by CORS'));
//             }
//         },
//     }),
// );

// // //브라우저 요청 막기
// app.use('/', (req, res, next) => {
//     if (req.headers.referer !== 'http://localhost:3000/') {
//         return res.status(403).send('허용된 도메인이 아닙니다. ');
//     }
//     next();
// });

// 게시판 로직
app.use(authRouter);
app.use('/board', boardRouter);
app.use('/blog', blogRouter);
app.use('/project', projectRouter);
app.use('/schedule', scheduleRouter(wss));
app.use('/contact', contactRouter);

// 이미지 라우터
app.use('/uploads', express.static(path.join(global.appRoot, 'uploads')));

// 테스트 미들웨어
app.get('/test', (req, res, next) => {
    const param = req.params.item;
    if (!/^\d+$/.test(param)) {
        const err = new Error('사용 할 수 없음 ');
        next(err);
    } else {
        res.json({ item: param });
    }
});

// 에러 미들웨어
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ message: err.message }); // 에러 메시지를 JSON 응답으로 전송
});

httpServer.listen(8080, () => {
    console.log('Server Running...');
});
