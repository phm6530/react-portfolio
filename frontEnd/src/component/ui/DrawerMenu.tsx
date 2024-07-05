import { device } from 'config/DeviceConfig';
import useStore from 'store/zustandStore';
import styled from 'styled-components';

interface ListProps {
    $active?: boolean;
    $scrollOver?: boolean;
    $darkMode?: boolean;
    $path?: boolean;
    $logout?: boolean;
    $drawerView: boolean;
}

const ScrollOverColor = ({
    $scrollOver,
    $darkMode,
    $drawerView,
}: ListProps) => {
    if ($drawerView) {
        return 'rgb(182, 190, 201)';
    }
    if ($scrollOver) {
        return 'var(--Nav-color)';
    }
    if (!$scrollOver && $darkMode) {
        return 'rgb(182, 190, 201)';
    }
    if ($drawerView) {
        return 'rgb(182, 190, 201)';
    } else {
        return 'rgb(182, 190, 201)';
    }
};

const MenuToggle = styled.div<{
    $scrollOver: boolean;
    $darkMode: boolean;
    $drawerView: boolean;
}>`
    /* ALL */
    z-index: 999;

    .hamburger .line {
        width: 25px;
        height: 2px;
        display: block;
        margin: 6px auto;
        border-radius: 1rem;
        transition:
            transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            opacity 0.55s ease;
        background-color: ${({ $scrollOver, $darkMode, $drawerView }) =>
            ScrollOverColor({ $scrollOver, $darkMode, $drawerView })};
    }

    .hamburger:hover {
        cursor: pointer;
    }

    /* ONE */
    #hamburger-1.is-active .line:nth-child(2) {
        opacity: 0;
    }

    #hamburger-1.is-active .line:nth-child(1) {
        -webkit-transform: translateY(8px) rotate(45deg);
        -ms-transform: translateY(8px) rotate(45deg);
        -o-transform: translateY(8px) rotate(45deg);
        transform: translateY(8px) rotate(45deg);
    }

    #hamburger-1.is-active .line:nth-child(3) {
        -webkit-transform: translateY(-8px) rotate(-45deg);
        -ms-transform: translateY(-8px) rotate(-45deg);
        -o-transform: translateY(-8px) rotate(-45deg);
        transform: translateY(-8px) rotate(-45deg);
    }
    display: none;
    @media ${device.laptopL} {
        display: block;
    }
`;

const DrawerMenu: React.FC<{
    drawerView: boolean;
    scrollOver: boolean;
    setDrawerView: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ drawerView, setDrawerView, scrollOver }) => {
    const darkMode = useStore(state => state.darkMode);

    const className = drawerView ? 'hamburger is-active' : 'hamburger';

    return (
        <>
            <MenuToggle
                $drawerView={drawerView}
                $scrollOver={scrollOver}
                $darkMode={darkMode}
                onClick={() => setDrawerView(prev => !prev)}
            >
                <div className="three col">
                    <div className={className} id="hamburger-1">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </MenuToggle>
        </>
    );
};

export default DrawerMenu;
