import CargoCard from "../../ObjectCards/CargoCard";

export default function Cargo({ cargo }) {
  return (
    <section className="Cargo">
      <h3 className="txt-accent">Cargo</h3>
      Storage Used: {cargo.units}/{cargo.capacity} Units
      <div className="inventory">
        {cargo.inventory.map((item, idx) => (
          <CargoCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};