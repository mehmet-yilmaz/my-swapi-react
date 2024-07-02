import styles from './Loader.module.css';
import Logo from '../Logo/Logo.component';

function Loader() { 
    return (
        <div className={styles.backdrop}>
            <div className={styles.loader}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.text}>
                    Loading...
                </div>
            </div>
        </div>
    )
}

export default Loader;