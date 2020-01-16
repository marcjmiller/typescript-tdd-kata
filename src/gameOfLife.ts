// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.


class GameOfLife {
  calculateNextGen(grid: number[][]) {
    let neighbors;
    let nextGen: number[][] = Array(grid.length);
    let bufferedGrid: number[][];
    let bufferedHeight = grid.length + 2;
    let bufferedWidth = grid[0].length + 2;

    bufferedGrid = Array(bufferedHeight).fill(Array(bufferedWidth).fill(0));
    console.log(bufferedGrid);

    for (let i = 1; i < bufferedHeight - 1; i++) {
      bufferedGrid[i] = [0].concat(grid[i - 1]).concat([0]);
      console.log(grid[i - 1]);
    }
    console.log(bufferedGrid);

    for (let i = 1; i < bufferedHeight - 1; i++) {
      nextGen[i - 1] = Array(grid[0].length);
      for (let j = 1; j < bufferedWidth - 1; j++) {
        neighbors = GameOfLife.countNeighbors(bufferedGrid, i, j);
        if (bufferedGrid[i][j] === 1)
          nextGen[i - 1][j - 1] = (neighbors === 2 || neighbors === 3  ? 1 : 0);
        else
          nextGen[i - 1][j - 1] = (neighbors === 3  ? 1 : 0);

      }
    }
    console.log(nextGen);
    return nextGen;
  }

  private static countNeighbors(grid: number[][], i: number, j: number): number {
    return (
      grid[i - 1][j - 1] +
      grid[i - 1][j] +
      grid[i - 1][j + 1] +
      grid[i][j - 1] +
      grid[i][j + 1] +
      grid[i + 1][j - 1] +
      grid[i + 1][j] +
      grid[i + 1][j + 1]
    );
  }
}

export default GameOfLife;
