export default class FoxGooseBagOfCorn {
  private _westBank: string[] = ['corn', 'fox', 'goose', 'you'];
  private _eastBank: string[] = [];
  private _isSafe: boolean = true;

  get westBank(): string[] {
    return this._westBank.sort();
  }

  set westBank(value: string[]) {
    this._westBank = value;
  }

  get eastBank(): string[] {
    return this._eastBank.sort();
  }

  set eastBank(value: string[]) {
    this._eastBank = value;
  }

  get isSafe(): boolean {
    return this._isSafe;
  }

  set isSafeToggle(value: boolean) {
    this._isSafe = !this._isSafe;
  }

  moveAcross(mover?: string): boolean {
    let fromLocation: string[] = this.eastBank.includes('you') ? this.eastBank : this.westBank;
    let toLocation: string[] = !this.eastBank.includes('you') ? this.eastBank : this.westBank;

    FoxGooseBagOfCorn.boatAcross(fromLocation, toLocation, mover);
    this.checkSafety(fromLocation);

    return this.isSafe;
  }

  private static boatAcross(fromLocation: string[], toLocation: string[], mover?: string) {
    fromLocation.splice(fromLocation.indexOf('you'), 1);
    toLocation.push('you');
    if (mover) {
      fromLocation.splice(fromLocation.indexOf(mover), 1);
      toLocation.push(mover);
    }
  }

  checkSafety(locationToCheck: string[]) {
    if (locationToCheck.includes('fox') && locationToCheck.includes('goose') ||
      locationToCheck.includes('corn') && locationToCheck.includes('goose')) {
      this.isSafeToggle;
    }
  }
}