import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Pagination.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TCategory } from "../../../data/types/types";
import { useDispatch } from "react-redux";
import { NavigatePage } from "../../../data/store/app.slice";


interface IPaginationProps {
    count: number;
    path: string;
    previous: boolean;
    next: boolean;
}

function Pagination(props: IPaginationProps) {
    const navigate = useNavigate();
    const numberOfPages = Math.ceil(props.count / import.meta.env.VITE_PAGINATION_LIMIT);
    const params = useParams();
    const dispatch = useDispatch();
    const category: TCategory = params.category as TCategory;
    const activePage = params.pageNo && parseInt(params.pageNo) > 1 ? parseInt(params.pageNo) : 1;
    return (
                    <div className={styles.pagination}>
            {
                props.previous &&
                <div className={styles.previous}>
                        <FaArrowAltCircleLeft onClick={() => { dispatch(NavigatePage({category, page: activePage - 1})) }}/>
                </div>
            }
                    <ul>
                    {
                        (props.count && numberOfPages > 1) && Array.from({ length: numberOfPages }, (_, index) => (
                            <Link key={index} to={`${props.path + (index + 1).toString()}`}>
                                <li className={` ${activePage && (index +1) === activePage ? styles.active : '' }`}>
                                    {index + 1}
                                </li>
                            </Link>
                        ))
                    }
                    </ul>
            
            {
                props.next &&
                <div className="next">
                    <FaArrowAltCircleRight onClick={()=>{ props.next && activePage ? navigate(`${props.path + (activePage + 1).toString()}`) : null}}/>
                </div>
            }
            </div>
    );
}

export default Pagination;