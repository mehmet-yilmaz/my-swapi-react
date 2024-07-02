
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header.component';
import { Outlet } from 'react-router-dom';
import { IRootState } from './data/store/app.reducer';
import Error from './components/Error/Error.component';
import Loader from './components/Loader/Loader.component';

function App() {
  const error = useSelector((state: IRootState) => state.app.error);
  const isLoading = useSelector((state: IRootState) => state.app.isLoading);
  return error ? <Error error={error} /> : isLoading ?  <Loader /> : (
    <div className="appContainer" >
      <Header />
      <Outlet />
    </div>
  );
}


export default App;