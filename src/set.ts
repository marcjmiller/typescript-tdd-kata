interface Item {
  id: number;
  name: string;
}

export default class Set {
  private _items: Item[] = [];
  private _isEmpty: boolean = true;

  get isEmpty() {
    return this._isEmpty;
  }

  addItem(item?: Item) {
    item && this._items.push(item);
    this._isEmpty = false;
  }

  contains(item: Item) {
    let result = false;
    this._items.forEach((obj) => {
      if (obj === item) {
        result = true;
      }
    });

    return result;
  }

  removeItem() {
    this._isEmpty = true;
  }
}
