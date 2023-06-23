# Data (`GET`) Requests
## General
- `https://api.spacetraders.io/v2` - Game Status & URL Base
  - A `GET` request here will return:
    - The current version of the game & status of the game server
    - The date of the last server reset (and the date of the next)
    - Current stats of the game (registered Agents, Ships, Systems & Waypoints)
    - Leaderboards for credits earned and charts submitted during the current reset
    - Developer announcements & links to their websites

> Some of the following requests return paginated lists and have an optional query string `?page={n}&limit={n}` with the following keys:
> - `page`: which page to return
> -  `limit`: how many entries per page  
>   
> These will be marked with _* Paginated_

## Personal
- `/my/agent` - Agent Details
- `/my/factions` - Faction Reputations
- `/my/contracts` - All Contracts _* Paginated_
  - `/{contractId}` - Data for specific Contract
- `/my/ships` - All Ships _* Paginated_

## Faction
- `/factions` - All Factions _* Paginated_
  - Note: Default 10 per page
  - `/{factionSymbol}` - Data for specific Faction

## Location
- `/systems` - All Systems _* Paginated_
  - `/{systemSymbol}` - Data for specific System
    - `/waypoints` - All Waypoints in System _* Paginated_
      - `/{waypointSymbol}`  - Data for specific Waypoint
        - `/jump-gate` - Valid Systems in Jump range
        - `/market` - Imports/Exports & Buy/Sell
        - `/shipyard` - Available Ships & Prices

## Ship Details
- `/my/ships/{shipSymbol}` - All Data for Ship
  - All of the following endpoints get the corresponding data for that Ship:
    - `/nav` - Navigational Data (Location, Destination, Speed, etc.)
    - `/cargo` - Cargo Capacity & Inventory
    - `/mounts` - Currently Installed Mounts
    - `/cooldown` - Cooldown Data (Time Till Operational)

# Action (`POST`) Requests - exc. `PATCH` Nav
## General
- `https://api.spacetraders.io/v2/register` - Register New Agent
  - Req Body Requires:
    - `faction`: the Faction to register the character with
    - `symbol`: the callsign to register the Agent under
    - (optional) `email`: email to register for the account system
- `/my/ships` - Purchase Ship
  - Must be docked at a Shipyard Waypoint
  - Must have enough units for purchase
  - Req Body Requires:
    - `shipType`: the type of Ship to buy
    - `waypointSymbol`: the docked Shipyard

## Contracts - Root `/my/contracts/{contractId}`
- `/accept` - Accept Contract
  - Must be your Contract
  - Contract has not been accepted yet
  - Deadline cannot have been passed
- `/deliver` - Deliver Cargo
  - Must have enough units of the requested Trade Good
  - Req Body Requires:
    - `shipSymbol`: the Ship delivering
    - `tradeSymbol`: the Trade Good to deliver
    - `units`: amount of the Trade Good to deliver
- `/fulfill` - Fulfill Contract
  - All delivery terms must be complete

## Ships - Root `/my/ships/{shipSymbol}`
### Transactions
- `/purchase` - Purchase Goods
  - Must be docked at a Marketplace Waypoint
  - Must have enough units for purchase
  - Req Body Requires:
    - `symbol`: the Trade Good to buy
    - `units`: amount of the Trade Good to buy
- `/sell` - Sell Goods
  - Must be docked at a Marketplace Waypoint
  - Req Body Requires:
    - `symbol`: the Trade Good to sell
    - `units`: amount of the Trade Good to sell
- `/refuel` - Refuel Ship
  - Note: Each fuel bought refills 100 units of Ship fuel
  - Must be docked at a Marketplace Waypoint
  - Marketplace must be selling fuel
  - Must have enough units for purchase
  - Req Body Requires:
    - `units`: the amount of fuel to fill  
    Note: if left blank/not given, the ship will fill as much as possible

