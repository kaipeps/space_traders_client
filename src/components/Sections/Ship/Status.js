export default function ShipStatus({ fuel, crew }) {
  return (
    <section className="Status">
      <h3 className="txt-accent">Ship Status</h3>
      <span className="readout">
        Fuel: {fuel.current}/{fuel.capacity} Units<br />
        Current Crew: {crew.current}/{crew.capacity}<br />
        Morale Level - {crew.morale}<br />
        Rotation: {crew.rotation}
      </span>
    </section>
  );
};