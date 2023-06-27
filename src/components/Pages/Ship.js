import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../Main";
import Status from "../Sections/Ship/Status";
import Cargo from "../Sections/Ship/Cargo";
import Modules from "../Sections/Ship/Modules";
import Mounts from "../Sections/Ship/Mounts";

export default function Ship() {
  const { exampleData } = useContext(GameContext);
  const { ship, system } = exampleData;
  return (
    <div className="ShipMenu">
      <section className="ship-left">
        <Status fuel={ship.fuel} crew={ship.crew} />
        <Cargo cargo={ship.cargo} />
      </section>
      <section className="ship-centre">
        <h1>
          Ship: <span className="txt-accent">{ship.registration.name}</span>
          <br />
          {ship.registration.role} - {ship.frame.name}
        </h1>
        <section className="interactions">
          <h2>Current System: <span className="txt-accent">{system.symbol}</span>, {system.type}</h2>
          <Outlet />
        </section>
      </section>
      <section className="ship-right">
        <Modules modules={ship.modules} />
        <Mounts mounts={ship.mounts} />
      </section>
    </div>
  );
};
