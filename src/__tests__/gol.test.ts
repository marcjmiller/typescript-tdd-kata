import { GameOfLife } from '../gameOfLife';

describe("The Game of Life", () => {
  it('should let cells with two or three live neighbors live', () => {
    let board: number [][] =
      [
        [0,1,0,0,0],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
      ];

    let nextGen: number[][] = GameOfLife.calcNextGen(board);

    expect(nextGen[0][1]).toEqual(1);
    expect(nextGen[1][1]).toEqual(1);
    expect(nextGen[1][2]).toEqual(1);
    expect(nextGen[3][1]).toEqual(1);
    expect(nextGen[3][2]).toEqual(1);
    expect(nextGen[3][3]).toEqual(1);

  });

  it('should kill live cells with a number of neighbors other than 2 or 3', () => {
    let board: number [][] =
      [
        [0,1,0,0,1],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [0,0,0,0,0]
      ];

    let nextGen: number[][] = GameOfLife.calcNextGen(board);

    expect(nextGen[2][2]).toEqual(0);
    expect(nextGen[3][1]).toEqual(0);
    expect(nextGen[3][3]).toEqual(0);
    expect(nextGen[0][4]).toEqual(0);

  });

  it('should birth dead cells with exactly 3 live neighbors', () => {
    let board: number [][] =
      [
        [0,1,0,0,1],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [0,0,0,0,0]
      ];

    let nextGen: number[][] = GameOfLife.calcNextGen(board);

    expect(nextGen[0][2]).toEqual(1);
    expect(nextGen[1][3]).toEqual(1);
    expect(nextGen[2][3]).toEqual(1);
    expect(nextGen[3][2]).toEqual(1);

  });

  it('should leave dead cells with other than 3 neighbors dead', () => {
    let board: number [][] =
      [
        [0,1,0,0,1],
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [0,0,0,0,0]
      ];

    let nextGen: number[][] = GameOfLife.calcNextGen(board);

    expect(nextGen[0][0]).toEqual(0);
    expect(nextGen[0][3]).toEqual(0);
    expect(nextGen[1][0]).toEqual(0);
    expect(nextGen[2][0]).toEqual(0);
    expect(nextGen[3][0]).toEqual(0);
    expect(nextGen[4][0]).toEqual(0);
    expect(nextGen[4][1]).toEqual(0);
    expect(nextGen[2][4]).toEqual(0);
    expect(nextGen[3][4]).toEqual(0);
    expect(nextGen[4][4]).toEqual(0);

  });

  it('should print', () => {
    let board: number [][] =
      [
        [0, 1, 0, 0, 1],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0]
      ];

    let output: string = GameOfLife.printBoard(board);

    expect(output).toEqual(
      "01001\n" +
      "01100\n" +
      "00100\n" +
      "01010\n" +
      "00000\n"
    );

    console.log(output);

  });

});
