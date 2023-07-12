import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@emotion/styled";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} followCursor />
))(({ maxWidth }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(31, 7, 41, 0.8)',
    fontSize: '0.75em',
    maxWidth: maxWidth,
    border: '2px solid #39bbea',
    borderRadius: '0.7rem',
    boxShadow: '0px 0px 3px #39bbea, 0px 0px 3px #39bbea inset'
  },
}));

export default StyledTooltip;