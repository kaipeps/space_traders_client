import { Link } from "react-router-dom";
import Contract from "../../Pages/Contract";
import ContractCard from "../../ObjectCards/ContractCard";

export default function Agent({ agent, contracts }) {
  return (
    <div className="Agent">
      <header>
        <h1>Agent {agent.symbol}</h1>
        <h2>Faction: {agent.startingFaction}</h2>
        <h2>Headquarters: {agent.headquarters}</h2>
        <h2>Credits: ᖬ{agent.credits}</h2>
      </header>
      <section className="contracts">
        <Contract contract={contracts[0]} />
      </section>
    </div>
  );
};