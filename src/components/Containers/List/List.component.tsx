import { useSelector } from "react-redux";
import styles from './List.module.css';
import { useParams } from "react-router-dom";
import { IRootState } from "../../../data/store/app.reducer";
import { TCategory } from "../../../data/types/types";
import Card from "../../Card/Card.component";
import Pagination from "../Pagination/Pagination.component";

function List() {
    const params = useParams();
    const category: TCategory = params.category as TCategory;
    const state = useSelector((state: IRootState) => state.app);
    
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {state.records && state.records.map((record, index) => state.selectedCategory && (
                    <Card key={index} path={'/app/' + category + '/'+ record.url.slice(0,-1).split('/').pop() } headerField={state.selectedCategory.headerField} data={record} mapFields={state.selectedCategory.mapFields} />
                )
                )}
            </div>
            {state.count && state.selectedCategory && (
                <Pagination path={'/app/'+ category + "/page/"} count={state.count} previous={(state.previous ? true : false)} next={state.next ? true : false} />
            )}
        </div>
    );
}

export default List;