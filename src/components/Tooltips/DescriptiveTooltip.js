import StyledTooltip from "./StyledTooltip";
import TooltipHeader from "./TooltipParts/TooltipHeader";

export default function DescriptiveTooltip({ children, item }) {
  return (
    <StyledTooltip
      maxWidth={320}
      title={
        <div className="Tooltip">
          <TooltipHeader textContent={item.name} />
          <p>{item.description}</p>
        </ div>
      }
    >
      {children}
    </StyledTooltip>
  );
};