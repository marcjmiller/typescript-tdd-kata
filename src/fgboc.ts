export default class fgboc {

  private _northBank: string[];
  private _southBank: string[];
  public lastMove: string;

  constructor() {
    this._northBank = ['corn', 'fox', 'goose', 'you'];
    this._southBank = [];
    this.lastMove = '';
  }

  get northBank(): string[] {
    return this._northBank.sort();
  }

  get southBank(): string[] {
    return this._southBank.sort();
  }

  getValidMoves(): string[] {
    let validMoves: string[] = [];
    let imOnSouthShore: boolean = this.southBank.includes('you');
    let passengers: string[] = Array.from(this.northBank.includes('you') ? this.northBank : this.southBank)
      .filter(passenger => passenger !== 'you');

    if (imOnSouthShore && this.checkValidMove('you')) {
      validMoves.push('you');
    }

    for (let passenger of passengers) {
      if (this.checkValidMove(passenger) && passenger !== this.lastMove) {
        validMoves.push(passenger);
      }
    }

    return validMoves;
  }

  checkValidMove(passenger: string): boolean {
    let myShore = Array.from(this.northBank.includes('you') ? this.northBank : this.southBank);
    myShore.splice(myShore.indexOf('you'), 1);

    if (passenger !== 'you') {
      myShore.splice(myShore.indexOf(passenger), 1);
    }

    return !(myShore.includes('fox') && myShore.includes('goose') ||
      myShore.includes('corn') && myShore.includes('goose') ||
      myShore.includes('fox') && myShore.includes('goose') && myShore.includes('corn'));
  }

  move(passenger: string) {
    let myShore = this._northBank.includes('you') ? this._northBank : this._southBank;
    let otherShore = myShore === this._northBank ? this._southBank : this._northBank;

    if (myShore.includes(passenger) && this.checkValidMove(passenger)) {
      this.lastMove = passenger;
      this.moveSelf(myShore, otherShore);

      if (passenger !== 'you') {
        this.movePassenger(myShore, passenger, otherShore);
      }
    }
  }

  solve(): string[] {
    let movesList: string[] = [];
    while (this.northBank.length > 0) {
      console.log(
        `North Bank: [${this.northBank}], South Bank: [${this.southBank}], \nBest choice to move: ${this.getValidMoves()[0]}`);
      movesList.push(this.makeNextMove());
    }
    return movesList;
  }

  private moveSelf(myShore: string[], otherShore: string[]): void {
    myShore.splice(myShore.indexOf('you'), 1);
    otherShore.push('you');
  }

  private movePassenger(myShore: string[], passenger: string, otherShore: string[]): void {
    myShore.splice(myShore.indexOf(passenger), 1);
    otherShore.push(passenger);
  }

  private makeNextMove(): string {
    let nextMove = this.getValidMoves()[0];
    this.move(nextMove);
    return nextMove;
  }
}
