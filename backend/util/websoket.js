const Websoket = require('ws');

// 웹소켓 서버 초기화
const initializeWebSocket = (httpServer) => {
    //웹소켓 인스턴스 생성
    const wss = new Websoket.Server({ server: httpServer });
    // 클라이언트와의 연결 이벤트 처리
    wss.on('connection', (ws) => {
        ws.send('websoket Connect Complete!!!');
        console.log('연결 완료');
    });

    // 연결 종료 이벤트 처리
    wss.on('close', () => {
        ws.send('서버끊어짐');
    });

    // 에러 처리
    wss.on('error', (error) => {
        console.error('WebSocket error:', error);
    });

    return wss;
};

module.exports = initializeWebSocket;
