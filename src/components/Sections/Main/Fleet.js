import { useState } from "react";
import { Link } from "react-router-dom";
import ShipCard from "../../ObjectCards/ShipCard";

export default function Fleet({ fleetData }) {
  const [fleet, setFleet] = useState(fleetData);
  return (
    <div className="Fleet">
      <header>
        <h2>Your Ships</h2>
      </header>
      <section className="ships">
        {fleet.map((ship, idx) => (
          <Link key={idx} to="/ship">
            <ShipCard ship={ship} />
          </Link>
        ))}
      </section>
    </div>
  );
};