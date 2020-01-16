import GameOfLife from '../gameOfLife';

describe("Game of Life", () => {

  it('should kill a live cell with fewer than two live neighbors, excluding edge/corner cases', () => {
    let Gol = new GameOfLife();

    let grid: number[][] =
      [[0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0]];
    let nextGen: number[][] = Gol.calculateNextGen(grid);
    expect(nextGen[1][1]).toEqual(1);
    expect(nextGen[1][2]).toEqual(1);
    expect(nextGen[2][1]).toEqual(1);
    expect(nextGen[3][3]).toEqual(0);

    grid =
      [[0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]];
    nextGen = Gol.calculateNextGen(grid);
    expect(nextGen[1][2]).toEqual(0);
    expect(nextGen[2][1]).toEqual(1);
    expect(nextGen[3][2]).toEqual(1);
    expect(nextGen[3][3]).toEqual(0);
  });

  it('should kill a live cell with more than three live neighbors excluding edge/corner cases', () => {
    let Gol = new GameOfLife();
    let grid: number[][] =
      [[0, 0, 0, 0, 0],
       [0, 1, 1, 0, 0],
       [0, 1, 1, 1, 0],
       [0, 0, 0, 1, 0],
       [0, 0, 0, 0, 0]];
    let nextGen: number[][] = Gol.calculateNextGen(grid);
    expect(nextGen[1][2]).toEqual(0);
    expect(nextGen[2][2]).toEqual(0);
  });

  it('should make a dead cell live if it has exactly 3 live neighbors', () => {
    let Gol = new GameOfLife();
    let grid: number[][] =
      [[0, 0, 0, 0, 0],
       [0, 1, 0, 1, 0],
       [0, 0, 1, 0, 0],
       [0, 1, 0, 1, 0],
       [0, 0, 0, 0, 0]];
    let nextGen: number[][] = Gol.calculateNextGen(grid);
    expect(nextGen[1][2]).toEqual(1);
    expect(nextGen[2][1]).toEqual(1);
    expect(nextGen[2][3]).toEqual(1);
    expect(nextGen[3][2]).toEqual(1);

    grid =
      [[0, 0, 0, 0, 0],
       [0, 1, 0, 0, 0],
       [0, 0, 0, 1, 0],
       [0, 0, 0, 1, 0],
       [0, 0, 0, 0, 0]];

    nextGen = Gol.calculateNextGen(grid);
    expect(nextGen[2][2]).toEqual(1);

  });

  it('should handle edge and corner cases', () => {
    let Gol = new GameOfLife();
    let grid: number[][] =
      [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]];
    let nextGen: number[][] = Gol.calculateNextGen(grid);
    expect(nextGen[0][0]).toEqual(0);
    expect(nextGen[1][4]).toEqual(0);
    expect(nextGen[3][0]).toEqual(0);
    expect(nextGen[4][4]).toEqual(0);

    grid =
      [[1, 1, 0, 1, 0],
       [1, 0, 0, 0, 0],
       [0, 0, 0, 0, 0],
       [1, 1, 0, 1, 0],
       [0, 1, 0, 0, 1]];
    nextGen = Gol.calculateNextGen(grid);
    expect(nextGen[0][0]).toEqual(1);
    expect(nextGen[0][1]).toEqual(1);
    expect(nextGen[1][0]).toEqual(1);

    expect(nextGen[0][3]).toEqual(0);

    expect(nextGen[3][0]).toEqual(1);
    expect(nextGen[4][0]).toEqual(1);
    expect(nextGen[3][1]).toEqual(1);
    expect(nextGen[4][1]).toEqual(1);

    expect(nextGen[3][3]).toEqual(0);
    expect(nextGen[4][4]).toEqual(0);
  });


});
