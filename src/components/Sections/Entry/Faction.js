import DescriptiveTooltip from "../../Tooltips/DescriptiveTooltip"

export default function Faction({ faction }) {
  return (
    <div className="Faction">
      <h2 className="txt-accent">The {faction.name}</h2>
      <section className="about">
        <p className="description">
          {faction.description}
        </p>
        <h2 className="txt-accent">Traits</h2>
        <section className="traits">
          {faction.traits.map((trait, idx) => (
            <DescriptiveTooltip key={idx} item={trait}>
              <span className="trait">
                {trait.name}
              </span>
            </DescriptiveTooltip>
          ))}
        </section>
      </section>
    </div>
  )
};