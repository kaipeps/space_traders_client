const initData = {
  "data": {
    "token": "Not today, buddy.",
    "agent": {
      "accountId": "cljc6on110vv8s60cuvumf0x2",
      "symbol": "SHR1MPY",
      "headquarters": "X1-TX94-77250C",
      "credits": 150000,
      "startingFaction": "ECHO"
    },
    "contract": {
      "id": "cljc6on350vvcs60cb1bxj8vq",
      "factionSymbol": "ECHO",
      "type": "PROCUREMENT",
      "terms": {
        "deadline": "2023-07-03T01:32:11.853Z",
        "payment": {
          "onAccepted": 25899,
          "onFulfilled": 120862
        },
        "deliver": [
          {
            "tradeSymbol": "COPPER_ORE",
            "destinationSymbol": "X1-TX94-85842E",
            "unitsRequired": 890,
            "unitsFulfilled": 0
          }
        ]
      },
      "accepted": false,
      "fulfilled": false,
      "expiration": "2023-06-27T01:32:11.853Z",
      "deadlineToAccept": "2023-06-27T01:32:11.853Z"
    },
    "faction": {
      "symbol": "ECHO",
      "name": "Echo Technological Conclave",
      "description": "Echo Technological Conclave is an innovative and forward-thinking faction that thrives on technological advancement and scientific discovery. They have a deep commitment to progress and a drive to push the boundaries of what is possible, making them a force to be reckoned with.",
      "headquarters": "X1-TX94-77250C",
      "traits": [
        {
          "symbol": "INNOVATIVE",
          "name": "Innovative",
          "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
        },
        {
          "symbol": "VISIONARY",
          "name": "Visionary",
          "description": "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality."
        },
        {
          "symbol": "RESEARCH_FOCUSED",
          "name": "Research-Focused",
          "description": "Dedicated to advancing knowledge and understanding through research and experimentation. Often have a strong focus on scientific and technological development, and may be willing to take risks and explore new ideas in order to make progress."
        },
        {
          "symbol": "TECHNOLOGICALLY_ADVANCED",
          "name": "Technologically Advanced",
          "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
        }
      ],
      "isRecruiting": true
    },
    "ship": {
      "symbol": "SHR1MPY-1",
      "nav": {
        "systemSymbol": "X1-TX94",
        "waypointSymbol": "X1-TX94-77250C",
        "route": {
          "departure": {
            "symbol": "X1-TX94-77250C",
            "type": "PLANET",
            "systemSymbol": "X1-TX94",
            "x": 8,
            "y": 23
          },
          "destination": {
            "symbol": "X1-TX94-77250C",
            "type": "PLANET",
            "systemSymbol": "X1-TX94",
            "x": 8,
            "y": 23
          },
          "arrival": "2023-06-26T01:32:11.909Z",
          "departureTime": "2023-06-26T01:32:11.909Z"
        },
        "status": "DOCKED",
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
          "timestamp": "2023-06-26T01:32:11.909Z"
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
        "factionSymbol": "ECHO",
        "role": "COMMAND"
      },
      "cargo": {
        "capacity": 60,
        "units": 0,
        "inventory": []
      }
    }
  }
}

const agentData = {
  "data": {
    "accountId": "clj5urhna8m1qs60dv7tezdui",
    "symbol": "SHR1MPY",
    "headquarters": "X1-ZT91-90060F",
    "credits": 150000,
    "startingFaction": "COSMIC"
  }
}

