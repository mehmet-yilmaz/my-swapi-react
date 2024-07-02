import { useDispatch, useSelector } from 'react-redux';
import styles from './Intro.module.css';
import { useNavigate } from 'react-router-dom';
import { FetchCategories } from '../../data/store/app.slice';
import { IRootState } from '../../data/store/app.reducer';
import { useEffect } from 'react';
import logo from '../../assets/images/star-wars.svg';
function Intro() { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector((state: IRootState) => state.app.categories);
    function enterHandler() {
        dispatch(FetchCategories());
    }

    useEffect(() => {
        if (categories) {
            navigate('/app');
        }
    })
    return (
        <div className={styles.container}>
        <img srcSet={logo} className={styles.intro} alt="Star Wars" />
        <button className={styles.enter} onClick={enterHandler} type="button">Open The Blast Door</button>
        </div>
    );
}

export default Intro;