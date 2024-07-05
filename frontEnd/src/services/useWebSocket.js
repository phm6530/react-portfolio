import { useState, useEffect, useRef } from 'react';

function useWebSocket(url) {
    const [data, setData] = useState(false);
    const [status, setStatus] = useState('disconnected');
    const ws = useRef(null); // useRef를 사용하여 ws 객체를 저장

    useEffect(() => {
        ws.current = new WebSocket(url);

        const onOpen = () => {
            setStatus('connected');
        };

        const onMessage = event => {
            try {
                console.log(event.data);
                // const test = JSON.parse(event.data);
                // setData(test.timerSet);
            } catch (error) {
                console.log(error);
            }
        };

        const onClose = () => {
            setStatus('disconnected');
        };

        ws.current.addEventListener('open', onOpen);
        ws.current.addEventListener('message', onMessage);
        ws.current.addEventListener('close', onClose);

        return () => {
            ws.current.removeEventListener('open', onOpen);
            ws.current.removeEventListener('message', onMessage);
            ws.current.removeEventListener('close', onClose);
            ws.current.close();
        };
    }, [url]); // url이 변경될 때마다 useEffect 내의 로직을 재실행

    function sendMessage(message) {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(message);
        } else {
            console.log('WebSocket is not open.');
        }
    }

    return { data };
}

export default useWebSocket;
