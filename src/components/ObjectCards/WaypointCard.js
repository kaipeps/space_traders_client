const traitsList = traits => {
  return (
    <section className="traits">
      Traits: {traits.reduce((traitsArr, trait) => [...traitsArr, trait.name], []).join(', ')}
    </section>
  )
}

export default function WaypointCard({ waypoint }) {
  console.log(waypoint)
  return (
    <div className="WaypointCard">
      <span className="txt-accent">{waypoint.symbol}</span> <br />
      Type: {waypoint.type} <br />
      Co-ordinates: {waypoint.x}, {waypoint.y} {waypoint.traits[0] ? traitsList(waypoint.traits) : ''}
    </div>
  )
}
