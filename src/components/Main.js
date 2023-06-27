import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import Entry from './Pages/Entry';

const gameData = {
  exampleData: {
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
    ],
    waypoint: {
      "systemSymbol": "X1-TX94",
      "symbol": "X1-TX94-77250C",
      "type": "PLANET",
      "x": 8,
      "y": 23,
      "orbitals": [
        {
          "symbol": "X1-TX94-85842E"
        },
        {
          "symbol": "X1-TX94-26213E"
        },
        {
          "symbol": "X1-TX94-01934B"
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
        "submittedBy": "ECHO",
        "submittedOn": "2023-06-24T05:23:53.404Z"
      },
      "faction": {
        "symbol": "ECHO"
      }
    },
    marketplace: {
      "symbol": "X1-TX94-77250C",
      "imports": [
        {
          "symbol": "ICE_WATER",
          "name": "Fresh Water",
          "description": "High-quality fresh water, essential for life support and hydroponic agriculture."
        },
        {
          "symbol": "FOOD",
          "name": "Galactic Cuisine",
          "description": "A diverse range of foods from different planets, including fresh produce, meats, and prepared meals."
        },
        {
          "symbol": "MACHINERY",
          "name": "Machinery",
          "description": "A variety of mechanical devices and equipment, used for industrial, construction, and other practical purposes."
        },
        {
          "symbol": "ELECTRONICS",
          "name": "Electronic Components",
          "description": "Advanced electronic components used in the construction of advanced technologies."
        },
        {
          "symbol": "PLASTICS",
          "name": "Plastics",
          "description": "A wide range of plastic materials used in various applications, including packaging, construction, and manufacturing."
        },
        {
          "symbol": "FUEL",
          "name": "Fuel",
          "description": "High-energy fuel used in spacecraft propulsion systems to enable long-distance space travel."
        },
        {
          "symbol": "MEDICINE",
          "name": "Medicine",
          "description": "Medical products, including drugs, treatments, and medical equipment."
        },
        {
          "symbol": "DRUGS",
          "name": "Pharmaceuticals",
          "description": "A wide range of drugs and other medical treatments used to treat various conditions and illnesses."
        },
        {
          "symbol": "CLOTHING",
          "name": "Clothing",
          "description": "A wide range of clothing and fashion items, including garments, accessories, and textiles."
        },
        {
          "symbol": "EQUIPMENT",
          "name": "Equipment",
          "description": "Tools and equipment used in various industries and applications."
        },
        {
          "symbol": "FABRICS",
          "name": "Synthetic Fabrics",
          "description": "High-tech fabrics used in the production of clothing and other products for everyday use."
        },
        {
          "symbol": "LAB_INSTRUMENTS",
          "name": "Lab Instruments",
          "description": "A wide range of scientific instruments and equipment used in research and development."
        }
      ],
      "exports": [
        {
          "symbol": "BOTANICAL_SPECIMENS",
          "name": "Botanical Specimens",
          "description": "Samples of plants or other vegetation collected from various locations, often used for research or study."
        }
      ],
      "exchange": [],
      "transactions": [],
      "tradeGoods": [
        {
          "symbol": "ICE_WATER",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 32,
          "sellPrice": 16
        },
        {
          "symbol": "FOOD",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 506,
          "sellPrice": 251
        },
        {
          "symbol": "MACHINERY",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 1170,
          "sellPrice": 576
        },
        {
          "symbol": "ELECTRONICS",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 1082,
          "sellPrice": 534
        },
        {
          "symbol": "PLASTICS",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 550,
          "sellPrice": 272
        },
        {
          "symbol": "FUEL",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 252,
          "sellPrice": 125
        },
        {
          "symbol": "MEDICINE",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 1206,
          "sellPrice": 594
        },
        {
          "symbol": "DRUGS",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 736,
          "sellPrice": 362
        },
        {
          "symbol": "CLOTHING",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 606,
          "sellPrice": 298
        },
        {
          "symbol": "EQUIPMENT",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 1128,
          "sellPrice": 556
        },
        {
          "symbol": "FABRICS",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 162,
          "sellPrice": 79
        },
        {
          "symbol": "BOTANICAL_SPECIMENS",
          "tradeVolume": 100,
          "supply": "MODERATE",
          "purchasePrice": 669,
          "sellPrice": 331
        },
        {
          "symbol": "LAB_INSTRUMENTS",
          "tradeVolume": 1000,
          "supply": "MODERATE",
          "purchasePrice": 1418,
          "sellPrice": 697
        }
      ]
    }
  },
  factions: [
    {
      "symbol": "COSMIC",
      "name": "Cosmic Engineers",
      "description": "The Cosmic Engineers are a group of highly advanced scientists and engineers who seek to terraform and colonize new worlds, pushing the boundaries of technology and exploration.",
      "headquarters": "X1-YU85-99640B",
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
    {
      "symbol": "VOID",
      "name": "Voidfarers",
      "description": "The Voidfarers are a group of nomadic traders and adventurers who travel the galaxy in search of riches and adventure, willing to take risks and explore the unknown.",
      "headquarters": "X1-FY6-28680D",
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
    {
      "symbol": "GALACTIC",
      "name": "Galactic Alliance",
      "description": "The Galactic Alliance is a coalition of planets and factions that have banded together for mutual protection and support, working together to defend against external threats and promote cooperation.",
      "headquarters": "X1-VR14-43680Z",
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
    {
      "symbol": "QUANTUM",
      "name": "Quantum Federation",
      "description": "The Quantum Federation is a group of planets and factions that have joined together to share knowledge and technology, using their collective expertise to advance the science and technology of the galaxy.",
      "headquarters": "X1-ZS57-64950Z",
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
    {
      "symbol": "DOMINION",
      "name": "Stellar Dominion",
      "description": "The Stellar Dominion is a powerful, expansionist faction that seeks to conquer and control as many systems as possible, using their advanced technology and military might to dominate their rivals.",
      "headquarters": "X1-UR47-29080C",
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
    {
      "symbol": "ASTRO",
      "name": "Astro-Salvage Alliance",
      "description": "The Astro-Salvage Alliance is a group of scavengers and salvagers who search the galaxy for ancient artifacts and valuable technology, often combing through old ship battlegrounds and derelict space stations.",
      "headquarters": "X1-PC86-64140E",
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
    {
      "symbol": "CORSAIRS",
      "name": "Seventh Space Corsairs",
      "description": "The Seventh Space Corsairs are a feared group of pirates and raiders who operate throughout the galaxy, preying on merchant ships and plundering valuable cargo.",
      "headquarters": "X1-RU52-61270D",
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
    {
      "symbol": "OBSIDIAN",
      "name": "Obsidian Syndicate",
      "description": "The Obsidian Syndicate is a secretive and powerful organization, often involved in illicit activities. They have a vast network of informants and are known for their intelligence capabilities. Not much is known about their actual structure or aims, as they are a highly guarded faction.",
      "headquarters": "X1-FB23-83310D",
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
    {
      "symbol": "AEGIS",
      "name": "Aegis Collective",
      "description": "The Aegis Collective is a group of fortified settlements united under a common goal: survival. They focus on defensive strategies and are known to be exceptionally self-sufficient. Despite their somewhat closed-off nature, they are always willing to take in those who need protection.",
      "headquarters": "X1-MQ58-33390B",
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
    {
      "symbol": "UNITED",
      "name": "United Independent Settlements",
      "description": "The United Independent Settlements is a loose coalition of small settlements and outposts that have joined together for mutual support and protection, working to defend their independence against larger factions and protect their way of life.",
      "headquarters": "X1-D13-13370B",
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
    {
      "symbol": "SOLITARY",
      "name": "Solitary Systems Alliance",
      "description": "The Solitary Systems Alliance is a loosely-connected group of independent settlements and outposts that have joined together to promote their own interests and protect their autonomy, even if they don't always see eye-to-eye.",
      "headquarters": "X1-AK92-10370Z",
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
    {
      "symbol": "COBALT",
      "name": "Cobalt Traders Alliance",
      "description": "The Cobalt Traders Alliance is a group of independent traders and merchants who have come together to promote free trade and open markets, working to protect their interests against larger factions and corporations.",
      "headquarters": "X1-UA5-73930E",
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
    {
      "symbol": "OMEGA",
      "name": "Omega Star Network",
      "description": "The Omega Star Network is a group of exiles and rebels, united by their refusal to submit to the control of larger factions. Living on the fringes of society, they have built a network based on mutual trust and the shared belief that freedom is paramount.",
      "headquarters": "X1-ST72-07260B",
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
    {
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
    {
      "symbol": "LORDS",
      "name": "Lords of the Void",
      "description": "The Lords of the Void are a mysterious civilization who traverse the galaxy in search of knowledge and power, often using their advanced technology to their advantage.",
      "headquarters": "X1-DG77-38610B",
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
    {
      "symbol": "CULT",
      "name": "Cult of the Machine",
      "description": "The Cult of the Machine is a fanatical group of religious zealots who worship technology and seek to use it to further their own aims, often disregarding the lives of others in pursuit of their own power.",
      "headquarters": "X1-FJ18-54920E",
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
    {
      "symbol": "ANCIENTS",
      "name": "Ancient Guardians",
      "description": "The Ancient Guardians are a mysterious group of protectors who guard ancient artifacts and sites of power, often using their advanced technology and knowledge to protect against external threats.",
      "headquarters": "X1-FK9-63960Z",
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
    {
      "symbol": "SHADOW",
      "name": "Shadow Stalkers",
      "description": "The Shadow Stalkers are a clandestine group, seemingly appearing and disappearing at will. Little is known about their actual motivations. Their ability to move without detection has sparked many rumors, some say they are interdimensional travelers.",
      "headquarters": "X1-RG48-59920X",
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
    {
      "symbol": "ETHEREAL",
      "name": "Ethereal Enclave",
      "description": "The Ethereal Enclave is a faction that is said to have transcended physical existence. They are believed to possess great wisdom and mysterious abilities. The actual nature of the Enclave is subject to much speculation, and sightings of their representatives are rare and often dismissed as legends.",
      "headquarters": "X1-DK42-60470D",
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
};

export const GameContext = createContext();
export const BearerContext = createContext();
export default function Main() {
  const [bearerAuth, setBearerAuth] = useState('')
  return (
    <GameContext.Provider value={gameData}>
      <BearerContext.Provider value={bearerAuth}>
        {!bearerAuth ? <Entry bearerAuth={bearerAuth} setBearerAuth={setBearerAuth} /> : <Outlet />}
      </BearerContext.Provider>
    </GameContext.Provider>
  )
};
