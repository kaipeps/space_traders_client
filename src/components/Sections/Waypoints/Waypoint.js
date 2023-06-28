import { useEffect, useState, useContext } from "react";
import { ShipContext } from "../../Pages/Ship";
import Loading from "../../Loading";

async function handleExtraction(ship, setShip, survey) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: sessionStorage.Authorization
    },
    body: survey ? JSON.stringify({ survey }) : undefined
  };
  const res = await fetch(`https://api.spacetraders.io/v2/my/ships/${ship.symbol}/extract`, options)
  const response = await res.json()
  console.log(response)
  const { cargo } = response.data
  if (response.error) {
    console.log(`Error ${response.error.code}: ${response.error.message}`)
  } else {
    const { cargo: oldCargo, ...everythingElse } = ship
    setShip({ cargo, ...everythingElse })
  }
};

async function handleDocking(status, ship, setShip) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: sessionStorage.Authorization
    }
  };
  const res = await fetch(`https://api.spacetraders.io/v2/my/ships/${ship.symbol}/${status}`, options)
  const response = await res.json()
  if (response.error) {
    console.log(`Error ${response.error.code}: ${response.error.message}`)
  } else {
    const { nav } = response.data
    const { nav: oldNav, ...everythingElse } = ship
    setShip({ nav, ...everythingElse })
  }
}

export default function Waypoint() {
  const [waypoint, setWaypoint] = useState('');
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { ship, setShip, setSection } = useContext(ShipContext)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };
    if (loadStatus !== 'ready') {
      fetch(`https://api.spacetraders.io/v2/systems/${ship.nav.systemSymbol}/waypoints/${ship.nav.waypointSymbol}`, options)
        .then(res => res.json())
        .then(waypointData => {
          setWaypoint(waypointData.data);
          setLoadStatus('ready');
        });
    }
  }, [loadStatus])

  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    const traitSymbols = waypoint.traits.map(trait => trait.symbol)
    return (
      <div className="Waypoint">
        <section className="actions">
          <h2 className="txt-accent">Actions</h2>
          <ul>
            {ship.nav.status === 'IN_ORBIT' ? <p className="action" onClick={() => setSection('navigate')} >
              Navigate
            </p> : ''}
            {traitSymbols.includes('MARKETPLACE') && ship.nav.status === 'DOCKED' ?
              <p className="action" onClick={() => setSection('marketplace')} >
                View Market Details
              </p> : ''}
            {traitSymbols.includes('SHIPYARD') && ship.nav.status === 'DOCKED' ?
              <p className="action" onClick={() => setSection('shipyard')} >
                View Shipyard Details
              </p> : ''}
            {waypoint.type === 'ASTEROID_FIELD' ? <p className="action" onClick={() => handleExtraction(ship, setShip)} >
              <span>Extract Resources</span>
            </p> : ''}
            {ship.nav.status === 'DOCKED' ?
              <p className="action" onClick={() => handleDocking('orbit', ship, setShip)} >
                <span>Orbit at Waypoint</span>
              </p>
              : ship.nav.status === 'IN_ORBIT' ?
                <p className="action" onClick={() => handleDocking('dock', ship, setShip)} >
                  <span>Dock at Waypoint</span>
                </p> : ''}
          </ul>
        </section>
        <h2 className="txt-accent">Traits:</h2>
        <section className="traits">
          {waypoint.traits.map((trait, idx) => (
            <section key={idx} className="trait">
              <p>
                <span className="txt-accent">{trait.name}</span> <br />
                {trait.description}
              </p>
            </section>
          ))}
        </section>
      </div>
    );
  }
};