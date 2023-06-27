import Main from './components/Main';
import Home from './components/Pages/Home';
import Ship from './components/Pages/Ship';
import Nav from './components/Sections/Ship/Nav';
import Waypoint from './components/Sections/Waypoints/Waypoint';
import Marketplace from './components/Sections/Waypoints/Marketplace';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='' element={<Home />} />
        <Route path='ship' element={<Ship />} >
          <Route path='' element={<Waypoint />} />
          <Route path='marketplace' element={<Marketplace />} />
          <Route path='navigate' element={<Nav />} />
        </Route>
      </Route>
    </Routes>
  );
};
