export default class fgboc {

  private _northBank: Passenger[];
  private _southBank: Passenger[];
  public lastMove: string;

  constructor() {
    this._northBank = [Passenger.CORN, Passenger.FOX, Passenger.GOOSE, Passenger.YOU];
    this._southBank = [];
    this.lastMove = '';
  }

  get northBank(): Passenger[] {
    return this._northBank.sort();
  }

  get southBank(): Passenger[] {
    return this._southBank.sort();
  }

  getValidMoves(): Passenger[] {
    let validMoves: Passenger[] = [];
    let imOnSouthShore: boolean = this.southBank.includes(Passenger.YOU);
    let passengers: Passenger[] = Array.from(this.northBank.includes(Passenger.YOU) ? this.northBank : this.southBank)
      .filter(passenger => passenger !== Passenger.YOU);

    if (imOnSouthShore && this.checkValidMove(Passenger.YOU)) {
      validMoves.push(Passenger.YOU);
    }

    for (let passenger of passengers) {
      if (this.checkValidMove(passenger) && passenger !== this.lastMove) {
        validMoves.push(passenger);
      }
    }

    return validMoves;
  }

  checkValidMove(passenger: Passenger): boolean {
    let myShore = Array.from(this.northBank.includes(Passenger.YOU) ? this.northBank : this.southBank);
    myShore.splice(myShore.indexOf(Passenger.YOU), 1);

    if (passenger !== Passenger.YOU) {
      myShore.splice(myShore.indexOf(passenger), 1);
    }

    return !(myShore.includes(Passenger.FOX) && myShore.includes(Passenger.GOOSE) ||
      myShore.includes(Passenger.CORN) && myShore.includes(Passenger.GOOSE) ||
      myShore.includes(Passenger.FOX) && myShore.includes(Passenger.GOOSE) && myShore.includes(Passenger.CORN));
  }

  move(passenger: Passenger) {
    let myShore = this._northBank.includes(Passenger.YOU) ? this._northBank : this._southBank;
    let otherShore = myShore === this._northBank ? this._southBank : this._northBank;

    if (myShore.includes(passenger) && this.checkValidMove(passenger)) {
      this.lastMove = passenger;
      this.moveSelf(myShore, otherShore);

      if (passenger !== Passenger.YOU) {
        this.movePassenger(myShore, passenger, otherShore);
      }
    }
  }

  solve(): Passenger[] {
    let movesList: Passenger[] = [];
    while (this.northBank.length > 0) {
      console.log(
        `North Bank: [${this.northBank}], South Bank: [${this.southBank}], \nBest choice to move: ${this.getValidMoves()[0]}`);
      movesList.push(this.makeNextMove());
    }
    return movesList;
  }

  private moveSelf(myShore: Passenger[], otherShore: Passenger[]): void {
    myShore.splice(myShore.indexOf(Passenger.YOU), 1);
    otherShore.push(Passenger.YOU);
  }

  private movePassenger(myShore: Passenger[], passenger: Passenger, otherShore: Passenger[]): void {
    myShore.splice(myShore.indexOf(passenger), 1);
    otherShore.push(passenger);
  }

  private makeNextMove(): Passenger {
    let nextMove = this.getValidMoves()[0];
    this.move(nextMove);
    return nextMove;
  }
}

export enum Passenger {
  FOX = 'Fox',
  GOOSE = 'Goose',
  CORN = 'Corn',
  YOU = 'You'
}
