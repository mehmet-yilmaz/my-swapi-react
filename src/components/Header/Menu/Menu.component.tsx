import styles from './Menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../data/store/app.reducer';
import {
    Link,
    // useNavigate
} from 'react-router-dom';
import { useEffect } from 'react';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { FetchCategories, SelectCategory, ShowMenu } from '../../../data/store/app.slice';

function Menu() {
    const showMenu = useSelector((state: IRootState) => state.app.showMenu);
    const categories = useSelector((state: IRootState) => state.app.categories);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: IRootState) => state.app.selectedCategory);
    function selectCategory(event: string) {
        dispatch(SelectCategory({category: event}))
        toggleMenu(false);
    }
    function toggleMenu(payload:boolean) { 
        dispatch(ShowMenu(payload));
    }
    // Do not let user to stand in the application if the categories have not fetched yet!
    useEffect(() => { 
        if (!categories) {
            dispatch(FetchCategories());
            // navigate('/');
        }
    });

    return categories && (
        <div className={styles.menuContainer}>
            <button className={styles.hamburger} onClick={() => toggleMenu(!showMenu)}>
                {showMenu ? (<GiCancel />) : (<GiHamburgerMenu /> )}
            </button>
            <nav className={`${styles.menu} ${showMenu ? styles.open : ''}`}>
            <ul> 
                    {categories.map((item) =>
                    <Link key={item.name} to={import.meta.env.VITE_ROUTE_PREFIX + item.name} onClick={() => selectCategory(item.name)}>
                    <li className={`${selectedCategory?.name === item.name ? styles.active : ""} ${styles.swheader}`}>
                        {item.name}
                    </li>
                    </Link>)}
                </ul>
            </nav>
        </div>
    );

}
export default Menu;