import { useState } from "react";
import ShipCard from "../ObjectCards/ShipCard";

export default function Fleet({ fleetData }) {
  const [fleet, setFleet] = useState(fleetData);
  return (
    <div className="Fleet">
      <header>
        <h2>Your Ships</h2>
      </header>
      <section className="ships">
        {fleet.map((ship, i) => (
          <ShipCard key={i} ship={ship} />
        ))}
      </section>
    </div>
  );
};