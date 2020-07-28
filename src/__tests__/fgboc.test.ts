import fgboc from '../fgboc';

// The rules for this puzzle are:
//
// You must get the fox, goose, and bag of corn safely across the other side of the river
// You can only carry 1 item on the boat across with you.
// The fox cannot be left alone with the goose, (or it will be eaten).
// The goose cannot be left alone with the corn, (or it will be eaten).
// The data structure to represent this puzzle is a vector of vectors.
//
// The starting position is you, the fox, the goose, and corn on one side of the river.
// The boat is empty. The other river bank is empty.

describe('fgboc kata', () => {
  let fgbc: fgboc = new fgboc();

  it('should initialize properly', () => {
    expect(fgbc.northBank).toEqual(['corn', 'fox', 'goose', 'you']);
    expect(fgbc.southBank).toEqual([]);
  });

  it('should get a list of valid moves', () => {
    let validMoves = fgbc.getValidMoves();

    expect(validMoves).toEqual(['goose']);
  });

  it('should be able to make the first valid move', () => {
    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual(['corn', 'fox']);
    expect(fgbc.southBank).toEqual(['goose', 'you']);
  });

  it('should get the next valid move after the first move is completed', () => {
    let validMoves = fgbc.getValidMoves();

    expect(validMoves).toEqual(['you']);
  });

  it('should make the next valid move', () => {
    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual(['corn', 'fox', 'you']);
    expect(fgbc.southBank).toEqual(['goose']);
  });

  it('should get the next valid move and make it', () => {
    let validMoves = fgbc.getValidMoves();

    expect(validMoves).toEqual(['corn', 'fox']);

    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual(['fox']);
    expect(fgbc.southBank).toEqual(['corn', 'goose', 'you']);
  });

  it('should get the next valid move and make it again until complete', () => {
    let validMoves = fgbc.getValidMoves();

    expect(validMoves).toEqual(['goose']);

    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual(['fox', 'goose', 'you']);
    expect(fgbc.southBank).toEqual(['corn']);

    validMoves = fgbc.getValidMoves();

    expect(validMoves).toEqual(['fox']);

    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual(['goose']);
    expect(fgbc.southBank).toEqual(['corn', 'fox', 'you']);

    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual(['goose', 'you']);
    expect(fgbc.southBank).toEqual(['corn', 'fox']);

    fgbc.move(fgbc.getValidMoves()[0]);

    expect(fgbc.northBank).toEqual([]);
    expect(fgbc.southBank).toEqual(['corn', 'fox', 'goose', 'you']);
  });

  it('should solve the riddle in a single call, letting you know the moves as it makes them', () => {
    fgbc = new fgboc();

    let solution = fgbc.solve();

    expect(solution).toEqual(['goose', 'you', 'corn', 'goose', 'fox', 'you', 'goose']);
  });
});
