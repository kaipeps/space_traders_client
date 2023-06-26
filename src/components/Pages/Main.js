import { useEffect, useState } from 'react';
import Agent from './Agent';
import Fleet from './Fleet';

export default function Main({ exampleData }) {
  const { loading, setLoading } = useState(true)
  useEffect(() => {
  })
  const { agent, fleet } = exampleData
  return (
    <div className="Main">
      <header>
        <h2>Welcome, Agent {agent.symbol}</h2>
      </header>
      <main>
        <Agent exampleData={exampleData} />
        <Fleet fleetData={fleet} />
      </main>
    </div>
  );
};
