import ModuleCard from "../../ObjectCards/ModuleCard";

export default function Modules({ modules }) {
  const condenseModules = modules => {
    const modulesObj = {}
    modules.forEach(module => {
      if (Object.keys(modulesObj).includes(module.symbol)) {
        modulesObj[module.symbol].count += 1
      } else {
        modulesObj[module.symbol] = {
          "name": module.name,
          "count": 1,
          "description": module.description,
          "capacity": module.capacity,
          "requirements": module.requirements
        }
      }
    })
    return Object.values(modulesObj)
  };

  return (
    <section className="Modules">
      <h3 className="txt-accent">Modules</h3>
      {condenseModules(modules).map((module, idx) => (
        <ModuleCard key={idx} module={module} />
      ))}
    </section>
  )
}