const shipData = {
  "data": {
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
      "status": "DOCKED",
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
}

const contractsData = {
  "data": [
    {
      "id": "clj5urhp48m1ts60d9hbosdea",
      "factionSymbol": "COSMIC",
      "type": "PROCUREMENT",
      "terms": {
        "deadline": "2023-06-28T15:11:52.385Z",
        "payment": {
          "onAccepted": 2231250,
          "onFulfilled": 2231250
        },
        "deliver": [
          {
            "tradeSymbol": "COPPER_ORE",
            "destinationSymbol": "X1-ZT91-88952X",
            "unitsRequired": 85000,
            "unitsFulfilled": 0
          }
        ]
      },
      "accepted": false,
      "fulfilled": false,
      "expiration": "2023-06-22T15:11:52.384Z",
      "deadlineToAccept": "2023-06-22T15:11:52.384Z"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 10
  }
}

const systemData = {
  "data": {
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
}

const waypointsData = {
  "data": [
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-47071X",
      "type": "PLANET",
      "x": 10,
      "y": 15,
      "orbitals": [],
      "traits": [
        {
          "symbol": "TOXIC_ATMOSPHERE",
          "name": "Toxic Atmosphere",
          "description": "A waypoint with a poisonous atmosphere, necessitating the use of specialized equipment and technology to protect inhabitants and visitors from harmful substances."
        },
        {
          "symbol": "VOLCANIC",
          "name": "Volcanic",
          "description": "A volatile world marked by intense volcanic activity, creating a hazardous environment with the potential for valuable resource extraction, such as rare metals and geothermal energy."
        },
        {
          "symbol": "WEAK_GRAVITY",
          "name": "Weak Gravity",
          "description": "A waypoint with a low gravitational pull, providing unique opportunities for research and industry while also challenging the adaptation of life forms and technology."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.025Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-90060F",
      "type": "PLANET",
      "x": -13,
      "y": 18,
      "orbitals": [
        {
          "symbol": "X1-ZT91-88952X"
        },
        {
          "symbol": "X1-ZT91-24603C"
        },
        {
          "symbol": "X1-ZT91-13924A"
        }
      ],
      "traits": [
        {
          "symbol": "OVERCROWDED",
          "name": "Overcrowded",
          "description": "A waypoint teeming with inhabitants, leading to cramped living conditions and a high demand for resources."
        },
        {
          "symbol": "HIGH_TECH",
          "name": "High-Tech",
          "description": "A center of innovation and cutting-edge technology, driving progress and attracting skilled individuals from around the galaxy."
        },
        {
          "symbol": "BUREAUCRATIC",
          "name": "Bureaucratic",
          "description": "A waypoint governed by complex regulations, red tape, and layers of administration, often leading to inefficiencies and frustration."
        },
        {
          "symbol": "TEMPERATE",
          "name": "Temperate",
          "description": "A world with a mild climate and balanced ecosystem, providing a comfortable environment for a variety of life forms and supporting diverse industries."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.055Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-88952X",
      "type": "MOON",
      "x": -13,
      "y": 18,
      "orbitals": [],
      "traits": [
        {
          "symbol": "BARREN",
          "name": "Barren",
          "description": "A desolate world with little to no vegetation or water, presenting unique challenges for habitation and resource extraction."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.108Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-24603C",
      "type": "MOON",
      "x": -13,
      "y": 18,
      "orbitals": [],
      "traits": [
        {
          "symbol": "VOLCANIC",
          "name": "Volcanic",
          "description": "A volatile world marked by intense volcanic activity, creating a hazardous environment with the potential for valuable resource extraction, such as rare metals and geothermal energy."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.132Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-13924A",
      "type": "MOON",
      "x": -13,
      "y": 18,
      "orbitals": [],
      "traits": [
        {
          "symbol": "FROZEN",
          "name": "Frozen",
          "description": "An ice-covered world with frigid temperatures, providing unique research opportunities and resources such as ice water, ammonia ice, and other frozen compounds."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.168Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-18205B",
      "type": "ASTEROID_FIELD",
      "x": -12,
      "y": 37,
      "orbitals": [],
      "traits": [
        {
          "symbol": "MINERAL_DEPOSITS",
          "name": "Mineral Deposits",
          "description": "Abundant mineral resources, attracting mining operations and providing valuable materials such as silicon crystals and quartz sand for various industries."
        },
        {
          "symbol": "COMMON_METAL_DEPOSITS",
          "name": "Common Metal Deposits",
          "description": "A waypoint rich in common metal ores like iron, copper, and aluminum, essential for construction and manufacturing."
        },
        {
          "symbol": "STRIPPED",
          "name": "Stripped",
          "description": "A waypoint that has been heavily exploited for its resources, leaving a scarred and depleted landscape with diminished opportunities for future development."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.190Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-97956C",
      "type": "GAS_GIANT",
      "x": -48,
      "y": 33,
      "orbitals": [
        {
          "symbol": "X1-ZT91-25027X"
        }
      ],
      "traits": [
        {
          "symbol": "VIBRANT_AURORAS",
          "name": "Vibrant Auroras",
          "description": "A celestial light show caused by the interaction of charged particles with the waypoint's atmosphere, creating a mesmerizing spectacle and attracting tourists from across the galaxy."
        },
        {
          "symbol": "STRONG_MAGNETOSPHERE",
          "name": "Strong Magnetosphere",
          "description": "A waypoint enveloped in a powerful magnetic field, potentially affecting spacecraft systems, and creating unique phenomena such as the concentration of exotic matter and graviton emitters."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.215Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-25027X",
      "type": "ORBITAL_STATION",
      "x": -48,
      "y": 33,
      "orbitals": [],
      "traits": [
        {
          "symbol": "MILITARY_BASE",
          "name": "Military Base",
          "description": "A fortified stronghold housing armed forces, advanced weaponry, and strategic assets for defense or offense."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        },
        {
          "symbol": "SHIPYARD",
          "name": "Shipyard",
          "description": "A bustling hub for the construction, repair, and sale of various spacecraft, from humble shuttles to mighty warships."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.235Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-35518C",
      "type": "PLANET",
      "x": 26,
      "y": 64,
      "orbitals": [],
      "traits": [
        {
          "symbol": "DRY_SEABEDS",
          "name": "Dry Seabeds",
          "description": "Vast, desolate landscapes that once held oceans, now exposing the remnants of ancient marine life and providing opportunities for the discovery of valuable resources."
        },
        {
          "symbol": "WEAK_GRAVITY",
          "name": "Weak Gravity",
          "description": "A waypoint with a low gravitational pull, providing unique opportunities for research and industry while also challenging the adaptation of life forms and technology."
        },
        {
          "symbol": "MARKETPLACE",
          "name": "Marketplace",
          "description": "A thriving center of commerce where traders from across the galaxy gather to buy, sell, and exchange goods."
        }
      ],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.278Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    },
    {
      "systemSymbol": "X1-ZT91",
      "symbol": "X1-ZT91-85739D",
      "type": "JUMP_GATE",
      "x": 34,
      "y": 62,
      "orbitals": [],
      "traits": [],
      "chart": {
        "submittedBy": "COSMIC",
        "submittedOn": "2023-06-17T16:19:43.301Z"
      },
      "faction": {
        "symbol": "COSMIC"
      }
    }
  ],
  "meta": {
    "total": 10,
    "page": 1,
    "limit": 10
  }
}

const marketData = {
  "data": {
    "symbol": "X1-ZT91-25027X",
    "imports": [
      {
        "symbol": "SHIP_PLATING",
        "name": "Ship Plating",
        "description": "High-quality metal plating used in the construction of ship hulls and other structural components."
      },
      {
        "symbol": "ENGINE_IMPULSE_DRIVE_I",
        "name": "Impulse Drive I",
        "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel."
      },
      {
        "symbol": "REACTOR_SOLAR_I",
        "name": "Solar Reactor I",
        "description": "A basic solar power reactor, used to generate electricity from solar energy."
      },
      {
        "symbol": "REACTOR_CHEMICAL_I",
        "name": "Chemical Reactor I",
        "description": "A basic chemical power reactor, used to generate electricity from chemical reactions."
      },
      {
        "symbol": "MODULE_CARGO_HOLD_I",
        "name": "Cargo Hold",
        "description": "A module that increases a ship's cargo capacity."
      },
      {
        "symbol": "MODULE_MINERAL_PROCESSOR_I",
        "name": "Mineral Processor",
        "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units."
      },
      {
        "symbol": "MODULE_CREW_QUARTERS_I",
        "name": "Crew Quarters",
        "description": "A module that provides living space and amenities for the crew."
      },
      {
        "symbol": "ENGINE_ION_DRIVE_I",
        "name": "Ion Drive I",
        "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration."
      },
      {
        "symbol": "REACTOR_FISSION_I",
        "name": "Fission Reactor I",
        "description": "A basic fission power reactor, used to generate electricity from nuclear fission reactions."
      },
      {
        "symbol": "MOUNT_MINING_LASER_II",
        "name": "Mining Laser II",
        "description": "An advanced mining laser that is more efficient and effective at extracting valuable minerals from asteroids and other space objects."
      },
      {
        "symbol": "ENGINE_ION_DRIVE_II",
        "name": "Ion Drive II",
        "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance."
      },
      {
        "symbol": "MODULE_ORE_REFINERY_I",
        "name": "Ore Refinery",
        "description": "A specialized module that can refine raw ores into usable metals and other materials."
      },
      {
        "symbol": "REACTOR_FUSION_I",
        "name": "Fusion Reactor I",
        "description": "A basic fusion power reactor, used to generate electricity from nuclear fusion reactions."
      },
      {
        "symbol": "MOUNT_MINING_LASER_I",
        "name": "Mining Laser I",
        "description": "A basic mining laser that can be used to extract valuable minerals from asteroids and other space objects."
      },
      {
        "symbol": "MOUNT_SURVEYOR_I",
        "name": "Surveyor I",
        "description": "A basic survey probe that can be used to gather information about a mineral deposit."
      },
      {
        "symbol": "MOUNT_TURRET_I",
        "name": "Rotary Cannon",
        "description": "A rotary cannon is a type of mounted turret that is designed to fire a high volume of rounds in rapid succession."
      },
      {
        "symbol": "MOUNT_MISSILE_LAUNCHER_I",
        "name": "Missile Launcher",
        "description": "A basic missile launcher that fires guided missiles with a variety of warheads for different targets."
      }
    ],
    "exports": [
      {
        "symbol": "FUEL",
        "name": "Fuel",
        "description": "High-energy fuel used in spacecraft propulsion systems to enable long-distance space travel."
      }
    ],
    "exchange": [
      {
        "symbol": "PRECIOUS_STONES",
        "name": "string",
        "description": "string"
      }
    ],
    "transactions": [
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-A",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 6,
        "pricePerUnit": 115,
        "totalPrice": 690,
        "timestamp": "2023-06-22T08:20:41.555Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-3",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T08:18:48.386Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "MSKWIK-A",
        "tradeSymbol": "MODULE_MINERAL_PROCESSOR_I",
        "type": "SELL",
        "units": 10,
        "pricePerUnit": 5318,
        "totalPrice": 53180,
        "timestamp": "2023-06-22T08:16:47.339Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "MSKWIK-A",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 3,
        "pricePerUnit": 115,
        "totalPrice": 345,
        "timestamp": "2023-06-22T08:16:25.067Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-7",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T08:13:28.600Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-C",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T08:11:27.642Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-9",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 6,
        "pricePerUnit": 115,
        "totalPrice": 690,
        "timestamp": "2023-06-22T08:10:34.581Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-6",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T08:09:29.900Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-F",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 6,
        "pricePerUnit": 115,
        "totalPrice": 690,
        "timestamp": "2023-06-22T08:07:58.384Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "FARMER-7E",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 2,
        "pricePerUnit": 115,
        "totalPrice": 230,
        "timestamp": "2023-06-22T08:05:09.419Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "FARMER-7E",
        "tradeSymbol": "MOUNT_MINING_LASER_I",
        "type": "SELL",
        "units": 10,
        "pricePerUnit": 4443,
        "totalPrice": 44430,
        "timestamp": "2023-06-22T08:05:00.271Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-4",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T08:04:25.733Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-3",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T07:57:18.482Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "FARMER-77",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 4,
        "pricePerUnit": 115,
        "totalPrice": 460,
        "timestamp": "2023-06-22T07:57:04.142Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "FARMER-77",
        "tradeSymbol": "ENGINE_ION_DRIVE_I",
        "type": "SELL",
        "units": 10,
        "pricePerUnit": 6785,
        "totalPrice": 67850,
        "timestamp": "2023-06-22T07:56:46.060Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-D",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T07:56:03.314Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "CZPHOENIX-8",
        "tradeSymbol": "MODULE_CARGO_HOLD_I",
        "type": "SELL",
        "units": 30,
        "pricePerUnit": 5500,
        "totalPrice": 165000,
        "timestamp": "2023-06-22T07:54:50.823Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-12",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 5,
        "pricePerUnit": 115,
        "totalPrice": 575,
        "timestamp": "2023-06-22T07:53:59.733Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-10",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 6,
        "pricePerUnit": 115,
        "totalPrice": 690,
        "timestamp": "2023-06-22T07:51:26.716Z"
      },
      {
        "waypointSymbol": "X1-ZT91-25027X",
        "shipSymbol": "BLUECACTUS-A",
        "tradeSymbol": "FUEL",
        "type": "PURCHASE",
        "units": 6,
        "pricePerUnit": 115,
        "totalPrice": 690,
        "timestamp": "2023-06-22T07:48:11.415Z"
      }
    ],
    "tradeGoods": [
      {
        "symbol": "SHIP_PLATING",
        "tradeVolume": 100,
        "supply": "SCARCE",
        "purchasePrice": 838,
        "sellPrice": 415
      },
      {
        "symbol": "ENGINE_IMPULSE_DRIVE_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 11716,
        "sellPrice": 5788
      },
      {
        "symbol": "REACTOR_SOLAR_I",
        "tradeVolume": 100,
        "supply": "LIMITED",
        "purchasePrice": 12304,
        "sellPrice": 6099
      },
      {
        "symbol": "REACTOR_CHEMICAL_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 13416,
        "sellPrice": 6631
      },
      {
        "symbol": "MODULE_CARGO_HOLD_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 11204,
        "sellPrice": 5462
      },
      {
        "symbol": "MODULE_MINERAL_PROCESSOR_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 10774,
        "sellPrice": 5310
      },
      {
        "symbol": "FUEL",
        "tradeVolume": 10000,
        "supply": "MODERATE",
        "purchasePrice": 115,
        "sellPrice": 57
      },
      {
        "symbol": "MODULE_CREW_QUARTERS_I",
        "tradeVolume": 1000,
        "supply": "MODERATE",
        "purchasePrice": 25566,
        "sellPrice": 12548
      },
      {
        "symbol": "ENGINE_ION_DRIVE_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 13738,
        "sellPrice": 6778
      },
      {
        "symbol": "REACTOR_FISSION_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 41374,
        "sellPrice": 20383
      },
      {
        "symbol": "MOUNT_MINING_LASER_II",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 74074,
        "sellPrice": 36444
      },
      {
        "symbol": "ENGINE_ION_DRIVE_II",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 87090,
        "sellPrice": 42446
      },
      {
        "symbol": "MODULE_ORE_REFINERY_I",
        "tradeVolume": 10,
        "supply": "LIMITED",
        "purchasePrice": 49606,
        "sellPrice": 24434
      },
      {
        "symbol": "REACTOR_FUSION_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 37420,
        "sellPrice": 18458
      },
      {
        "symbol": "MOUNT_MINING_LASER_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 9022,
        "sellPrice": 4435
      },
      {
        "symbol": "MOUNT_SURVEYOR_I",
        "tradeVolume": 100,
        "supply": "MODERATE",
        "purchasePrice": 10410,
        "sellPrice": 5079
      },
      {
        "symbol": "MOUNT_TURRET_I",
        "tradeVolume": 10,
        "supply": "MODERATE",
        "purchasePrice": 9654,
        "sellPrice": 4773
      },
      {
        "symbol": "MOUNT_MISSILE_LAUNCHER_I",
        "tradeVolume": 10,
        "supply": "MODERATE",
        "purchasePrice": 13236,
        "sellPrice": 6500
      }
    ]
  }
}

const shipyardData = {
  "data": {
    "symbol": "X1-ZT91-25027X",
    "shipTypes": [
      {
        "type": "SHIP_PROBE"
      },
      {
        "type": "SHIP_ORE_HOUND"
      },
      {
        "type": "SHIP_LIGHT_HAULER"
      },
      {
        "type": "SHIP_REFINING_FREIGHTER"
      },
      {
        "type": "SHIP_MINING_DRONE"
      }
    ],
    "transactions": [
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "FDSFSDA",
        "price": 86629,
        "timestamp": "2023-06-22T07:23:43.514Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SCUMOLA",
        "price": 86627,
        "timestamp": "2023-06-22T04:11:57.373Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SCUMOLA",
        "price": 86625,
        "timestamp": "2023-06-22T01:52:40.386Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 640292,
        "timestamp": "2023-06-21T23:01:41.233Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 630219,
        "timestamp": "2023-06-21T23:01:31.749Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 620353,
        "timestamp": "2023-06-21T23:01:22.947Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 610691,
        "timestamp": "2023-06-21T23:01:20.885Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SEXY-SCHMEXY",
        "price": 86623,
        "timestamp": "2023-06-21T22:05:32.860Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 601227,
        "timestamp": "2023-06-21T20:09:26.685Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 591958,
        "timestamp": "2023-06-21T20:09:16.278Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 582880,
        "timestamp": "2023-06-21T20:09:08.609Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "0NE",
        "price": 573989,
        "timestamp": "2023-06-21T18:24:03.779Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SCUMOLA",
        "price": 86620,
        "timestamp": "2023-06-21T17:13:22.990Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SCUMOLA",
        "price": 86618,
        "timestamp": "2023-06-21T17:13:21.210Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SCUMOLA",
        "price": 86616,
        "timestamp": "2023-06-21T17:12:12.497Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SCUMOLA",
        "price": 86614,
        "timestamp": "2023-06-21T17:10:47.496Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "SOLOMONTHEWISE",
        "price": 86611,
        "timestamp": "2023-06-21T16:55:30.333Z"
      },
      {
        "shipSymbol": "SHIP_ORE_HOUND",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "GROSPD",
        "price": 565281,
        "timestamp": "2023-06-21T16:29:23.657Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "RATZKE",
        "price": 86609,
        "timestamp": "2023-06-21T15:20:50.177Z"
      },
      {
        "shipSymbol": "SHIP_MINING_DRONE",
        "waypointSymbol": "X1-ZT91-25027X",
        "agentSymbol": "RATZKE",
        "price": 86607,
        "timestamp": "2023-06-21T15:20:41.774Z"
      }
    ],
    "ships": [
      {
        "type": "SHIP_PROBE",
        "name": "Probe Satellite",
        "description": "A small, unmanned spacecraft that can be launched into orbit to gather data and perform basic tasks.",
        "purchasePrice": 70080,
        "frame": {
          "symbol": "FRAME_PROBE",
          "name": "Frame Probe",
          "description": "A small, unmanned spacecraft used for exploration, reconnaissance, and scientific research.",
          "moduleSlots": 0,
          "mountingPoints": 0,
          "fuelCapacity": 0,
          "requirements": {
            "power": 1,
            "crew": 0
          }
        },
        "reactor": {
          "symbol": "REACTOR_SOLAR_I",
          "name": "Solar Reactor I",
          "description": "A basic solar power reactor, used to generate electricity from solar energy.",
          "powerOutput": 3,
          "requirements": {
            "crew": 0
          }
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I",
          "name": "Impulse Drive I",
          "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
          "speed": 2,
          "requirements": {
            "power": 1,
            "crew": 0
          }
        },
        "modules": [],
        "mounts": []
      },
      {
        "type": "SHIP_ORE_HOUND",
        "name": "Ore Hound",
        "description": "The Ore Hound is a specialized mining ship designed for extracting valuable ores and minerals from asteroids and other celestial bodies. With its advanced mining lasers and reinforced hull, the Ore Hound is capable of excavating large amounts of ore and minerals from even the toughest asteroids. It is equipped with a range of modules and mounts for handling a variety of mining and defensive needs, and is an essential vessel for miners and traders looking to profit from the rich resources of the galaxy.",
        "purchasePrice": 650576,
        "frame": {
          "symbol": "FRAME_MINER",
          "name": "Frame Miner",
          "description": "A medium-sized spacecraft designed for mining operations and resource extraction.",
          "moduleSlots": 5,
          "mountingPoints": 3,
          "fuelCapacity": 900,
          "requirements": {
            "power": 5,
            "crew": 15
          }
        },
        "reactor": {
          "symbol": "REACTOR_FISSION_I",
          "name": "Fission Reactor I",
          "description": "A basic fission power reactor, used to generate electricity from nuclear fission reactions.",
          "powerOutput": 31,
          "requirements": {
            "crew": 8
          }
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I",
          "name": "Ion Drive I",
          "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration.",
          "speed": 10,
          "requirements": {
            "power": 3,
            "crew": 3
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
            "symbol": "MODULE_CREW_QUARTERS_I",
            "name": "Crew Quarters",
            "description": "A module that provides living space and amenities for the crew.",
            "capacity": 40,
            "requirements": {
              "crew": 2,
              "power": 1,
              "slots": 1
            }
          }
        ],
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_II",
            "name": "Mining Laser II",
            "description": "An advanced mining laser that is more efficient and effective at extracting valuable minerals from asteroids and other space objects.",
            "strength": 25,
            "requirements": {
              "crew": 2,
              "power": 2
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
        ]
      },
      {
        "type": "SHIP_LIGHT_HAULER",
        "name": "Light Hauler",
        "description": "A small, fast cargo ship that is designed for short-range transport of light loads.",
        "purchasePrice": 370618,
        "frame": {
          "symbol": "FRAME_LIGHT_FREIGHTER",
          "name": "Frame Light Freighter",
          "description": "A small, versatile spacecraft used for cargo transport and other commercial operations.",
          "moduleSlots": 6,
          "mountingPoints": 1,
          "fuelCapacity": 1700,
          "requirements": {
            "power": 5,
            "crew": 40
          }
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I",
          "name": "Chemical Reactor I",
          "description": "A basic chemical power reactor, used to generate electricity from chemical reactions.",
          "powerOutput": 15,
          "requirements": {
            "crew": 3
          }
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I",
          "name": "Ion Drive I",
          "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration.",
          "speed": 10,
          "requirements": {
            "power": 3,
            "crew": 3
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
          }
        ],
        "mounts": [
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
        ]
      },
      {
        "type": "SHIP_REFINING_FREIGHTER",
        "name": "Refining Freighter",
        "description": "A large cargo ship designed specifically for refining raw materials. Equipped with a powerful reactor and space for large modules, the refining freighter is a versatile and convenient tool for industrial operations in remote or difficult-to-reach locations.",
        "purchasePrice": 1842123,
        "frame": {
          "symbol": "FRAME_HEAVY_FREIGHTER",
          "name": "Frame Heavy Freighter",
          "description": "A large, heavily-armed spacecraft used for cargo transport and other commercial operations in hostile environments.",
          "moduleSlots": 12,
          "mountingPoints": 3,
          "fuelCapacity": 2300,
          "requirements": {
            "power": 10,
            "crew": 100
          }
        },
        "reactor": {
          "symbol": "REACTOR_FUSION_I",
          "name": "Fusion Reactor I",
          "description": "A basic fusion power reactor, used to generate electricity from nuclear fusion reactions.",
          "powerOutput": 40,
          "requirements": {
            "crew": 12
          }
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_II",
          "name": "Ion Drive II",
          "description": "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance.",
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
            "symbol": "MODULE_ORE_REFINERY_I",
            "name": "Ore Refinery",
            "description": "A specialized module that can refine raw ores into usable metals and other materials.",
            "production": [
              "IRON",
              "COPPER",
              "SILVER",
              "GOLD",
              "ALUMINUM",
              "PLATINUM",
              "URANITE",
              "MERITIUM"
            ],
            "requirements": {
              "crew": 20,
              "power": 12,
              "slots": 4
            }
          }
        ],
        "mounts": [
          {
            "symbol": "MOUNT_TURRET_I",
            "name": "Rotary Cannon",
            "description": "A rotary cannon is a type of mounted turret that is designed to fire a high volume of rounds in rapid succession.",
            "requirements": {
              "power": 1,
              "crew": 1
            }
          },
          {
            "symbol": "MOUNT_TURRET_I",
            "name": "Rotary Cannon",
            "description": "A rotary cannon is a type of mounted turret that is designed to fire a high volume of rounds in rapid succession.",
            "requirements": {
              "power": 1,
              "crew": 1
            }
          },
          {
            "symbol": "MOUNT_MISSILE_LAUNCHER_I",
            "name": "Missile Launcher",
            "description": "A basic missile launcher that fires guided missiles with a variety of warheads for different targets.",
            "requirements": {
              "power": 1,
              "crew": 2
            }
          }
        ]
      },
      {
        "type": "SHIP_MINING_DRONE",
        "name": "Mining Drone",
        "description": "A small, unmanned spacecraft that can be used for mining operations, such as extracting valuable minerals from asteroids.",
        "purchasePrice": 86632,
        "frame": {
          "symbol": "FRAME_DRONE",
          "name": "Frame Drone",
          "description": "A small, unmanned spacecraft used for various tasks, such as surveillance, transportation, or combat.",
          "moduleSlots": 3,
          "mountingPoints": 2,
          "fuelCapacity": 100,
          "requirements": {
            "power": 1,
            "crew": -3
          }
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I",
          "name": "Chemical Reactor I",
          "description": "A basic chemical power reactor, used to generate electricity from chemical reactions.",
          "powerOutput": 15,
          "requirements": {
            "crew": 3
          }
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I",
          "name": "Impulse Drive I",
          "description": "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
          "speed": 2,
          "requirements": {
            "power": 1,
            "crew": 0
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
            "symbol": "MODULE_MINERAL_PROCESSOR_I",
            "name": "Mineral Processor",
            "description": "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
            "requirements": {
              "crew": 0,
              "power": 1,
              "slots": 2
            }
          }
        ],
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_I",
            "name": "Mining Laser I",
            "description": "A basic mining laser that can be used to extract valuable minerals from asteroids and other space objects.",
            "strength": 10,
            "requirements": {
              "crew": 0,
              "power": 1
            }
          }
        ]
      }
    ]
  }
}

const reputationData = {
  "data": [
    {
      "reputation": 100,
      "symbol": "COSMIC"
    }
  ],
  "meta": {
    "limit": 10,
    "page": 1,
    "total": 1
  }
}

const scanResults = {
  "data": {
    "cooldown": {
      "shipSymbol": "SHR1MPY-1",
      "totalSeconds": 70,
      "remainingSeconds": 69,
      "expiration": "2023-06-22T09:08:34.955Z"
    },
    "ships": [
      {
        "symbol": "BLUECACTUS-D",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-88952X",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "destination": {
              "symbol": "X1-ZT91-88952X",
              "type": "MOON",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "arrival": "2023-06-22T09:08:00.381Z",
            "departureTime": "2023-06-22T09:07:16.381Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "BLUECACTUS-D",
          "factionSymbol": "COSMIC",
          "role": "EXCAVATOR"
        },
        "frame": {
          "symbol": "FRAME_MINER"
        },
        "reactor": {
          "symbol": "REACTOR_FISSION_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_II"
          },
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "JASON_TRADER-3",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-18205B",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-25027X",
              "type": "ORBITAL_STATION",
              "systemSymbol": "X1-ZT91",
              "x": -48,
              "y": 33
            },
            "destination": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "arrival": "2023-06-22T09:11:28.138Z",
            "departureTime": "2023-06-22T09:06:43.138Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "JASON_TRADER-3",
          "factionSymbol": "COSMIC",
          "role": "EXCAVATOR"
        },
        "frame": {
          "symbol": "FRAME_DRONE"
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I"
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_I"
          }
        ]
      },
      {
        "symbol": "BLUECACTUS-7",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-18205B",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-90060F",
              "type": "PLANET",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "arrival": "2023-06-22T09:07:43.777Z",
            "departureTime": "2023-06-22T09:06:59.777Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "BLUECACTUS-7",
          "factionSymbol": "COSMIC",
          "role": "EXCAVATOR"
        },
        "frame": {
          "symbol": "FRAME_MINER"
        },
        "reactor": {
          "symbol": "REACTOR_FISSION_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_II"
          },
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "BLUECACTUS-4",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-90060F",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "destination": {
              "symbol": "X1-ZT91-90060F",
              "type": "PLANET",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "arrival": "2023-06-22T09:07:31.474Z",
            "departureTime": "2023-06-22T09:06:47.474Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "BLUECACTUS-4",
          "factionSymbol": "COSMIC",
          "role": "EXCAVATOR"
        },
        "frame": {
          "symbol": "FRAME_MINER"
        },
        "reactor": {
          "symbol": "REACTOR_FISSION_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_II"
          },
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "BLUECACTUS-6",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-18205B",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-90060F",
              "type": "PLANET",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "arrival": "2023-06-22T09:07:30.442Z",
            "departureTime": "2023-06-22T09:06:46.442Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "BLUECACTUS-6",
          "factionSymbol": "COSMIC",
          "role": "EXCAVATOR"
        },
        "frame": {
          "symbol": "FRAME_MINER"
        },
        "reactor": {
          "symbol": "REACTOR_FISSION_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_II"
          },
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "FARMER-17",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-18205B",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-25027X",
              "type": "ORBITAL_STATION",
              "systemSymbol": "X1-ZT91",
              "x": -48,
              "y": 33
            },
            "destination": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "arrival": "2023-06-22T09:08:27.497Z",
            "departureTime": "2023-06-22T09:07:18.497Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "FARMER-17",
          "factionSymbol": "VOID",
          "role": "HAULER"
        },
        "frame": {
          "symbol": "FRAME_LIGHT_FREIGHTER"
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "CZPHOENIX-F",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-85739D",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-13924A",
              "type": "MOON",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-85739D",
              "type": "JUMP_GATE",
              "systemSymbol": "X1-ZT91",
              "x": 34,
              "y": 62
            },
            "arrival": "2023-06-22T09:08:02.465Z",
            "departureTime": "2023-06-22T09:06:11.465Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "CZPHOENIX-F",
          "factionSymbol": "COSMIC",
          "role": "HAULER"
        },
        "frame": {
          "symbol": "FRAME_LIGHT_FREIGHTER"
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "FARMER-7E",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-25027X",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-85739D",
              "type": "JUMP_GATE",
              "systemSymbol": "X1-ZT91",
              "x": 34,
              "y": 62
            },
            "destination": {
              "symbol": "X1-ZT91-25027X",
              "type": "ORBITAL_STATION",
              "systemSymbol": "X1-ZT91",
              "x": -48,
              "y": 33
            },
            "arrival": "2023-06-22T09:09:43.538Z",
            "departureTime": "2023-06-22T09:07:17.538Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "FARMER-7E",
          "factionSymbol": "QUANTUM",
          "role": "HAULER"
        },
        "frame": {
          "symbol": "FRAME_LIGHT_FREIGHTER"
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "MSKWIK-10",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-88952X",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-85739D",
              "type": "JUMP_GATE",
              "systemSymbol": "X1-ZT91",
              "x": 34,
              "y": 62
            },
            "destination": {
              "symbol": "X1-ZT91-88952X",
              "type": "MOON",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "arrival": "2023-06-22T09:08:04.714Z",
            "departureTime": "2023-06-22T09:07:17.714Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "MSKWIK-10",
          "factionSymbol": "OBSIDIAN",
          "role": "REFINERY"
        },
        "frame": {
          "symbol": "FRAME_HEAVY_FREIGHTER"
        },
        "reactor": {
          "symbol": "REACTOR_FUSION_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_II"
        },
        "mounts": [
          {
            "symbol": "MOUNT_TURRET_I"
          },
          {
            "symbol": "MOUNT_TURRET_I"
          },
          {
            "symbol": "MOUNT_MISSILE_LAUNCHER_I"
          }
        ]
      },
      {
        "symbol": "DEADMEAT-2",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-35518C",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "destination": {
              "symbol": "X1-ZT91-35518C",
              "type": "PLANET",
              "systemSymbol": "X1-ZT91",
              "x": 26,
              "y": 64
            },
            "arrival": "2023-06-22T09:09:53.468Z",
            "departureTime": "2023-06-22T09:06:42.468Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "BURN"
        },
        "registration": {
          "name": "DEADMEAT-2",
          "factionSymbol": "COSMIC",
          "role": "SATELLITE"
        },
        "frame": {
          "symbol": "FRAME_PROBE"
        },
        "reactor": {
          "symbol": "REACTOR_SOLAR_I"
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I"
        },
        "mounts": []
      },
      {
        "symbol": "BLUECACTUS-3",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-18205B",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-90060F",
              "type": "PLANET",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "arrival": "2023-06-22T09:07:38.503Z",
            "departureTime": "2023-06-22T09:06:54.503Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "BLUECACTUS-3",
          "factionSymbol": "COSMIC",
          "role": "EXCAVATOR"
        },
        "frame": {
          "symbol": "FRAME_MINER"
        },
        "reactor": {
          "symbol": "REACTOR_FISSION_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_MINING_LASER_II"
          },
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "CZPHOENIX-B",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-85739D",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-88952X",
              "type": "MOON",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-85739D",
              "type": "JUMP_GATE",
              "systemSymbol": "X1-ZT91",
              "x": 34,
              "y": 62
            },
            "arrival": "2023-06-22T09:07:59.224Z",
            "departureTime": "2023-06-22T09:06:08.224Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "CZPHOENIX-B",
          "factionSymbol": "COSMIC",
          "role": "HAULER"
        },
        "frame": {
          "symbol": "FRAME_LIGHT_FREIGHTER"
        },
        "reactor": {
          "symbol": "REACTOR_CHEMICAL_I"
        },
        "engine": {
          "symbol": "ENGINE_ION_DRIVE_I"
        },
        "mounts": [
          {
            "symbol": "MOUNT_SURVEYOR_I"
          }
        ]
      },
      {
        "symbol": "SOFAKINGCOOL-18",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-25027X",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-13924A",
              "type": "MOON",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-25027X",
              "type": "ORBITAL_STATION",
              "systemSymbol": "X1-ZT91",
              "x": -48,
              "y": 33
            },
            "arrival": "2023-06-22T09:11:07.606Z",
            "departureTime": "2023-06-22T09:06:07.606Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "SOFAKINGCOOL-18",
          "factionSymbol": "VOID",
          "role": "SATELLITE"
        },
        "frame": {
          "symbol": "FRAME_PROBE"
        },
        "reactor": {
          "symbol": "REACTOR_SOLAR_I"
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I"
        },
        "mounts": []
      },
      {
        "symbol": "SAFPLUSPLUS-4F",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-25027X",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-13924A",
              "type": "MOON",
              "systemSymbol": "X1-ZT91",
              "x": -13,
              "y": 18
            },
            "destination": {
              "symbol": "X1-ZT91-25027X",
              "type": "ORBITAL_STATION",
              "systemSymbol": "X1-ZT91",
              "x": -48,
              "y": 33
            },
            "arrival": "2023-06-22T09:08:47.965Z",
            "departureTime": "2023-06-22T09:06:09.965Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "BURN"
        },
        "registration": {
          "name": "SAFPLUSPLUS-4F",
          "factionSymbol": "GALACTIC",
          "role": "SATELLITE"
        },
        "frame": {
          "symbol": "FRAME_PROBE"
        },
        "reactor": {
          "symbol": "REACTOR_SOLAR_I"
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I"
        },
        "mounts": []
      },
      {
        "symbol": "FLWI-6",
        "nav": {
          "systemSymbol": "X1-ZT91",
          "waypointSymbol": "X1-ZT91-18205B",
          "route": {
            "departure": {
              "symbol": "X1-ZT91-25027X",
              "type": "ORBITAL_STATION",
              "systemSymbol": "X1-ZT91",
              "x": -48,
              "y": 33
            },
            "destination": {
              "symbol": "X1-ZT91-18205B",
              "type": "ASTEROID_FIELD",
              "systemSymbol": "X1-ZT91",
              "x": -12,
              "y": 37
            },
            "arrival": "2023-06-22T09:10:01.067Z",
            "departureTime": "2023-06-22T09:05:16.067Z"
          },
          "status": "IN_TRANSIT",
          "flightMode": "CRUISE"
        },
        "registration": {
          "name": "FLWI-6",
          "factionSymbol": "COSMIC",
          "role": "SATELLITE"
        },
        "frame": {
          "symbol": "FRAME_PROBE"
        },
        "reactor": {
          "symbol": "REACTOR_SOLAR_I"
        },
        "engine": {
          "symbol": "ENGINE_IMPULSE_DRIVE_I"
        },
        "mounts": []
      }
    ]
  }
}

