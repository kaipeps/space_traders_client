import Main from './components/Main';
import Home from './components/Pages/Home';
import Ship from './components/Pages/Ship';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='' element={<Home />} />
        <Route path='ship' element={<Ship />} />
      </Route>
    </Routes>
  );
};
