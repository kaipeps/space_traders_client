export default function ShipCard({ ship }) {
  const frameRename = (frameName) => frameName.replace("Frame ", "");

  const convertSymbolNotation = (symbol) => symbol
    .split('_').join(' ');

  const displayStatusAndLocation = (nav) => {
    const status = convertSymbolNotation(nav.status)
    const location = nav.waypointSymbol
    return <>Currently: {status} <br />{status === "In Transit" ? "To:" : "At:"} {location}</>
  }

  const { symbol, nav, frame, registration } = ship;
  return (
    <div className="ShipCard" href="/ship">
      <span className="symbol"> Ship: {symbol} </span>
      <br />
      <span className="ship-type">
        Type: {registration.role} {frameRename(frame.name)} </span>
      <br />
      <span className="status"> {displayStatusAndLocation(nav)} </span>
    </div>
  );
};