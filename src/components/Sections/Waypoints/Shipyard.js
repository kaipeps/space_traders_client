import { useEffect, useState } from "react";
import Loading from "../../Loading";
import ShipyardTooltip from "../../Tooltips/ShipyardTooltip";
import { useContext } from "react";
import { ShipContext } from "../../Pages/Ship";

export default function Shipyard() {
  const [availableShips, setAvailableShips] = useState([])
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { ship, setSection } = useContext(ShipContext);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    fetch(`https://api.spacetraders.io/v2/systems/${ship.nav.systemSymbol}/waypoints/${ship.nav.waypointSymbol}/shipyard`, options)
      .then(res => res.json())
      .then(response => {
        const { ships } = response.data
        setAvailableShips(ships)
        setLoadStatus('ready');
      });
  }, []);

  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    return (
      <div className="Shipyard">
        <h2>
          Waypoint Shipyard Details: <br />
          <span className="action" onClick={() => setSection('waypoint')}>(Back)</span>
        </h2>
        <section className="available-ships">
          <h3 className="txt-accent">Available Ships:</h3>
          <section className="grid-list">
            {availableShips.map((ship, idx) => (
              <ShipyardTooltip key={idx} item={ship}>
                <div className="available-ship">
                  <p>
                    <span className="txt-accent">{ship.name}</span> <br />
                    <span className="action">Purchase</span> for: ᖬ{ship.purchasePrice} <br />
                  </p>
                </div>
              </ShipyardTooltip>
            ))}
          </section>
        </section>
      </div>
    );
  }
};