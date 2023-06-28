import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import Entry from './Pages/Entry';

export const GameContext = createContext()

export default function Main() {
  const [bearer, setBearer] = useState('');
  const [agent, setAgent] = useState()
  const [contracts, setContracts] = useState()
  const [fleet, setFleet] = useState()

  const gameData = {
    agent,
    contracts,
    fleet,
    setGameData: {
      agent: setAgent,
      contracts: setContracts,
      fleet: setFleet,
    }
  }

  return (
    <GameContext.Provider value={gameData} >
      {!sessionStorage.Authorization && !bearer ? <Entry setBearer={setBearer} /> : <Outlet />}
    </GameContext.Provider>
  )
};
