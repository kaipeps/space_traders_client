import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@emotion/styled";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} followCursor />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(31, 7, 41, 0.8)',
    maxWidth: 500,
    border: '1px solid #dadde9',
    border: '2px solid #39bbea',
    borderRadius: '0.7rem',
    boxShadow: '0px 0px 3px #39bbea, 0px 0px 3px #39bbea inset'
  },
}));

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

export default function ShipyardTooltip({ children, item }) {
  const { moduleString, mountString } = formatShip(item)
  return (
    <StyledTooltip
      title={
        <div className="Tooltip">
          <header>
            <span className="txt-accent">{item.name}</span>
          </header>
          <main>
            <p>{item.description}</p>
            <p><span className="txt-accent">Modules:</span> {moduleString}</p>
            <p><span className="txt-accent">Mounts:</span> {mountString}</p>
          </main>
        </div>
      }
    >
      {children}
    </StyledTooltip>
  )
}