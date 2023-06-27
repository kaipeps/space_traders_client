import { useContext } from "react";
import { GameContext } from "../../Main";

export default function Nav() {
  const { exampleData } = useContext(GameContext);
  const { system } = exampleData;
  return (
    <div className="Nav">
      <h2>Available waypoints for travel:</h2>
      <div className="waypoints">
        {system.waypoints.map((waypoint, idx) => (
          <div key={idx} className="waypoint">
            <span className="txt-accent">{waypoint.symbol}</span> <br />
            Type: {waypoint.type} <br />
            Co-ordinates: {waypoint.x}, {waypoint.y}
          </div>
        ))}
      </div>
    </div>
  );
};