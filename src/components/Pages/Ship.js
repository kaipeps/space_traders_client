import { useLocation } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Loading from "../Loading";
import Status from "../Sections/Ship/Status";
import Cargo from "../Sections/Ship/Cargo";
import Waypoint from "../Sections/Waypoints/Waypoint";
import Nav from "../Sections/Ship/Nav";
import Marketplace from "../Sections/Waypoints/Marketplace";
import Shipyard from "../Sections/Waypoints/Shipyard";
import Modules from "../Sections/Ship/Modules";
import Mounts from "../Sections/Ship/Mounts";

const convertSymbolNotation = (symbol) => symbol
  .split('_').join(' ');

const displayStatusAndLocation = (nav) => {
  const status = convertSymbolNotation(nav.status);
  const location = nav.waypointSymbol;
  return <>Currently: <span className="txt-accent">{status}</span> {status === "In Transit" ? "To:" : "At:"} <span className="txt-accent">{location}</span> <br />Co-Ordinates - X: <span className="txt-accent">{nav.route.destination.x}</span>, Y: <span className="txt-accent">{nav.route.destination.y}</span></>;
};

export const ShipContext = createContext();

export default function Ship() {
  const [loadStatus, setLoadStatus] = useState('waiting');
  const [section, setSection] = useState('waypoint')
  const [ship, setShip] = useState({})
  const { state } = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };
    if (loadStatus !== 'ready') {
      fetch(`https://api.spacetraders.io/v2/my/ships/${state.shipSymbol}`, options)
        .then(res => res.json())
        .then(response => {
          if (response.data.nav.status === 'IN_TRANSIT') {
            const { arrival } = response.data.nav.route
            console.log(new Date(arrival).valueOf() - Date.now().valueOf())
            console.log(new Date(arrival).toString())
            setTimeout(setLoadStatus, new Date(arrival) - Date.now(), 'refresh')
          }
          setShip(response.data);
          setLoadStatus('ready');
        });
    }
  }, [ship, loadStatus]);

  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    return (
      <div className="ShipMenu">
        <section className="ship-left">
          <Status fuel={ship.fuel} crew={ship.crew} nav={ship.nav} />
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
            <ShipContext.Provider value={{ ship, setShip, setSection }}>
              {section === 'waypoint' ? <Waypoint ship={ship} />
                : section === 'navigate' ? <Nav ship={ship} />
                  : section === 'marketplace' ? <Marketplace ship={ship} />
                    : section === 'shipyard' ? <Shipyard ship={ship} />
                      : ''}
            </ShipContext.Provider>
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
