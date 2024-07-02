import { useDispatch } from 'react-redux';
import styles from './Logo.module.css';
import { useNavigate } from 'react-router-dom';
import { DeselectCategory, ShowMenu } from '../../data/store/app.slice';
import logo from '../../assets/images/star-wars.svg';
function Logo() { 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function onClickHandler() {
        dispatch(DeselectCategory());
        dispatch(ShowMenu(false));
        navigate('/app');
    }
    return (
            <img srcSet={logo} className={styles.logo} alt="Star Wars" onClick={onClickHandler} />
    );
}

export default Logo;