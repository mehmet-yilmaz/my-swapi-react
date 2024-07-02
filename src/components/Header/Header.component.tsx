import Menu from './Menu/Menu.component';
import styles from './Header.module.css';
import Logo from '../Logo/Logo.component';

function Header() {

    return (
        <div className={styles.header}>
            <Logo/>
            <div className={styles.menuContainer}>
                <Menu />
            </div>
        </div>
    );
}

export default Header;