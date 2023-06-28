import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../Loading";
import WaypointCard from "../../ObjectCards/WaypointCard";

export default function Nav() {
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { state } = useLocation();
  const [waypoints, setWaypoints] = useState('');
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    fetch(`${process.env.REACT_APP_URL_BASE}/systems/${state.systemSymbol}/waypoints`, options)
      .then(res => res.json())
      .then(waypointsData => {
        setWaypoints(waypointsData.data);
        setLoadStatus('ready');
      });
  }, [])
  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    return (
      <div className="Nav">
        <h2>Available waypoints for travel:</h2>
        <div className="waypoints">
          {waypoints.map((waypoint, idx) => (
            <WaypointCard key={idx} waypoint={waypoint} />
          ))}
        </div>
      </div>
    );
  }
};