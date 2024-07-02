import { useDispatch } from "react-redux";
import { AppClearFail } from "../../data/store/app.slice";
import styles from './Error.module.css';
import Logo from "../Logo/Logo.component";


interface IErrorProps {
    error: string;
}

function Error(props:IErrorProps) {
    const dispatch = useDispatch();
    function onClick() {
        dispatch(AppClearFail());
    }
    return  props.error && (
        <div className={styles.backdrop} onClick={onClick}>
            <div className={styles.container}>
                <div className={styles.header}>{'Error!'}</div>
                <div className={styles.logo}><Logo /></div>
                <div className={styles.body}>{props.error}</div>
                <div className={styles.toolbar}>
                    <button className={styles.button} onClick={onClick}> Understand </button>
                </div>
            </div>
        </div>
    );
}

export default Error;