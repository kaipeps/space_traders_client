export default function WaypointCard({ waypoint }) {
  return (
    <div className="WaypointCard">
      <span className="txt-accent">{waypoint.symbol}</span> <br />
      Type: {waypoint.type} <br />
      Co-ordinates: {waypoint.x}, {waypoint.y}
    </div>
  )
}
