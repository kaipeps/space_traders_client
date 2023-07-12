import StyledTooltip from "./StyledTooltip";
import TooltipHeader from "./TooltipParts/TooltipHeader";

export default function HardwareTooltip({ children, item }) {
  console.log(item)
  return (
    <StyledTooltip
      maxWidth={250}
      title={
        <div className="Tooltip">
          <TooltipHeader textContent={item.name} />
          <p>{item.description}</p>
          <span className="properties">
            {item.capacity ? "Capacity: " + item.capacity + " each"
              : item.strength ? "Strength: " + item.strength : ''}
          </span>
        </div>
      }
    >
      {children}
    </StyledTooltip>
  )
}