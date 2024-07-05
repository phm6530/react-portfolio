import PopupBackDrop from 'component/popup/PopupBackDrop';
import { PopupStyle, PopupWrap } from 'component/popup/PopupStyle';
import Confirm from 'component/ui/Confirm';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useStore from 'store/zustandStore';

interface ConfirmProps {
    event: () => Promise<void>;
}

interface ModalProps {
    Component: React.ElementType;
}

type PopupComponentProps = {
    type: 'modal' | 'confirm';
} & (ModalProps | ConfirmProps);

const usePopupHook = () => {
    const [popupView, popupSetView] = useState<boolean>(false);
    const [animationState, setAnimationState] = useState<boolean>(false);
    const login = useStore(state => state.userAuth.login);

    //애니메이션 트리거 만듬
    const triggerAnimation = () => {
        setAnimationState(true);
        setTimeout(() => {
            popupSetView(false);
            setAnimationState(false);
        }, 400);
    };

    // 애니메이션 딜레이 주기 로그인은 알아서 닫히게
    useEffect(() => {
        if (login) {
            triggerAnimation();
        }
    }, [login]);

    // 닫기
    const delayClosePopup = () => {
        triggerAnimation();
    };

    const PopupComponent: React.FC<PopupComponentProps> = ({
        type,
        ...props
    }) => {
        // 타입 좁히기
        const isModal = (
            props: ModalProps | ConfirmProps,
        ): props is ModalProps => type === 'modal';

        const completeClose = () => {
            if ('event' in props) {
                props.event().then(() => {
                    triggerAnimation();
                });
            }
        };

        return (
            <>
                {popupView && (
                    <>
                        {ReactDOM.createPortal(
                            <PopupBackDrop />,
                            document.getElementById('backdrop-root')!,
                        )}
                        {ReactDOM.createPortal(
                            <PopupStyle>
                                <PopupWrap $close={animationState}>
                                    {/* 외부 컴포넌트 모달 or Confirm 타입좁히기*/}
                                    {isModal(props) ? (
                                        <>
                                            <props.Component />
                                        </>
                                    ) : (
                                        <Confirm
                                            message="제거"
                                            confirm={completeClose}
                                        />
                                    )}

                                    <button
                                        className="close"
                                        onClick={delayClosePopup}
                                    >
                                        <span>Close</span>
                                    </button>
                                </PopupWrap>
                            </PopupStyle>,
                            document.getElementById('modal-root')!,
                        )}
                    </>
                )}
            </>
        );
    };

    return { popupSetView, PopupComponent };
};

export default usePopupHook;
