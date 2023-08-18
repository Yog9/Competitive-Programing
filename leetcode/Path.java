class Path {
    public static int Paths(int m, int n) {

        int grid[][] = new int[m][n];
        return backtrack(grid, m - 1, n - 1, 0, 0);
    }

    public static int backtrack(int grid[][], int m, int n, int i, int j) {
        System.out.print(m + " " + n);
        if (i == m && j == n) {
            return 1;
        } else if (i > m || j > n) {
            return 0;
        } else if (grid[i][j] != 0) {
            return grid[i][j];
        } else
            grid[i][j] = backtrack(grid, m, n, i, j + 1) + backtrack(grid, m, n, i + 1, j);
        return grid[m][n];
    }

    public static void main(String args[]) {
        System.out.println(Paths(3, 3));
    }
}
