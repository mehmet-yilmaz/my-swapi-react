import { useSelector } from 'react-redux';
import styles from './Detail.module.css';
import { IRootState } from '../../data/store/app.reducer';
import defaultAvatar from '../../assets/images/default-avatar.webp';

function Detail() { 
    const content = useSelector((state: IRootState) => state.app.detailElement);
    return (
        <div className={styles.container}>
            {content && (
                <div className={styles.content}>
                    <div className={styles.headerImage}>
                        <img srcSet={defaultAvatar} alt={content.name ? content.name.toString() : content.title.toString()} />
                    </div>
                    <div className={styles.header}>
                        <h1>{`${content.title ? content.title : content.name}`}</h1>
                    </div>
                    {content && Object.entries(content).map((e, index) => e[0] !== 'name' && e[0] !== 'title' && (
                        <div key={index} className={`${styles.info} ${index % 2 !== 0 ? styles.odd : ''}`}>
                            <div className={`${styles.infoRow}`}>
                                <div className={styles.caption}>{e[0].replace('_', ' ').toUpperCase()}</div>
                                <div className={styles.text}>{
                                    Array.isArray(e[1]) ? (
                                        <ul className={styles.list}>
                                            {e[1].map((item, index) => (
                                                <li key={index} className={styles.listItem}>{ item.toUpperCase() }</li>
                                            ))}
                                    </ul>
                                    ) :
                                    e[1].toString().toUpperCase()
                                }</div>
                            </div>
                        </div>
                        
                    )) }
                </div>
           )}
        </div>
    )
}

export default Detail;