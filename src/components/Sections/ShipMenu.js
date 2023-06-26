const condenseModules = (modules) => {
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
}

export default function ShipMenu() {
  const egShip = {
    "symbol": "SHR1MPY-1",
    "nav": {
      "systemSymbol": "X1-ZT91",
      "waypointSymbol": "X1-ZT91-90060F",
      "route": {
        "departure": {
          "symbol": "X1-ZT91-90060F",
          "type": "PLANET",
          "systemSymbol": "X1-ZT91",
          "x": -13,
          "y": 18
        },
        "destination": {
          "symbol": "X1-ZT91-90060F",
          "type": "PLANET",
          "systemSymbol": "X1-ZT91",
          "x": -13,
          "y": 18
        },
        "arrival": "2023-06-21T15:11:52.437Z",
        "departureTime": "2023-06-21T15:11:52.437Z"
      },
      "status": "IN_ORBIT",
      "flightMode": "CRUISE"
    },
    "crew": {
      "current": 59,
      "capacity": 80,
      "required": 59,
      "rotation": "STRICT",
      "morale": 100,
      "wages": 0
    },
    "fuel": {
      "current": 1200,
      "capacity": 1200,
      "consumed": {
        "amount": 0,
        "timestamp": "2023-06-21T15:11:52.437Z"
      }
    },
    "frame": {
      "symbol": "FRAME_FRIGATE",
      "name": "Frame Frigate",
      "description": "A medium-sized, multi-purpose spacecraft, often used for combat, transport, or support operations.",
      "moduleSlots": 8,
      "mountingPoints": 5,
      "fuelCapacity": 1200,
      "condition": 100,
      "requirements": {
        "power": 8,
        "crew": 25
      }
    },
    "reactor": {
      "symbol": "REACTOR_FISSION_I",
      "name": "Fission Reactor I",
      "description": "A basic fission power reactor, used to generate electricity from nuclear fission reactions.",
      "condition": 100,
      "powerOutput": 31,
      "requirements": {
        "crew": 8
      }
    },
    "engine": {
      "symbol": "ENGINE_ION_DRIVE_II",
      "name": "Ion Drive II",
      "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance.",
      "condition": 100,
      "speed": 30,
      "requirements": {
        "power": 6,
        "crew": 8
      }
    },
    "modules": [
      {
        "symbol": "MODULE_CARGO_HOLD_I",
        "name": "Cargo Hold",
        "description": "A module that increases a ship's cargo capacity.",
        "capacity": 30,
        "requirements": {
          "crew": 0,
          "power": 1,
          "slots": 1
        }
      },
      {
        "symbol": "MODULE_CARGO_HOLD_I",
        "name": "Cargo Hold",
        "description": "A module that increases a ship's cargo capacity.",
        "capacity": 30,
        "requirements": {
          "crew": 0,
          "power": 1,
          "slots": 1
        }
      },
      {
        "symbol": "MODULE_CREW_QUARTERS_I",
        "name": "Crew Quarters",
        "description": "A module that provides living space and amenities for the crew.",
        "capacity": 40,
        "requirements": {
          "crew": 2,
          "power": 1,
          "slots": 1
        }
      },
      {
        "symbol": "MODULE_CREW_QUARTERS_I",
        "name": "Crew Quarters",
        "description": "A module that provides living space and amenities for the crew.",
        "capacity": 40,
        "requirements": {
          "crew": 2,
          "power": 1,
          "slots": 1
        }
      },
      {
        "symbol": "MODULE_MINERAL_PROCESSOR_I",
        "name": "Mineral Processor",
        "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
        "requirements": {
          "crew": 0,
          "power": 1,
          "slots": 2
        }
      },
      {
        "symbol": "MODULE_JUMP_DRIVE_I",
        "name": "Jump Drive I",
        "description": "A basic antimatter jump drive that allows for instantaneous short-range interdimensional travel.",
        "range": 500,
        "requirements": {
          "crew": 10,
          "power": 4,
          "slots": 1
        }
      },
      {
        "symbol": "MODULE_WARP_DRIVE_I",
        "name": "Warp Drive I",
        "description": "A basic warp drive that allows for short-range interstellar travel.",
        "range": 2000,
        "requirements": {
          "crew": 2,
          "power": 3,
          "slots": 1
        }
      }
    ],
    "mounts": [
      {
        "symbol": "MOUNT_SENSOR_ARRAY_I",
        "name": "Sensor Array I",
        "description": "A basic sensor array that improves a ship's ability to detect and track other objects in space.",
        "strength": 1,
        "requirements": {
          "crew": 0,
          "power": 1
        }
      },
      {
        "symbol": "MOUNT_MINING_LASER_I",
        "name": "Mining Laser I",
        "description": "A basic mining laser that can be used to extract valuable minerals from asteroids and other space objects.",
        "strength": 10,
        "requirements": {
          "crew": 0,
          "power": 1
        }
      },
      {
        "symbol": "MOUNT_SURVEYOR_I",
        "name": "Surveyor I",
        "description": "A basic survey probe that can be used to gather information about a mineral deposit.",
        "strength": 1,
        "deposits": [
          "QUARTZ_SAND",
          "SILICON_CRYSTALS",
          "PRECIOUS_STONES",
          "ICE_WATER",
          "AMMONIA_ICE",
          "IRON_ORE",
          "COPPER_ORE",
          "SILVER_ORE",
          "ALUMINUM_ORE",
          "GOLD_ORE",
          "PLATINUM_ORE"
        ],
        "requirements": {
          "crew": 2,
          "power": 1
        }
      }
    ],
    "registration": {
      "name": "SHR1MPY-1",
      "factionSymbol": "COSMIC",
      "role": "COMMAND"
    },
    "cargo": {
      "capacity": 60,
      "units": 0,
      "inventory": [
        {
          "symbol": "PRECIOUS_STONES",
          "name": "Precious Stones",
          "description": "string",
          "units": 1
        },
        {
          "symbol": "PRECIOUS_STONES",
          "name": "Precious Stones",
          "description": "string",
          "units": 1
        },
        {
          "symbol": "PRECIOUS_STONES",
          "name": "Precious Stones",
          "description": "string",
          "units": 1
        },
        {
          "symbol": "PRECIOUS_STONES",
          "name": "Precious Stones",
          "description": "string",
          "units": 1
        },
        {
          "symbol": "PRECIOUS_STONES",
          "name": "Precious Stones",
          "description": "string",
          "units": 1
        }
      ]
    }
  }
  const egSystem = {
    "symbol": "X1-TX94",
    "sectorSymbol": "X1",
    "type": "RED_STAR",
    "x": 9547,
    "y": 30275,
    "waypoints": [
      {
        "symbol": "X1-TX94-21551C",
        "type": "PLANET",
        "x": -13,
        "y": 9
      },
      {
        "symbol": "X1-TX94-77250C",
        "type": "PLANET",
        "x": 8,
        "y": 23
      },
      {
        "symbol": "X1-TX94-85842E",
        "type": "MOON",
        "x": 8,
        "y": 23
      },
      {
        "symbol": "X1-TX94-26213E",
        "type": "MOON",
        "x": 8,
        "y": 23
      },
      {
        "symbol": "X1-TX94-01934B",
        "type": "MOON",
        "x": 8,
        "y": 23
      },
      {
        "symbol": "X1-TX94-75475D",
        "type": "ASTEROID_FIELD",
        "x": -35,
        "y": -19
      },
      {
        "symbol": "X1-TX94-65796F",
        "type": "GAS_GIANT",
        "x": -4,
        "y": -51
      },
      {
        "symbol": "X1-TX94-14277C",
        "type": "ORBITAL_STATION",
        "x": -4,
        "y": -51
      },
      {
        "symbol": "X1-TX94-47638B",
        "type": "PLANET",
        "x": -52,
        "y": 42
      },
      {
        "symbol": "X1-TX94-43479C",
        "type": "JUMP_GATE",
        "x": -43,
        "y": 46
      }
    ],
    "factions": []
  }

  return (
    <div className="ShipMenu">
      <div className="ship-left">
        <section className="status">
          <h3>Status</h3>
          <span className="readout">
            Fuel: {egShip.fuel.current}/{egShip.fuel.capacity} Units<br />
            Crew: {egShip.crew.current}/{egShip.crew.capacity}; {egShip.crew.required} required<br />
            On {egShip.crew.rotation} Rotation <br />
            Morale Level {egShip.crew.morale}
          </span>
        </section>
        <section className="cargo">
          <h3>Cargo</h3>
          Storage Used: {egShip.cargo.units}/{egShip.cargo.capacity} Units
          <div className="inventory">
            {egShip.cargo.inventory.map(item => (
              <div className="item">
                {item.name}, {item.units}
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="ship-centre">
        <h1>Ship: {egShip.registration.name} <br />
          {egShip.registration.role} - {egShip.frame.name}</h1>
        <section className="nav">
          <h2>Current System: {egSystem.symbol}, {egSystem.type}</h2>
          <h3>Available waypoints for travel:</h3>
          <div className="waypoints">
            {egSystem.waypoints.map(waypoint => (
              <div className="waypoint">
                {waypoint.symbol} <br />
                Type: {waypoint.type} <br />
                Co-ordinates: {waypoint.x}, {waypoint.y}
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className="ship-right">
        <section className="modules">
          <h3>Modules</h3>
          {condenseModules(egShip.modules).map(module => (
            <div className="module">
              {module.name + (module.count > 1 ? ` x ${module.count}` : '')}
            </div>
          ))}
        </section>
        <section className="mounts">
          <h3>Mounts</h3>
          {egShip.mounts.map(mount => (
            <div className="mount">
              {mount.name}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
