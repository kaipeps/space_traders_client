import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Agent from '../Sections/Main/Agent';
import Fleet from '../Sections/Main/Fleet';

export default function Home() {
  const [loadStatus, setLoadStatus] = useState('waiting');
  const [agent, setAgent] = useState({});
  const [contracts, setContracts] = useState([]);
  const [fleet, setFleet] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    const agentJsonPromise = fetch(`${process.env.REACT_APP_URL_BASE}/my/agent`, options).then(res => res.json());
    const contractsJsonPromise = fetch(`${process.env.REACT_APP_URL_BASE}/my/contracts`, options).then(res => res.json());
    const fleetJsonPromise = fetch(`${process.env.REACT_APP_URL_BASE}/my/ships`, options).then(res => res.json());

    Promise.all([agentJsonPromise, contractsJsonPromise, fleetJsonPromise]).then(([agentData, contractsData, fleetData]) => {
      setAgent(agentData.data)
      setContracts(contractsData.data)
      setFleet(fleetData.data)
      setLoadStatus('ready')
    })
  }, []);
  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    return (
      <div className="Home">
        <header>
          <h1>Welcome, Agent {agent.symbol}</h1>
        </header>
        <main>
          <Agent agent={agent} contracts={contracts} />
          <Fleet fleetData={fleet} />
        </main>
      </div>
    );
  }
};
