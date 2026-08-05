# 0-1 Knapsack Optimization Engine

## Architecture
This repository contains a multi-language implementation of the 0-1 Knapsack problem utilizing space-optimized dynamic programming. The time complexity is O(nW) and space complexity is O(W), where n is the number of items and W is the maximum weight capacity.

## Components
- `index.html`: Unified frontend interface (HTML5, CSS3, ES6+).
- `server.js`: Node.js/Express REST API backend.
- `knapsack.py`: Python implementation.
- `knapsack.ts`: TypeScript implementation.
- `Knapsack.java`: Java implementation.

## Execution
### Frontend
Open `index.html` in a modern browser environment.

### Backend API
```bash
npm install express
node server.js
```
POST request to `/api/knapsack`:
```json
{
  "items": [{"name": "item1", "weight": 10, "value": 60}],
  "maxWeight": 50
}
```

### Python
```bash
python knapsack.py
```

### Java
```bash
javac Knapsack.java
java Knapsack
```
```

Bellman, R. (1957). *Dynamic programming*. Princeton University Press.

Dantzig, G. B. (1957). Discrete-variable extremum problems. *Operations Research*, 5(2), 266-288. https://doi.org/10.1287/opre.5.2.266

Martello, S., & Toth, P. (1990). *Knapsack problems: Algorithms and computer implementations*. John Wiley & Sons.
