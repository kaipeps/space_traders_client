import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Status from "../Sections/Ship/Status";
import Cargo from "../Sections/Ship/Cargo";
import Modules from "../Sections/Ship/Modules";
import Mounts from "../Sections/Ship/Mounts";

const convertSymbolNotation = (symbol) => symbol
  .split('_').join(' ');

const displayStatusAndLocation = (nav) => {
  const status = convertSymbolNotation(nav.status)
  const location = nav.waypointSymbol
  return <>Currently: <span className="txt-accent">{status}</span> {status === "In Transit" ? "To:" : "At:"} <span className="txt-accent">{location}</span></>
}

export default function Ship() {
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { state } = useLocation();
  const [ship, setShip] = useState('');
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    fetch(`${process.env.REACT_APP_URL_BASE}/my/ships/${state.shipSymbol}`, options)
      .then(res => res.json())
      .then(shipData => {
        setShip(shipData.data);
        setLoadStatus('ready');
      });
  }, []);

  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
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
            <h2>{displayStatusAndLocation(ship.nav)}</h2>
            <Outlet nav={ship.nav} />
          </section>
        </section>
        <section className="ship-right">
          <Modules modules={ship.modules} />
          <Mounts mounts={ship.mounts} />
        </section>
      </div>
    );
  }
};
