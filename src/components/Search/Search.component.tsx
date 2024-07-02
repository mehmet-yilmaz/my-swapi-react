import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../data/store/app.reducer';
import { StartSearch } from '../../data/store/app.slice';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const categories = useSelector((state: IRootState) => state.app.categories);
    const searchPlaceholder = 'Search...'
    const dispatch = useDispatch();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }
    function handleSelectData(event: ChangeEvent<HTMLSelectElement>) {
        setSearchCategory(event.target.value);
    }
    function handleSearch(event: FormEvent) {
        event.preventDefault();
        if (searchCategory && searchTerm) dispatch(StartSearch({ url: searchCategory, terms: searchTerm }));
    }
    return(
        <div className={styles.searchContainer}>
            <form className="searchForm" onSubmit={handleSearch}>
                <div className={styles.searchBar}>
                    <input className={styles.searchBox} placeholder={searchPlaceholder} value={searchTerm} onChange={handleInputChange} type="text" />
                    <select name="searchCategory" value={searchCategory} onChange={handleSelectData}>
                        <option> Category </option>
                        {categories && categories.map((category, index) => (
                            <option key={index} value={category.url}>{ category.name }</option>
                        ))
                        }
                    </select>
                </div>
                    <button className={styles.search} disabled={!searchCategory || !searchTerm} type="submit">search</button>
            </form>
        </div>
    );
}

export default Search;