import { IBase } from '../../data/interfaces/base.interface';
import styles from './Card.module.css';
import { useNavigate } from "react-router-dom";

interface ICard {
    headerField: string;
    data: IBase;
    mapFields: string[];
    path: string;
    poster?: boolean;
    image?: string;
}

function Card(props: ICard) {
    const navigate = useNavigate();
    function detailsHandler() {
        navigate({ pathname: props.path});
    }
    return (
        <div className={`${styles.cardContainer}`}>
            <div className={`${styles.image} ${props.poster
         ? 'poster' : ''}`}>
                {props.image && (
                    <img srcSet={props.image} alt={props.data[props.headerField] ? props.data[props.headerField].toString() : ''} />
                )}
            </div>
            <div className={styles.info}>
                <div className={styles.title}><h1>{props.data[props.headerField] ? props.data[props.headerField].toString() : ''}</h1></div>
                {
                    props.mapFields && props.mapFields.map((key, index) => (
                        <div key={index} className={styles.pair}>
                            <div className={styles.pairKey}>{key.replace('_', ' ')}</div>
                            <div className={styles.pairValue}>{props.data[key]? props.data[key].toString() : ''}</div>
                        </div>
                    ))
                }
                <div className={styles.details}>
                    <button onClick={() => {detailsHandler()}}>
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;