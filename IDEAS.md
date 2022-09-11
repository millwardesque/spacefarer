# In progress

Use power source to power other components

- Reference from ship component to ship
- Show power assignment grid

# In-game

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
- Heal
- Repair ship
- Make food (with power source and food-generator)
- Search environment
- Return to ship

## Other

Prompt player which item to keep OR inventory?
Should we keep hardcoded component-specific slots on the ship, or have a general array of them?
Day / Night time
Threats
Player can have suit, which quantifies player's metrics like health, _but_ ... <TBD, slower travel / explore speed?>
Ship has divertible power between different subsystems
Actions further from home can be more dangerous
Action: Separate Explore from Return to Ship actions
Engine can allow the ship to travel elsewhere on the planet)
Clamp hunger, fatigue, health to 1.0
Make consequences for full hunger bar
Make consequences for empty health bar
Ship needs hull strength
Fun name generation

# Technical:

eslint
prettier
More type-safe event system
