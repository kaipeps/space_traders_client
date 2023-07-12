import { useContext } from "react"
import { ShipContext } from "../Pages/Ship"

export default function WaypointCard({ waypoint, handleNavigation }) {
  const { ship, setShip } = useContext(ShipContext)
  const traitsList = traits => {
    return (
      <section className="traits">
        Traits: {traits.reduce((traitsArr, trait) => [...traitsArr, trait.name], []).join(', ')}
      </section>
    )
  }

  return (
    <div className="WaypointCard" onClick={() => handleNavigation(ship, setShip, waypoint.symbol)} >
      <span className="txt-accent">{waypoint.symbol}</span> <br />
      Type: {waypoint.type} <br />
      Co-ordinates: {waypoint.x}, {waypoint.y} {waypoint.traits[0] ? traitsList(waypoint.traits) : ''}
    </div>
  )
}
