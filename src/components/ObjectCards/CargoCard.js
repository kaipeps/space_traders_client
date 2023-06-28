import CustomTooltip from "../Tooltips/CustomTooltip";

export default function CargoCard({ item }) {
  return (
    <CustomTooltip item={item}>
      <div className="CargoCard">
        {item.name}, {item.units}
      </div>
    </CustomTooltip>
  );
};