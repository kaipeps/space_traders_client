const condenseModules = (modules) => {
  const modulesObj = {}
  modules.forEach(module => {
    if (Object.keys(modulesObj).includes(module.symbol)) {
      modulesObj[module.symbol].count += 1
    } else {
      modulesObj[module.symbol] = {
        "name": module.name,
        "count": 1,
        "description": module.description,
        "capacity": module.capacity,
        "requirements": module.requirements
      }
    }
  })
  return Object.values(modulesObj)
}

export default function Ship({ exampleData }) {
  const { ship } = exampleData
  const { system } = exampleData

  return (
    <div className="ShipMenu">
      <div className="ship-left">
        <section className="status">
          <h3 className="txt-accent">Ship Status</h3>
          <span className="readout">
            Fuel: {ship.fuel.current}/{ship.fuel.capacity} Units<br />
            Current Crew: {ship.crew.current}/{ship.crew.capacity}<br />
            Morale Level - {ship.crew.morale}<br />
            Rotation: {ship.crew.rotation}
          </span>
        </section>
        <section className="cargo">
          <h3 className="txt-accent">Cargo</h3>
          Storage Used: {ship.cargo.units}/{ship.cargo.capacity} Units
          <div className="inventory">
            {ship.cargo.inventory.map((item, idx) => (
              <div key={idx} className="item">
                {item.name}, {item.units}
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="ship-centre">
        <h1>
          Ship: <span className="txt-accent">{ship.registration.name}</span>
          <br />
          {ship.registration.role} - {ship.frame.name}</h1>
        <section className="nav">
          <h2>Current System: <span className="txt-accent">{system.symbol}</span>, {system.type}</h2>
          <h3>Available waypoints for travel:</h3>
          <div className="waypoints">
            {system.waypoints.map((waypoint, idx) => (
              <div key={idx} className="waypoint">
                <span className="txt-accent">{waypoint.symbol}</span> <br />
                Type: {waypoint.type} <br />
                Co-ordinates: {waypoint.x}, {waypoint.y}
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className="ship-right">
        <section className="modules">
          <h3 className="txt-accent">Modules</h3>
          {condenseModules(ship.modules).map((module, idx) => (
            <div key={idx} className="module">
              {module.name + (module.count > 1 ? ` x ${module.count}` : '')}
            </div>
          ))}
        </section>
        <section className="mounts">
          <h3 className="txt-accent">Mounts</h3>
          {ship.mounts.map((mount, idx) => (
            <div key={idx} className="mount">
              {mount.name}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