### Navigational
- `/dock` - Dock Current Waypoint
  - Must be in orbit around a Waypoint
- `/orbit` - Orbit Current Waypoint
  - Must be docked at a Waypoint
- 🟠 PATCH `/nav` - Patch Ship Nav
  - Note: Only supports configuration of flight mode
  - Req Body Requires:
    - `flightMode`: the new flight mode to overwrite to the nav
- `/navigate` - Navigate Ship in System
  - Destination must be in same system
  - Req Body Requires:
    - `waypointSymbol`: the Waypoint to travel to
- `/warp` - Warp to new System
  - Ship must have a a Warp Drive module
  - Req Body Requires:
    - `waypointSymbol`: the Waypoint to travel to in the new System
- `/jump` - Jump to new System
  - Must be in orbit of a Jump Gate
  - Ship must have a a Jump Drive module
  - Must have a unit of antimatter in cargo
  - 🔴 Note: Triggers cooldown if successful.
  - Req Body Requires:
    - `systemSymbol`: the System to travel to

### Cargo
- `/transfer` - Transfer Cargo
  - Must be at same Waypoint as receiving Ship
  - Must be in same state (docked/orbiting) as other Ship
  - Req Body Requires:
    - `tradeSymbol`: the Trade Good to transfer
    - `units`: amount of the Trade Good to transfer
    - `shipSymbol`: the ship to transfer to
- `/jettison` - Jettison Cargo
  - Req Body Requires:
    - `tradeSymbol`: the Trade Good to jettison
    - `units`: amount of the Trade Good to jettison

### Ship Actions
- `/chart` - Chart Current Waypoint
  - Must be at an uncharted Waypoint
- `/survey`- Create Survey
  - Must have Surveyor mount installed 
  - 🔴 Note: Triggers cooldown if successful.
- `/extract` - Extract Resources
  - Must have appropriate extractor installed:
    - Mining Laser for ore-based goods
    - Gas Siphon for gas-based goods
  - 🔴 Note: Triggers cooldown if successful.
  - Optional Req Body:
    - `survey`: an Object returned from a Ship's Surveyor containing information on yields for a waypoint. use this to guarantee a high yield for one of the deposits listed.
      - `signature`: a unique signature created for the survey location that is verified upon use
      - `symbol`: the Waypoint this survery was created for
      - `deposits`: an Array of prevalent deposits at this location
        - `symbol`: the deposit
      - `expiration`: an expiry date after which this survey will no longer be valid for extraction
      - `size`: the size of the deposit, indicating how much can be extracted before the deposit is exhausted
- `/refine` - Refine Resources
  - Ship must have a Refinery module
  - Note: refining 30 basic goods will create 10 processed goods
  - 🔴 Note: Triggers cooldown if successful.
  - Req Body Requires:
    - `produce`: the processed good to produce
- `/scan/systems` - Scan Systems
  - Must have Sensor Array mount installed 
  - Ship must be in orbit
  - 🔴 Note: Triggers cooldown if successful.
- `/scan/waypoints` - Scan Waypoints
  - Must have Sensor Array mount installed
  - Ship must be in orbit
  - 🔴 Note: Triggers cooldown if successful.
- `/scan/ships` - Scan Ships
  - Must have Sensor Array mount installed
  - Ship must be in orbit
  - 🔴 Note: Triggers cooldown if successful.
- `/negotiate/contract` - Negotiate New Contract
  - Must be executed through a Ship at a Faction HQ
  - Note: Currently, Agents cannot have more than one Contract at a time
 
### Mounts
General Requirements:  
Must be docked at a Shipyard Waypoint  
Must have enough units for Inst/Rmvl fee
- `/mounts/install` - Install Mount
  - Must have mount to install in cargo hold
  - Req Body Requires:
    - `symbol`: the mount to install
- `/mounts/remove` - Remove Mount
  - Must have mount to remove installed
  - Req Body Requires:
    - `symbol`: the mount to remove
