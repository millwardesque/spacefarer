# In progress

Danger loop

- Alien can: Attack the player if hungry, ignore the player if not, disengage after N turns
- Bug: Time event is fired and handled with previous clock's values. Defer event until states have fully changed
- Alien picture

# In-game Stuff

## Powerable components

- Ship fundamentals (doors, lights): 1 power
- Shield: 1+ depending on shield strength
- Med bay: 1+ depending on speed of healing, healing ability(?)
- Food: 1+ depending on speed of food prep, food quality(?)
- Hyperdrive: Take off

## Actions

- Fetch additional actions from ship components
- Get into ship
- Repair component
- Install component
- Uninstall component
- Swap component
- Heal
- Repair ship
- Make food (with power source and food-generator)
- Search environment
- Return to ship

## Pilot

- Fatigue decreases chance of succeeding at an action
- Can have suit, which quantifies player's metrics like health, _but_ ... <TBD, slower travel / explore speed?>

## Other

Power assignment grid
Map with user-selectable destinations
Prompt player which item to keep OR inventory?
Should we keep hardcoded component-specific slots on the ship, or have a general array of them?
Day / Night time
Threats
Ship has divertible power between different subsystems
Actions further from home can be more dangerous
Action: Separate Explore from Return to Ship actions
Engine can allow the ship to travel elsewhere on the planet)
Ship: Add hull strength
Fun name generation
Layo asked to set pilot name on start

# Technical:

Swap BrowserRouter for MemoryRouter
eslint
prettier
More type-safe event system
