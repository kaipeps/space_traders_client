import DescriptiveTooltip from "../Tooltips/DescriptiveTooltip";

export default function DescriptiveCard({ item }) {
  return (
    <DescriptiveTooltip item={item}>
      <div className="CargoCard">
        {item.name}, {item.units}
      </div>
    </DescriptiveTooltip>
  );
};