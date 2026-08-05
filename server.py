def knapsack_01(items: list[dict], max_weight: int) -> int:
    dp = [0] * (max_weight + 1)
    
    for item in items:
        weight = item['weight']
        value = item['value']
        for w in range(max_weight, weight - 1, -1):
            dp[w] = max(dp[w], dp[w - weight] + value)
            
    return dp[max_weight]

if __name__ == "__main__":
    items_data = [
        {"name": "map", "weight": 9, "value": 150},
        {"name": "compass", "weight": 13, "value": 35},
        {"name": "water", "weight": 153, "value": 200},
        {"name": "sandwich", "weight": 50, "value": 160},
        {"name": "glucose", "weight": 15, "value": 60}
    ]
    capacity = 100
    print(f"Maximum value: {knapsack_01(items_data, capacity)}")
