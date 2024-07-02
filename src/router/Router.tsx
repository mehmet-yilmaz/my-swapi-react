import { createBrowserRouter } from "react-router-dom";
import Intro from "../components/Intro/Intro.component";
import App from "../App";
import List from "../components/Containers/List/List.component";
import { store } from "../data/store/app.store";
import { FetchEntity, SelectCategory } from "../data/store/app.slice";
import { TCategory } from "../data/types/types";
import Detail from "../components/Detail/Detail.component";
import Home from "../components/Home/Home.component";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Intro />
    },
    {
        path: 'app',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ':category',
                element: <List />,
                loader: async ({params}) => {
                    const category: TCategory = params.category as TCategory;
                    if (category) store.dispatch(SelectCategory({category}));
                    return await store.getState().app.records;
                },
            },
            {
                path: ':category/page/:pageNo',
                element: <List />,
                loader: async ({params}) => {
                    const page = parseInt(params.pageNo ? params.pageNo : 'A');
                    const category: TCategory = params.category as TCategory;
                    if(category && page >= 0) store.dispatch(SelectCategory({category, page}));
                    return await store.getState().app.records;
                }
            },
            {
                path:  ':category/:id',
                element: <Detail />,
                loader: async ({params}) => {
                    const id = parseInt(params.id ? params.id : 'A');
                    const category: TCategory = params.category as TCategory;

                    store.dispatch(FetchEntity({category,id}));
                    return await store.getState().app.detailElement; 
                }
            },
            {
                path: '*',
                element: <Home />
            }
 
        ]
    },
    {
        path: '*',
        element: <Intro />
    }
]);


export default Routes;