import { Link } from "react-router-dom";
import ContractCard from "../ObjectCards/ContractCard";

export default function Agent({ exampleData }) {
  const { agent, contracts } = exampleData;
  return (
    <div className="Agent">
      <header>
        <h1>Agent {agent.symbol}</h1>
        <h2>Faction: {agent.startingFaction}</h2>
        <h2>Headquarters: {agent.headquarters}</h2>
        <h2>Credits: ᖬ{agent.credits}</h2>
      </header>
      <section className="contracts">
        <h2>Contracts:</h2>
        {contracts.map((contract, idx) => (
          <Link key={idx} to="/contract">
            <ContractCard contract={contract} />
          </Link>
        ))}
      </section>
    </div>
  );
};