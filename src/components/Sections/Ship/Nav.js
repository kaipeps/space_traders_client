import { useContext, useEffect, useState } from "react";
import { ShipContext } from "../../Pages/Ship";
import Loading from "../../Loading";
import WaypointCard from "../../ObjectCards/WaypointCard";

export default function Nav() {
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { ship, setShip, setSection, handleShipRefresh } = useContext(ShipContext);
  const [waypoints, setWaypoints] = useState('');

  async function handleNavigation(waypointSymbol) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      },
      body: JSON.stringify({ waypointSymbol })
    };
    const res = await fetch(`https://api.spacetraders.io/v2/my/ships/${ship.symbol}/navigate`, options);
    const response = await res.json();
    if (response.error) {
      console.log(`Error ${response.error.code}: ${response.error.message}`);
    } else {
      const { nav, fuel } = response.data;
      const { nav: oldNav, fuel: oldFuel, ...everythingElse } = ship;
      setShip({ nav, fuel, ...everythingElse });
      handleShipRefresh(new Date(nav.arrival) - Date.now());
    }
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    fetch(`https://api.spacetraders.io/v2/systems/${ship.nav.systemSymbol}/waypoints`, options)
      .then(res => res.json())
      .then(waypointsData => {
        setWaypoints(waypointsData.data);
        setLoadStatus('ready');
      });
  }, []);

  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    return (
      <div className="Nav">
        <h2>
          Available waypoints for travel: <br />
          <span className="action" onClick={() => setSection('waypoint')}>(Back)</span>
        </h2>
        <div className="waypoints">
          {waypoints.map((waypoint, idx) => waypoint.symbol === ship.nav.waypointSymbol ? '' : (
            <WaypointCard key={idx} waypoint={waypoint} handleNavigation={handleNavigation} />
          ))}
        </div>
      </div>
    );
  }
};