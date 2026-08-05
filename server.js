const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/knapsack', (req, res) => {
  try {
    const { items, maxWeight } = req.body;
    
    if (!Array.isArray(items) || typeof maxWeight !== 'number') {
      return res.status(400).json({ error: 'Invalid payload structure' });
    }

    const dp = new Array(maxWeight + 1).fill(0);

    for (const item of items) {
      if (typeof item.weight !== 'number' || typeof item.value !== 'number') {
        return res.status(400).json({ error: 'Invalid item data types' });
      }
      for (let w = maxWeight; w >= item.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
      }
    }

    res.json({ maxValue: dp[maxWeight] });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Knapsack API server running on port ${PORT}`);
});
