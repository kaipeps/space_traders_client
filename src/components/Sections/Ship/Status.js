export default function ShipStatus({ fuel, crew, nav }) {
  return (
    <section className="Status">
      <h3 className="txt-accent">Ship Status</h3>
      <span className="readout">
        Fuel: {fuel.current}/{fuel.capacity}<br />
        Flight Mode: {nav.flightMode} <br />
        Current Crew: {crew.current}/{crew.capacity}<br />
        Morale Level - {crew.morale}<br />
        Rotation: {crew.rotation}
      </span>
    </section>
  );
};