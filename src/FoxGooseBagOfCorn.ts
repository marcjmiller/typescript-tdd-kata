export default class FoxGooseBagOfCorn {
  private _westBank: string[] = ['corn', 'fox', 'goose', 'you'];
  private _eastBank: string[] = [];
  private _isSafe: boolean = true;

  get westBank(): string[] {
    return this._westBank.sort();
  }

  get eastBank(): string[] {
    return this._eastBank.sort();
  }

  get isSafe(): boolean {
    return this._isSafe;
  }

  set isSafe(value: boolean) {
    this._isSafe = value;
  }


  boatAcross(mover?: string): boolean {
    const [fromLocation, toLocation] = this.getLocs();
    FoxGooseBagOfCorn._boatAcross(fromLocation, toLocation, mover);
    this.checkIfUnsafe(fromLocation);
    return this.isSafe;
  }

  private getLocs(): string[][] {
    return this.eastBank.includes('you') ? [this.eastBank, this.westBank] : [this.westBank, this.eastBank];
  }

  private static _boatAcross(fromLocation: string[], toLocation: string[], mover?: string): void {
    fromLocation.splice(fromLocation.indexOf('you'), 1);
    toLocation.push('you');
    if (mover) {
      fromLocation.splice(fromLocation.indexOf(mover), 1);
      toLocation.push(mover);
    }
  }

  checkIfUnsafe(locationToCheck: string[]): void {
    if (FoxGooseBagOfCorn.isUnsafe(locationToCheck)) {
      console.log('You have failed to solve the riddle!');
      this.isSafe = false;
    }
  }

  private static isUnsafe(locationToCheck: string[]): boolean {
    return locationToCheck.includes('fox') && locationToCheck.includes('goose') ||
      locationToCheck.includes('corn') && locationToCheck.includes('goose');
  }

  completedRiddle(): boolean {
    if (this.eastBank.length == 4) {
      console.log('Congrats! You solved the riddle!');
      return true;
    }
    return false;
  }
}