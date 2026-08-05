public class Knapsack {
    
    public static int solve(int[] weights, int[] values, int maxWeight) {
        int[] dp = new int[maxWeight + 1];
        
        for (int i = 0; i < weights.length; i++) {
            for (int w = maxWeight; w >= weights[i]; w--) {
                dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
            }
        }
        
        return dp[maxWeight];
    }

    public static void main(String[] args) {
        int[] weights = {9, 13, 153, 50, 15};
        int[] values = {150, 35, 200, 160, 60};
        int maxWeight = 100;
        
        System.out.println("Maximum value: " + solve(weights, values, maxWeight));
    }
}
