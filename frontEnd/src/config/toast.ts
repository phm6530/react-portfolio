import { Slide, ToastPosition } from 'react-toastify';

const toastConfig: {
    position: ToastPosition;
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    rtl: boolean;
    pauseOnFocusLoss: boolean;
    draggable: boolean;
    pauseOnHover: boolean;
    theme: string;
    transition: typeof Slide;
} = {
    position: 'top-right', // 이 부분의 타입을 ToastPosition으로 지정
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: true,
    theme: 'colored',
    transition: Slide,
};

export { toastConfig };
