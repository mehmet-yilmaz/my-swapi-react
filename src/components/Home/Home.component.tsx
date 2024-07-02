import { useSelector } from 'react-redux';
import Search from '../Search/Search.component';
import styles from './Home.module.css';
import { IRootState } from '../../data/store/app.reducer';
import Card from '../Card/Card.component';

function Home() {
    const results = useSelector((state: IRootState) => state.app.searchRecords);
    const searchCategory = useSelector((state: IRootState) => state.app.searchCategory);
    return (
        <div className={styles.container}>
            <Search />

            
                {results && (
            <div className={styles.resultContainer}>
                        <div className={styles.title}>{`${results.count} Result(s) in ${searchCategory?.name} category found!`}</div>
                <div className={styles.results}>
                        {
                            results.results && searchCategory && results.results.map((e, index) => searchCategory && (
                                <Card data={e} headerField={searchCategory.headerField} mapFields={searchCategory.mapFields} path={'/app/' + searchCategory.name + '/' + e.url.slice(0,-1).split('/').pop()} key={index} />
                            ))
                        }
                </div>

            </div>
                )}
        </div>
    )
}

export default Home;