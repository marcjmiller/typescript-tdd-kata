import FoxGooseBagOfCorn from "../FoxGooseBagOfCorn";

let fgbc = new FoxGooseBagOfCorn();

describe('Lets solve the Fox, Goose, BagOfCorn riddle', () => {
  it('should start all 4 items on the westBank list', () => {
    console.log(fgbc.westBank);
    expect(fgbc.westBank.length).toEqual(4);
    expect(fgbc.westBank).toStrictEqual(['corn', 'fox', 'goose', 'you']);
  });


  it('should move us across to the opposite bank with the goose first', () => {
    let result: boolean = fgbc.moveAcross('goose');
    expect(fgbc.westBank.length).toEqual(2);
    expect(fgbc.westBank).toStrictEqual(['corn', 'fox']);
    expect(fgbc.eastBank.length).toEqual(2);
    expect(fgbc.eastBank).toStrictEqual(['goose', 'you']);
    expect(result).toBeTruthy();
  });

  it('should move myself back across', function () {
    let result: boolean = fgbc.moveAcross();
    expect(fgbc.westBank.length).toEqual(3);
    expect(fgbc.westBank).toStrictEqual(['corn', 'fox', 'you']);
    expect(fgbc.eastBank.length).toEqual(1);
    expect(fgbc.eastBank).toStrictEqual(['goose']);
    expect(result).toBeTruthy();
  });
});