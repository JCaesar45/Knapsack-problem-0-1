function knapsack(items, maxweight) {
  const dp = new Array(maxweight + 1).fill(0);

  for (let i = 0; i < items.length; i++) {
    const weight = items[i].weight;
    const value = items[i].value;

    for (let w = maxweight; w >= weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - weight] + value);
    }
  }

  return dp[maxweight];
}
