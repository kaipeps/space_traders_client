import { useContext } from "react";
import { GameContext } from "../../Main";
import { Link } from "react-router-dom";

export default function Waypoint() {
  const { exampleData } = useContext(GameContext);
  const { waypoint } = exampleData;

  return (
    <div className="Waypoint">
      <h2>Current Waypoint: <span className="txt-accent">{waypoint.symbol}</span>, {waypoint.type}</h2>
      <section className="waypoint-readout">
        <section className="details">
          <section className="co-ordinates">
            <h3 className="txt-accent">Co-Ordinates</h3>
            <span>X:{waypoint.x}, Y:{waypoint.y}</span>
          </section>
          <section className="orbitals">
            <h3 className="txt-accent">Orbitals</h3>
            {waypoint.orbitals.map((orbital, idx) => (
              <section key={idx} className="orbital">
                <p>{orbital.symbol}</p>
              </section>
            ))}
          </section>
        </section>
        <section className="actions">
          <h2 className="txt-accent">Actions</h2>
          <ul>
            <li>
              <Link to="/ship/marketplace">View Market Details</Link>
            </li>
            <li>
              <Link to="/ship/navigate">Navigate</Link>
            </li>
            <li>
              <span className="action">Extract Resources</span>
            </li>
            <li>
              <span className="action">Scan Nearby Systems</span>
            </li>
            <li>
              <span className="action">Scan Nearby Waypoints</span>
            </li>
          </ul>
        </section>
        <section className="traits">
          <h3 className="txt-accent">Traits:</h3>
          {waypoint.traits.map((trait, idx) => (
            <section key={idx} className="trait">
              <p>{trait.name}</p>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};