import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';

//다크모드 타입 & 초기 값
interface DarkModeTypes {
    darkMode: boolean;
    darkmodeToggle: () => void;
}
interface User {
    id: string | null;
    access: string | null;
    name: string | null;
}
interface AuthState {
    login: boolean;
    loading: boolean | null;
    user: User;
}

//get userData
const getUserdataLocalstorage = () => {
    const userFromStorage = localStorage.getItem('user');
    const test = userFromStorage ? JSON.parse(userFromStorage) : null;

    const initialUserData: User = { id: null, access: null, name: null };

    return test || initialUserData;
};

const initialUserAuth: AuthState = {
    login: Boolean(localStorage.getItem('token')),
    loading: null,
    user: getUserdataLocalstorage(),
};

interface UserAuthTypes {
    userAuth: AuthState;
    userAuthLogin: (token: string) => void;
    userAuthLogout: () => void;
}

interface ModalTypes {
    modal: boolean;
}

//첫진입시에 darkMode true
const initialDarkModeState: boolean =
    localStorage.getItem('darkMode') === null
        ? true
        : localStorage.getItem('darkMode') === 'true';

//Store 전체 타입
interface StoreState extends DarkModeTypes, UserAuthTypes, ModalTypes {}
const useStore = create<StoreState>(set => ({
    //다크모드
    darkMode: initialDarkModeState,
    darkmodeToggle: () =>
        set(state => {
            const newDarkMode = !state.darkMode;
            localStorage.setItem('darkMode', newDarkMode.toString());

            return { darkMode: newDarkMode };
        }),

    // 로그인 + 유저데이터
    userAuth: initialUserAuth,
    userAuthLogin: token =>
        set(state => {
            const {
                id,
                role,
                name,
            }: { id: string; role: string; name: string } = jwtDecode(token);

            const userData = { id, access: role, name };
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', token);

            return {
                userAuth: { ...state.userAuth, login: true, user: userData },
            };
        }),
    userAuthLogout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({
            userAuth: {
                login: false,
                loading: null,
                user: { id: null, access: null, name: null },
            },
        });
    },

    // 모달창
    modal: false,
    modalOpen: () => set({ modal: true }),
    modalClose: () => set({ modal: false }),
}));

export default useStore;
