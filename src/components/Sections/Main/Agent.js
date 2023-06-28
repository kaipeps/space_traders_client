import Contract from "./Contract";

export default function Agent({ agent, contracts }) {
  return (
    <div className="Agent">
      <header>
        <h1>Agent {agent.symbol}</h1>
        <h2><span className="txt-accent">Faction:</span> {agent.startingFaction}</h2>
        <h2><span className="txt-accent">Headquarters:</span> {agent.headquarters}</h2>
        <h2><span className="txt-accent">Credits:</span> <span style={{ color: '#59e47e' }}>ᖬ</span>{agent.credits}</h2>
      </header>
      <Contract contract={contracts[0]} />
    </div>
  );
};