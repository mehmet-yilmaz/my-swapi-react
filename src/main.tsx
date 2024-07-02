import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Routes from './router/Router';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './data/store/app.store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <React.StrictMode>
          <RouterProvider router={Routes} />
    </React.StrictMode>
  </Provider>
)
