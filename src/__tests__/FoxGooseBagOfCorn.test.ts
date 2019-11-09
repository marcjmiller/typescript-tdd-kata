import FoxGooseBagOfCorn from "../FoxGooseBagOfCorn";

let fgbc = new FoxGooseBagOfCorn();

describe('Lets solve the Fox, Goose, BagOfCorn riddle', () => {
  it('should start all 4 items on the westBank list', () => {
    expect(fgbc.westBank.length).toEqual(4);
    expect(fgbc.westBank).toStrictEqual(['corn', 'fox', 'goose', 'you']);
    expect(fgbc.completedRiddle()).toBeFalsy();
  });


  it('should move us across to the opposite bank with the goose first', () => {
    let safetyCheck: boolean = fgbc.boatAcross('goose');
    expect(fgbc.westBank.length).toEqual(2);
    expect(fgbc.westBank).toStrictEqual(['corn', 'fox']);
    expect(fgbc.eastBank.length).toEqual(2);
    expect(fgbc.eastBank).toStrictEqual(['goose', 'you']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeFalsy();
  });

  it('should move myself back across', () => {
    let safetyCheck: boolean = fgbc.boatAcross();
    expect(fgbc.westBank.length).toEqual(3);
    expect(fgbc.westBank).toStrictEqual(['corn', 'fox', 'you']);
    expect(fgbc.eastBank.length).toEqual(1);
    expect(fgbc.eastBank).toStrictEqual(['goose']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeFalsy();
  });

  it('should move across with the fox', () => {
    let safetyCheck: boolean = fgbc.boatAcross('fox');
    expect(fgbc.westBank.length).toEqual(1);
    expect(fgbc.westBank).toStrictEqual(['corn']);
    expect(fgbc.eastBank.length).toEqual(3);
    expect(fgbc.eastBank).toStrictEqual(['fox', 'goose', 'you']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeFalsy();
  });

  it('should boat back with the goose', () => {
    let safetyCheck: boolean = fgbc.boatAcross('goose');
    expect(fgbc.westBank.length).toEqual(3);
    expect(fgbc.westBank).toStrictEqual(['corn', 'goose', 'you']);
    expect(fgbc.eastBank.length).toEqual(1);
    expect(fgbc.eastBank).toStrictEqual(['fox']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeFalsy();
  });

  it('should take the corn across', () => {
    let safetyCheck: boolean = fgbc.boatAcross('corn');
    expect(fgbc.westBank.length).toEqual(1);
    expect(fgbc.westBank).toStrictEqual(['goose']);
    expect(fgbc.eastBank.length).toEqual(3);
    expect(fgbc.eastBank).toStrictEqual(['corn', 'fox', 'you']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeFalsy();
  });

  it('should go back across alone', () => {
    let safetyCheck: boolean = fgbc.boatAcross();
    expect(fgbc.westBank.length).toEqual(2);
    expect(fgbc.westBank).toStrictEqual(['goose', 'you']);
    expect(fgbc.eastBank.length).toEqual(2);
    expect(fgbc.eastBank).toStrictEqual(['corn', 'fox']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeFalsy();
  });

  it('should finish by taking the gooose across again', () => {
    let safetyCheck: boolean = fgbc.boatAcross('goose');
    expect(fgbc.westBank.length).toEqual(0);
    expect(fgbc.westBank).toStrictEqual([]);
    expect(fgbc.eastBank.length).toEqual(4);
    expect(fgbc.eastBank).toStrictEqual(['corn', 'fox', 'goose', 'you']);
    expect(safetyCheck).toBeTruthy();
    expect(fgbc.completedRiddle()).toBeTruthy();
  });

  it('should let us know if we failed to keep the Goose and/or Corn safe', () => {
    let fgbc = new FoxGooseBagOfCorn();
    let safetyCheck: boolean = fgbc.boatAcross();
    expect(safetyCheck).toBeFalsy();
  });

});