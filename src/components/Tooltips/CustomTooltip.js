import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@emotion/styled";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} followCursor />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(31, 7, 41, 0.8)',
    maxWidth: 250,
    border: '2px solid #39bbea',
    borderRadius: '0.7rem',
    boxShadow: '0px 0px 3px #39bbea, 0px 0px 3px #39bbea'
  },
}));

export default function CustomTooltip({ children, item }) {
  return (
    <StyledTooltip
      title={
        <div className="Tooltip">
          <header>
            <span className="txt-accent">{item.name}</span>
          </header>
          <main>
            <p>{item.description}</p>
          </main>
        </div>
      }
    >
      {children}
    </StyledTooltip>
  )
}