const factionsData = [
  // Cosmic Engineers
  {
    "symbol": "COSMIC",
    "name": "Cosmic Engineers",
    "description": "The Cosmic Engineers are a group of highly advanced scientists and engineers who seek to terraform and colonize new worlds, pushing the boundaries of technology and exploration.",
    "headquarters": "X1-VS75-70500X",
    "traits": [
      {
        "symbol": "INNOVATIVE",
        "name": "Innovative",
        "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "BOLD",
        "name": "Bold",
        "description": "Unafraid to take risks and challenge the status quo. Sometimes willing to do things that others would not dare, and may be able to overcome obstacles and challenges that would be insurmountable for others. Sometimes able to inspire and motivate others to take bold action as well."
      },
      {
        "symbol": "VISIONARY",
        "name": "Visionary",
        "description": "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality."
      },
      {
        "symbol": "CURIOUS",
        "name": "Curious",
        "description": "Possessing a strong desire to learn and explore. Sometimes interested in a wide range of topics and may be willing to take risks in order to satisfy their curiosity. Sometimes able to think outside the box and come up with creative solutions to challenges."
      }
    ],
    "isRecruiting": true
  },
  // Voidfarers
  {
    "symbol": "VOID",
    "name": "Voidfarers",
    "description": "The Voidfarers are a group of nomadic traders and adventurers who travel the galaxy in search of riches and adventure, willing to take risks and explore the unknown.",
    "headquarters": "X1-UU2-19890D",
    "traits": [
      {
        "symbol": "DARING",
        "name": "Daring",
        "description": "Willing to take risks and challenges. Sometimes unafraid to explore new and unknown territories, and may be willing to take bold and decisive action in order to achieve their goals. Sometimes able to overcome challenges that would be insurmountable for others."
      },
      {
        "symbol": "EXPLORATORY",
        "name": "Exploratory",
        "description": "Dedicated to exploration and discovery. Sometimes interested in mapping new territories and uncovering the secrets of the universe. Sometimes able to overcome obstacles and challenges in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "FLEXIBLE",
        "name": "Flexible",
        "description": "Able to adapt to changing circumstances and environments. Sometimes able to quickly switch between different strategies and tactics in order to respond to new challenges or opportunities. Sometimes able to improvise and think on their feet, making them difficult to predict or outmaneuver."
      }
    ],
    "isRecruiting": true
  },
  // Galactic Alliance
  {
    "symbol": "GALACTIC",
    "name": "Galactic Alliance",
    "description": "The Galactic Alliance is a coalition of planets and factions that have banded together for mutual protection and support, working together to defend against external threats and promote cooperation.",
    "headquarters": "X1-GZ3-79230X",
    "traits": [
      {
        "symbol": "COOPERATIVE",
        "name": "Cooperative",
        "description": "Willing to work together with others in order to achieve common goals. Sometimes able to coordinate and cooperate effectively, using their collective strengths and resources to overcome challenges and achieve success. Often prioritize collaboration and teamwork over individual achievement."
      },
      {
        "symbol": "UNITED",
        "name": "United",
        "description": "Strongly united and cohesive, often with a strong sense of shared identity and purpose. Sometimes able to work together effectively and efficiently, and may be difficult to divide or conquer. Sometimes able to overcome challenges that would be insurmountable for a less united group."
      },
      {
        "symbol": "PEACEFUL",
        "name": "Peaceful",
        "description": "Dedicated to maintaining peace and harmony. Sometimes reluctant to engage in conflict, and may prefer to resolve disputes through negotiation and diplomacy. Sometimes able to create a sense of community and belonging, and may be able to build strong and lasting relationships with others."
      },
      {
        "symbol": "STRATEGIC",
        "name": "Strategic",
        "description": "Skilled in the art of strategy and planning. Sometimes able to think ahead and anticipate the actions of others, and may be able to develop effective plans to achieve their goals. Sometimes able to make calculated risks and sacrifices in order to gain a strategic advantage."
      }
    ],
    "isRecruiting": true
  },
  // Quantum Federation
  {
    "symbol": "QUANTUM",
    "name": "Quantum Federation",
    "description": "The Quantum Federation is a group of planets and factions that have joined together to share knowledge and technology, using their collective expertise to advance the science and technology of the galaxy.",
    "headquarters": "X1-NU19-03110X",
    "traits": [
      {
        "symbol": "INTELLIGENT",
        "name": "Intelligent",
        "description": "Possessing a high level of intelligence and analytical ability. Sometimes skilled in a wide range of fields, including science, technology, and engineering. Often have a strong curiosity and a desire to understand the mysteries of the universe."
      },
      {
        "symbol": "RESEARCH_FOCUSED",
        "name": "Research-Focused",
        "description": "Dedicated to advancing knowledge and understanding through research and experimentation. Often have a strong focus on scientific and technological development, and may be willing to take risks and explore new ideas in order to make progress."
      },
      {
        "symbol": "COLLABORATIVE",
        "name": "Collaborative",
        "description": "Known for their ability to work well with others. Sometimes willing to share resources, knowledge, and expertise in order to achieve common goals. Often have a strong sense of community and cooperation, and may prioritize the needs of the group over those of the individual."
      },
      {
        "symbol": "PROGRESSIVE",
        "name": "Progressive",
        "description": "Open to new ideas and change. Sometimes willing to embrace new technologies and ways of thinking, and may prioritize the advancement of knowledge and understanding over tradition and established ways of doing things."
      }
    ],
    "isRecruiting": true
  },
  // Stellar Dominion
  {
    "symbol": "DOMINION",
    "name": "Stellar Dominion",
    "description": "The Stellar Dominion is a powerful, expansionist faction that seeks to conquer and control as many systems as possible, using their advanced technology and military might to dominate their rivals.",
    "headquarters": "X1-PD90-13080E",
    "traits": [
      {
        "symbol": "MILITARISTIC",
        "name": "Militaristic",
        "description": "Focused on building and maintaining a strong military force. Often prioritize military power and readiness over other concerns, and may be quick to engage in conflict or aggression in order to achieve their goals."
      },
      {
        "symbol": "AGGRESSIVE",
        "name": "Aggressive",
        "description": "Quick to engage in conflict or aggression, often without provocation. Sometimes unpredictable and difficult to negotiate with, and may prioritize their own interests over the needs of others."
      },
      {
        "symbol": "IMPERIALISTIC",
        "name": "Imperialistic",
        "description": "Dedicated to expanding their territory and influence. Often seek to conquer or subjugate other factions, and may have a hierarchical and authoritarian structure. Often prioritize the interests of their own faction over the needs of others."
      },
      {
        "symbol": "INDUSTRIOUS",
        "name": "Industrious",
        "description": "Known for their hard work and dedication. Highly productive and efficient, with a focus on maximizing their output. Sometimes able to produce large quantities of goods or resources, but may also be vulnerable to exploitation or overwork."
      }
    ],
    "isRecruiting": true
  },
  // Astro-Salvage Alliance
  {
    "symbol": "ASTRO",
    "name": "Astro-Salvage Alliance",
    "description": "The Astro-Salvage Alliance is a group of scavengers and salvagers who search the galaxy for ancient artifacts and valuable technology, often combing through old ship battlegrounds and derelict space stations.",
    "headquarters": "X1-UY52-65040C",
    "traits": [
      {
        "symbol": "SCAVENGERS",
        "name": "Scavengers",
        "description": "Skilled at finding and salvaging valuable resources and materials from abandoned or derelict ships, space stations, and other structures. Resourceful and able to make the most out of what others have left behind."
      },
      {
        "symbol": "TREASURE_HUNTERS",
        "name": "Treasure Hunters",
        "description": "Always on the lookout for valuable artifacts, ancient relics, and other rare and valuable items. Curious and willing to take risks in order to uncover hidden treasures and secrets of the universe."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "DEXTEROUS",
        "name": "Dexterous",
        "description": "Skilled in the use of their hands and able to perform complex tasks with precision and accuracy. Known for their manual dexterity and ability to manipulate objects with ease, making them valuable in a wide range of tasks and activities."
      }
    ],
    "isRecruiting": true
  },
  // Seventh Space Corsairs
  {
    "symbol": "CORSAIRS",
    "name": "Seventh Space Corsairs",
    "description": "The Seventh Space Corsairs are a feared group of pirates and raiders who operate throughout the galaxy, preying on merchant ships and plundering valuable cargo.",
    "headquarters": "X1-FH73-86300Z",
    "traits": [
      {
        "symbol": "UNPREDICTABLE",
        "name": "Unpredictable",
        "description": "Difficult to predict or anticipate, with a tendency to act in unexpected or chaotic ways."
      },
      {
        "symbol": "BRUTAL",
        "name": "Brutal",
        "description": "Fierce and ruthless, with a willingness to use violence or intimidation to achieve their goals. Often feared or respected by others, but may also be viewed as a threat or enemy by those who oppose their methods."
      },
      {
        "symbol": "FLEETING",
        "name": "Fleeting",
        "description": "Not permanently settled in one place, with a tendency to move frequently or unpredictably. Sometimes difficult to find or track, but may also be able to take advantage of opportunities or evade threats by moving quickly or unexpectedly."
      },
      {
        "symbol": "ADAPTABLE",
        "name": "Adaptable",
        "description": "Quick to adapt to changing circumstances, with the ability to adjust their plans or strategies in response to new information or challenges. Sometimes able to thrive in a wide range of environments or situations, but may also be vulnerable to sudden or unexpected changes."
      }
    ],
    "isRecruiting": true
  },
  // Obsidian Syndicate
  {
    "symbol": "OBSIDIAN",
    "name": "Obsidian Syndicate",
    "description": "The Obsidian Syndicate is a secretive and powerful organization, often involved in illicit activities. They have a vast network of informants and are known for their intelligence capabilities. Not much is known about their actual structure or aims, as they are a highly guarded faction.",
    "headquarters": "X1-XN74-95220D",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "INTELLIGENT",
        "name": "Intelligent",
        "description": "Possessing a high level of intelligence and analytical ability. Sometimes skilled in a wide range of fields, including science, technology, and engineering. Often have a strong curiosity and a desire to understand the mysteries of the universe."
      },
      {
        "symbol": "SMUGGLERS",
        "name": "Smugglers",
        "description": "Skilled at moving goods or people across borders or through restricted areas. Sometimes able to avoid detection or interception, and may be able to find hidden or secret routes. Sometimes able to evade or bypass regulations or controls, and may be willing to engage in illegal or risky activities in order to achieve their goals."
      },
      {
        "symbol": "UNPREDICTABLE",
        "name": "Unpredictable",
        "description": "Difficult to predict or anticipate, with a tendency to act in unexpected or chaotic ways."
      }
    ],
    "isRecruiting": true
  },
  // Aegis Collective
  {
    "symbol": "AEGIS",
    "name": "Aegis Collective",
    "description": "The Aegis Collective is a group of fortified settlements united under a common goal: survival. They focus on defensive strategies and are known to be exceptionally self-sufficient. Despite their somewhat closed-off nature, they are always willing to take in those who need protection.",
    "headquarters": "X1-XV41-93720X",
    "traits": [
      {
        "symbol": "DEFENSIVE",
        "name": "Defensive",
        "description": "Prepared and able to defend themselves against potential threats. Often have strong military forces or defensive capabilities, but may also be vulnerable to surprise attacks or other forms of aggression."
      },
      {
        "symbol": "SELF_SUFFICIENT",
        "name": "Self-Sufficient",
        "description": "Able to sustain themselves without relying on others for support or resources. Sometimes independent and self-reliant, but may also be isolated or vulnerable to external threats."
      },
      {
        "symbol": "PROUD",
        "name": "Proud",
        "description": "Proud of their heritage, culture, or achievements, with a strong sense of identity and self-respect. Sometimes resistant to change or outside influence, and may be willing to defend their beliefs or values against challenges or threats."
      },
      {
        "symbol": "WELCOMING",
        "name": "Welcoming",
        "description": "Open and receptive to outsiders. Sometimes friendly and hospitable, and may be willing to extend a warm welcome to newcomers. Sometimes able to create a sense of community and belonging, and may be able to build strong and lasting relationships with others."
      }
    ],
    "isRecruiting": true
  },
  // United Independent Settlements
  {
    "symbol": "UNITED",
    "name": "United Independent Settlements",
    "description": "The United Independent Settlements is a loose coalition of small settlements and outposts that have joined together for mutual support and protection, working to defend their independence against larger factions and protect their way of life.",
    "headquarters": "X1-PC16-03900D",
    "traits": [
      {
        "symbol": "SELF_SUFFICIENT",
        "name": "Self-Sufficient",
        "description": "Able to sustain themselves without relying on others for support or resources. Sometimes independent and self-reliant, but may also be isolated or vulnerable to external threats."
      },
      {
        "symbol": "DEFENSIVE",
        "name": "Defensive",
        "description": "Prepared and able to defend themselves against potential threats. Often have strong military forces or defensive capabilities, but may also be vulnerable to surprise attacks or other forms of aggression."
      },
      {
        "symbol": "PROUD",
        "name": "Proud",
        "description": "Proud of their heritage, culture, or achievements, with a strong sense of identity and self-respect. Sometimes resistant to change or outside influence, and may be willing to defend their beliefs or values against challenges or threats."
      },
      {
        "symbol": "DIVERSE",
        "name": "Diverse",
        "description": "Comprised of a diverse range of individuals, cultures, or beliefs. Sometimes able to offer a wide range of perspectives and expertise, but may also face challenges in achieving unity or consensus."
      }
    ],
    "isRecruiting": true
  },
  // Solitary Systems Alliance
  {
    "symbol": "SOLITARY",
    "name": "Solitary Systems Alliance",
    "description": "The Solitary Systems Alliance is a loosely-connected group of independent settlements and outposts that have joined together to promote their own interests and protect their autonomy, even if they don't always see eye-to-eye.",
    "headquarters": "X1-RZ25-67170E",
    "traits": [
      {
        "symbol": "INDEPENDENT",
        "name": "Independent",
        "description": "Self-reliant and self-sufficient, with a strong desire for autonomy and independence. Sometimes resistant to external control or interference, but may also be isolated or vulnerable to external threats."
      },
      {
        "symbol": "SELF_INTERESTED",
        "name": "Self-Interested",
        "description": "Focused on their own interests, with a tendency to prioritize their own goals and needs over those of others. Sometimes willing to engage in selfish or unethical behavior in pursuit of their goals, but may also be vulnerable to manipulation or betrayal by others."
      },
      {
        "symbol": "ISOLATED",
        "name": "Isolated",
        "description": "Separated or cut off from others. Sometimes located in a remote or inaccessible location, and may have limited contact with the outside world. Sometimes self-sufficient and self-reliant, and may be able to survive and thrive in challenging or hostile environments. Sometimes able to leverage their isolation and independence to achieve their goals."
      },
      {
        "symbol": "FRAGMENTED",
        "name": "Fragmented",
        "description": "Divided into many smaller groups or factions, with little central organization or coordination. Sometimes difficult to negotiate with or deal with as a single entity, but may also provide opportunities for individual factions to forge their own alliances or partnerships."
      }
    ],
    "isRecruiting": true
  },
  // Cobalt Traders Alliance
  {
    "symbol": "COBALT",
    "name": "Cobalt Traders Alliance",
    "description": "The Cobalt Traders Alliance is a group of independent traders and merchants who have come together to promote free trade and open markets, working to protect their interests against larger factions and corporations.",
    "headquarters": "X1-ZD8-18790A",
    "traits": [
      {
        "symbol": "COMMERCIAL",
        "name": "Commercial",
        "description": "Focused on trade and commerce, with a strong emphasis on economic growth and development. Sometimes willing to engage in a wide range of activities in order to promote trade and facilitate the exchange of goods and resources."
      },
      {
        "symbol": "FREE_MARKETS",
        "name": "Free Markets",
        "description": "Advocates of free market principles, with a strong emphasis on competition and the ability of individuals and businesses to succeed or fail based on their own efforts. Sometimes willing to engage in risky or unregulated activities in pursuit of profit."
      },
      {
        "symbol": "ENTREPRENEURIAL",
        "name": "Entrepreneurial",
        "description": "Innovative and forward-thinking, with a focus on identifying and pursuing new opportunities. Sometimes willing to take risks in order to create new businesses or ventures, but may also be vulnerable to failure or exploitation."
      },
      {
        "symbol": "FLEXIBLE",
        "name": "Flexible",
        "description": "Able to adapt to changing circumstances and environments. Sometimes able to quickly switch between different strategies and tactics in order to respond to new challenges or opportunities. Sometimes able to improvise and think on their feet, making them difficult to predict or outmaneuver."
      }
    ],
    "isRecruiting": true
  },
  // Omega Star Network
  {
    "symbol": "OMEGA",
    "name": "Omega Star Network",
    "description": "The Omega Star Network is a group of exiles and rebels, united by their refusal to submit to the control of larger factions. Living on the fringes of society, they have built a network based on mutual trust and the shared belief that freedom is paramount.",
    "headquarters": "X1-ST51-44280Z",
    "traits": [
      {
        "symbol": "REBELLIOUS",
        "name": "Rebellious",
        "description": "Resistant to authority or control. Sometimes willing to challenge or defy established rules or norms, and may be seen as rebels or outsiders by others. Sometimes able to leverage their independence and defiance to achieve their goals."
      },
      {
        "symbol": "EXILES",
        "name": "Exiles",
        "description": "Forced or compelled to leave their home or native land. Sometimes outcasts or refugees, and may have limited support or resources. Sometimes able to leverage their isolation and independence to achieve their goals."
      },
      {
        "symbol": "FRAGMENTED",
        "name": "Fragmented",
        "description": "Divided into many smaller groups or factions, with little central organization or coordination. Sometimes difficult to negotiate with or deal with as a single entity, but may also provide opportunities for individual factions to forge their own alliances or partnerships."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      }
    ],
    "isRecruiting": true
  },
  // Echo Technological Conclave
  {
    "symbol": "ECHO",
    "name": "Echo Technological Conclave",
    "description": "Echo Technological Conclave is an innovative and forward-thinking faction that thrives on technological advancement and scientific discovery. They have a deep commitment to progress and a drive to push the boundaries of what is possible, making them a force to be reckoned with.",
    "headquarters": "X1-TU96-28190D",
    "traits": [
      {
        "symbol": "INNOVATIVE",
        "name": "Innovative",
        "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "VISIONARY",
        "name": "Visionary",
        "description": "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality."
      },
      {
        "symbol": "RESEARCH_FOCUSED",
        "name": "Research-Focused",
        "description": "Dedicated to advancing knowledge and understanding through research and experimentation. Often have a strong focus on scientific and technological development, and may be willing to take risks and explore new ideas in order to make progress."
      },
      {
        "symbol": "TECHNOLOGICALLY_ADVANCED",
        "name": "Technologically Advanced",
        "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
      }
    ],
    "isRecruiting": true
  },
  // Lords of the Void
  {
    "symbol": "LORDS",
    "name": "Lords of the Void",
    "description": "The Lords of the Void are a mysterious civilization who traverse the galaxy in search of knowledge and power, often using their advanced technology to their advantage.",
    "headquarters": "X1-YG47-82000F",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "TECHNOLOGICALLY_ADVANCED",
        "name": "Technologically Advanced",
        "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "SELF_INTERESTED",
        "name": "Self-Interested",
        "description": "Focused on their own interests, with a tendency to prioritize their own goals and needs over those of others. Sometimes willing to engage in selfish or unethical behavior in pursuit of their goals, but may also be vulnerable to manipulation or betrayal by others."
      }
    ],
    "isRecruiting": true
  },
  // Cult of the Machine
  {
    "symbol": "CULT",
    "name": "Cult of the Machine",
    "description": "The Cult of the Machine is a fanatical group of religious zealots who worship technology and seek to use it to further their own aims, often disregarding the lives of others in pursuit of their own power.",
    "headquarters": "X1-AS12-24090D",
    "traits": [
      {
        "symbol": "TECHNOLOGICALLY_ADVANCED",
        "name": "Technologically Advanced",
        "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
      },
      {
        "symbol": "AGGRESSIVE",
        "name": "Aggressive",
        "description": "Quick to engage in conflict or aggression, often without provocation. Sometimes unpredictable and difficult to negotiate with, and may prioritize their own interests over the needs of others."
      },
      {
        "symbol": "PROUD",
        "name": "Proud",
        "description": "Proud of their heritage, culture, or achievements, with a strong sense of identity and self-respect. Sometimes resistant to change or outside influence, and may be willing to defend their beliefs or values against challenges or threats."
      },
      {
        "symbol": "FRINGE",
        "name": "Fringe",
        "description": "A group of people on the edges or outskirts of mainstream society. Sometimes isolated or marginalized, and may be seen as outsiders or outcasts by others. Sometimes able to leverage their independence and outsider status to achieve their goals."
      }
    ],
    "isRecruiting": true
  },
  // Ancient Guardians
  {
    "symbol": "ANCIENTS",
    "name": "Ancient Guardians",
    "description": "The Ancient Guardians are a mysterious group of protectors who guard ancient artifacts and sites of power, often using their advanced technology and knowledge to protect against external threats.",
    "headquarters": "X1-Y87-53650F",
    "traits": [
      {
        "symbol": "DEFENSIVE",
        "name": "Defensive",
        "description": "Prepared and able to defend themselves against potential threats. Often have strong military forces or defensive capabilities, but may also be vulnerable to surprise attacks or other forms of aggression."
      },
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "SCAVENGERS",
        "name": "Scavengers",
        "description": "Skilled at finding and salvaging valuable resources and materials from abandoned or derelict ships, space stations, and other structures. Resourceful and able to make the most out of what others have left behind."
      },
      {
        "symbol": "CLAN",
        "name": "Clan",
        "description": "A group of people united by a common ancestry or history. Sometimes able to trace their lineage back to a specific ancestor or founding member, and may be bound together by a set of traditions or customs. Sometimes able to rely on the support and loyalty of their fellow clan members, and may be able to leverage their connections and shared history to achieve their goals."
      }
    ],
    "isRecruiting": true
  },
  // Shadow Stalkers
  {
    "symbol": "SHADOW",
    "name": "Shadow Stalkers",
    "description": "The Shadow Stalkers are a clandestine group, seemingly appearing and disappearing at will. Little is known about their actual motivations. Their ability to move without detection has sparked many rumors, some say they are interdimensional travelers.",
    "headquarters": "X1-HF10-91220F",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "UNPREDICTABLE",
        "name": "Unpredictable",
        "description": "Difficult to predict or anticipate, with a tendency to act in unexpected or chaotic ways."
      },
      {
        "symbol": "DEXTEROUS",
        "name": "Dexterous",
        "description": "Skilled in the use of their hands and able to perform complex tasks with precision and accuracy. Known for their manual dexterity and ability to manipulate objects with ease, making them valuable in a wide range of tasks and activities."
      },
      {
        "symbol": "FLEETING",
        "name": "Fleeting",
        "description": "Not permanently settled in one place, with a tendency to move frequently or unpredictably. Sometimes difficult to find or track, but may also be able to take advantage of opportunities or evade threats by moving quickly or unexpectedly."
      }
    ],
    "isRecruiting": true
  },
  // Ethereal Enclave
  {
    "symbol": "ETHEREAL",
    "name": "Ethereal Enclave",
    "description": "The Ethereal Enclave is a faction that is said to have transcended physical existence. They are believed to possess great wisdom and mysterious abilities. The actual nature of the Enclave is subject to much speculation, and sightings of their representatives are rare and often dismissed as legends.",
    "headquarters": "X1-SD96-25460E",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "INNOVATIVE",
        "name": "Innovative",
        "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "FRINGE",
        "name": "Fringe",
        "description": "A group of people on the edges or outskirts of mainstream society. Sometimes isolated or marginalized, and may be seen as outsiders or outcasts by others. Sometimes able to leverage their independence and outsider status to achieve their goals."
      }
    ],
    "isRecruiting": true
  }
]
