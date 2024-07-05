import ReactDom from 'react-dom';
import classes from './Alert.module.css';
import { useSelector } from 'react-redux';

export default function Alert() {
    const { message, type } = useSelector(state => state.alertSlice);

    const classNameAlert = type ? 'success' : 'falid';

    const AlertMessage = () => {
        return (
            <div
                className={`${classes.alert} ${classes['alert_' + classNameAlert]}`}
            >
                {message}
            </div>
        );
    };

    return (
        <>
            {ReactDom.createPortal(
                <AlertMessage />,
                document.getElementById('alert-root'),
            )}
        </>
    );
}
