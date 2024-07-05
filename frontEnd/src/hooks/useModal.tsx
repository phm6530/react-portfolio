import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { PopupStyle, PopupWrap } from 'component/popup/PopupStyle';
import BackDrop from 'component/popup/Backdrop';

const useModal = () => {
    const [modalShow, setModalShow] = useState(false);
    const [contents, setContents] = useState<React.ReactElement | null>(null);
    const [animationTrigger, setAnimationTrigger] = useState(false);

    const closePopup = () => {
        setAnimationTrigger(true);
        const timer = setTimeout(() => {
            setAnimationTrigger(false);
            setModalShow(false);
        }, 400);

        return () => clearTimeout(timer);
    };

    const ModalComponent = () => {
        if (!modalShow) return null; //모달 빽

        return (
            <>
                {ReactDOM.createPortal(
                    <BackDrop />,
                    document.getElementById('backdrop-root')!,
                )}
                {ReactDOM.createPortal(
                    <PopupStyle>
                        <PopupWrap $close={animationTrigger}>
                            {contents}
                            <button onClick={closePopup} className="close">
                                <span>close</span>
                            </button>
                        </PopupWrap>
                    </PopupStyle>,
                    document.getElementById('modal-root')!,
                )}
            </>
        );
    };

    const showModalHandler = (Component: React.ReactElement) => {
        setModalShow(true);
        setContents(Component);
    };

    return {
        showModalHandler,
        ModalComponent,
    };
};

export default useModal;
