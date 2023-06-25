import Fleet from '../Sections/Fleet';

const agentData = {
  "accountId": "clj5urhna8m1qs60dv7tezdui",
  "symbol": "SHR1MPY",
  "headquarters": "X1-ZT91-90060F",
  "credits": 150000,
  "startingFaction": "COSMIC"
}

const fleetData = [
  {
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
          "symbol": "string",
          "name": "string",
          "description": "string",
          "units": 1
        }
      ]
    }
  }
];

export default function Main() {
  return (
    <div className="Main">
      <h2>Welcome, Agent {agentData.symbol}</h2>
      <Fleet fleetData={fleetData} />
    </div>
  );
};
