
// 1. Any live cell with two or three neighbors survives.
// 2. Any dead cell with three live neighbors becomes a live cell.
// 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

export enum Cell {
  LIVE = 1,
  DEAD = 0
}

export class GameOfLife {

  static calcNextGen(board: Cell[][]): Cell[][] {
    let nextGen: Cell [][];
    let rows: number = board.length;
    let cols: number = board[0].length;

    nextGen = Array(rows).fill(Cell.DEAD);
    for (let i = 0; i < rows; i++)
      nextGen[i] = Array(cols).fill(Cell.DEAD);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {

        let neighbors: number = this.calcNeighbors(i, rows, j, cols, board);

        if(board[i][j] === Cell.LIVE) {
          if(neighbors === 2 || neighbors === 3) {
            nextGen[i][j] = Cell.LIVE;
          }
        } else {
          if (neighbors === 3) {
            nextGen[i][j] = Cell.LIVE;
          }
        }

      }
    }

    return nextGen;
  }

  private static calcNeighbors(i: number, rows: number, j: number, cols: number, board: number[][]): number {
    let neighbors: number = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (
          !(x === 0 && y === 0) &&
          (i + x) >= 0 &&
          (i + x) < rows &&
          (j + y) >= 0 &&
          (j + y) < cols
        ) {
          neighbors += board[i + x][j + y];
        }
      }
    }
    return neighbors;
  }

  public static printBoard(board: Cell[][]): string {
    let printOut = "";
    for (let y = 0; y < board.length; y++){
      for (let x = 0; x < board[y].length; x++) {
        printOut += board[y][x];
      }
      printOut += "\n";
    }
    return printOut;
  }
}
