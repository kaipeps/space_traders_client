export default function CargoCard({ item }) {
  return (
    <div className="CargoCard">
      {item.name}, {item.units}
    </div>
  );
};