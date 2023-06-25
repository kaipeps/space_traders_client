import Main from './components/Pages/Main';
import ShipMenu from './components/Sections/ShipMenu';
import { Routes, Route } from 'react-router-dom';
import './App.scss'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShipMenu />} />
        <Route path="/ship" element={<ShipMenu />} />
      </Routes>
    </>
  );
}
