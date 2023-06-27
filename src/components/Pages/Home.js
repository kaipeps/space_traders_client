import { useContext, useEffect } from 'react';
import { BearerContext, GameContext } from '../Main';
import Agent from '../Sections/Main/Agent';
import Fleet from '../Sections/Main/Fleet';

export default function Home() {
  const { exampleData } = useContext(GameContext)
  const { agent, fleet, contracts } = exampleData
  return (
    <div className="Home">
      <header>
        <h2>Welcome, Agent {agent.symbol}</h2>
      </header>
      <main>
        <Agent agent={agent} contracts={contracts} />
        <Fleet fleetData={fleet} />
      </main>
    </div>
  );
};
