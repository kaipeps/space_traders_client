import StyledTooltip from "./StyledTooltip";
import TooltipHeader from "./TooltipParts/TooltipHeader";

export default function ShipyardTooltip({ children, item }) {
  const { moduleString, mountString } = formatShip(item)

  const formatShip = item => {
    let moduleString
    if (item.modules[0]) {
      moduleString = item.modules
        .map(module => module.name)
        .join(', ')
    } else {
      moduleString = "None"
    }

    let mountString
    if (item.mounts[0]) {
      mountString = item.mounts
        .map(mount => mount.name)
        .join(', ')
    } else {
      mountString = "None"
    }

    return { moduleString, mountString }
  }

  return (
    <StyledTooltip
      maxWidth={500}
      title={
        <div className="Tooltip">
          <TooltipHeader textContent={item.name} />
          <p>{item.description}</p>
          <p><span className="txt-accent">Modules:</span> {moduleString}</p>
          <p><span className="txt-accent">Mounts:</span> {mountString}</p>
        </div>
      }
    >
      {children}
    </StyledTooltip>
  )
}