import Main from './components/Pages/Main';
import Contract from './components/Pages/Contract';
import Ship from './components/Pages/Ship';
import { Routes, Route } from 'react-router-dom';
import './App.scss'

const exampleData = {
  agent: {
    "accountId": "cljc6on110vv8s60cuvumf0x2",
    "symbol": "SHR1MPY",
    "headquarters": "X1-TX94-77250C",
    "credits": 150000,
    "startingFaction": "ECHO"
  },
  contracts: [
    {
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
    }
  ],
  fleet: [
    {
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
      "registration": {
        "name": "SHR1MPY-1",
        "factionSymbol": "ECHO",
        "role": "COMMAND"
      }
    },
    {
      "symbol": "SHR1MPY-2",
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
      "registration": {
        "name": "SHR1MPY-1",
        "factionSymbol": "ECHO",
        "role": "COMMAND"
      }
    },
    {
      "symbol": "SHR1MPY-3",
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
      "registration": {
        "name": "SHR1MPY-1",
        "factionSymbol": "ECHO",
        "role": "COMMAND"
      }
    },
    {
      "symbol": "SHR1MPY-4",
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
      "registration": {
        "name": "SHR1MPY-1",
        "factionSymbol": "ECHO",
        "role": "COMMAND"
      }
    },
    {
      "symbol": "SHR1MPY-5",
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
      "registration": {
        "name": "SHR1MPY-1",
        "factionSymbol": "ECHO",
        "role": "COMMAND"
      }
    }
  ],
  ship: {
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
      "inventory": [
        {
          "symbol": "PRECIOUS_STONES",
          "name": "string",
          "units": 0
        }
      ]
    }
  },
  systemScan: [
    {
      "symbol": "X1-YG78",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 9457,
      "y": 30573,
      "distance": 311
    },
    {
      "symbol": "X1-QA43",
      "sectorSymbol": "X1",
      "type": "NEUTRON_STAR",
      "x": 10056,
      "y": 30132,
      "distance": 529
    },
    {
      "symbol": "X1-SM5",
      "sectorSymbol": "X1",
      "type": "ORANGE_STAR",
      "x": 10497,
      "y": 30095,
      "distance": 967
    },
    {
      "symbol": "X1-SH27",
      "sectorSymbol": "X1",
      "type": "BLUE_STAR",
      "x": 9026,
      "y": 31270,
      "distance": 1123
    },
    {
      "symbol": "X1-YA5",
      "sectorSymbol": "X1",
      "type": "YOUNG_STAR",
      "x": 8572,
      "y": 29598,
      "distance": 1187
    },
    {
      "symbol": "X1-PN2",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 9555,
      "y": 31504,
      "distance": 1229
    },
    {
      "symbol": "X1-FZ91",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 9077,
      "y": 29088,
      "distance": 1277
    },
    {
      "symbol": "X1-KX80",
      "sectorSymbol": "X1",
      "type": "ORANGE_STAR",
      "x": 10751,
      "y": 30889,
      "distance": 1352
    },
    {
      "symbol": "X1-UV71",
      "sectorSymbol": "X1",
      "type": "BLUE_STAR",
      "x": 8533,
      "y": 29368,
      "distance": 1360
    },
    {
      "symbol": "X1-HD81",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 8490,
      "y": 31172,
      "distance": 1386
    },
    {
      "symbol": "X1-AA46",
      "sectorSymbol": "X1",
      "type": "NEUTRON_STAR",
      "x": 10549,
      "y": 29236,
      "distance": 1443
    },
    {
      "symbol": "X1-ZH83",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 8882,
      "y": 31590,
      "distance": 1474
    },
    {
      "symbol": "X1-CK20",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 10833,
      "y": 31061,
      "distance": 1507
    },
    {
      "symbol": "X1-GX5",
      "sectorSymbol": "X1",
      "type": "YOUNG_STAR",
      "x": 8167,
      "y": 31127,
      "distance": 1622
    },
    {
      "symbol": "X1-XP25",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 10187,
      "y": 28749,
      "distance": 1655
    },
    {
      "symbol": "X1-GH21",
      "sectorSymbol": "X1",
      "type": "YOUNG_STAR",
      "x": 7947,
      "y": 30980,
      "distance": 1748
    },
    {
      "symbol": "X1-MD35",
      "sectorSymbol": "X1",
      "type": "BLUE_STAR",
      "x": 8313,
      "y": 29018,
      "distance": 1761
    },
    {
      "symbol": "X1-RX65",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 8693,
      "y": 28666,
      "distance": 1822
    },
    {
      "symbol": "X1-YZ55",
      "sectorSymbol": "X1",
      "type": "RED_STAR",
      "x": 11296,
      "y": 30858,
      "distance": 1844
    },
    {
      "symbol": "X1-VK87",
      "sectorSymbol": "X1",
      "type": "BLUE_STAR",
      "x": 8461,
      "y": 31891,
      "distance": 1947
    },
    {
      "symbol": "X1-HK35",
      "sectorSymbol": "X1",
      "type": "NEUTRON_STAR",
      "x": 7587,
      "y": 29847,
      "distance": 2006
    },
    {
      "symbol": "X1-PX50",
      "sectorSymbol": "X1",
      "type": "ORANGE_STAR",
      "x": 8474,
      "y": 31996,
      "distance": 2028
    },
    {
      "symbol": "X1-S59",
      "sectorSymbol": "X1",
      "type": "BLUE_STAR",
      "x": 8714,
      "y": 28396,
      "distance": 2055
    },
    {
      "symbol": "X1-YB89",
      "sectorSymbol": "X1",
      "type": "BLUE_STAR",
      "x": 10225,
      "y": 32250,
      "distance": 2088
    },
    {
      "symbol": "X1-HH68",
      "sectorSymbol": "X1",
      "type": "BLACK_HOLE",
      "x": 7556,
      "y": 29368,
      "distance": 2188
    },
    {
      "symbol": "X1-XD16",
      "sectorSymbol": "X1",
      "type": "YOUNG_STAR",
      "x": 7955,
      "y": 28747,
      "distance": 2207
    },
    {
      "symbol": "X1-YN36",
      "sectorSymbol": "X1",
      "type": "ORANGE_STAR",
      "x": 7698,
      "y": 28853,
      "distance": 2333
    }
  ],
  system: {
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
  },
  waypoints: [
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
  ]
}

const routes = [
  { path: '/', element: <Main exampleData={exampleData} /> },
  { path: '/contract', element: <Contract exampleData={exampleData} /> },
  { path: '/ship', element: <Ship exampleData={exampleData} /> }
]

export default function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}
