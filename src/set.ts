export default class Set {
  setItems: object[];
  
  constructor() {
    this.setItems = [];
  }

  isEmpty() {
    return this.setItems.length === 0;
  }

  addItem(item: Object) {
    this.setItems = [...this.setItems, item];
  }
  
  addMultiple(items: Object[]) {
    this.setItems = [...this.setItems, ...items];
  }

  removeItem(item: object) {
    let newItems: object[] = [];

    if (this.contains(item)) {
      this.setItems.forEach(obj => {
        if (obj !== item) {
          newItems = [...newItems, obj];
        }      
      })

      this.setItems = newItems;
    };
  }

  removeMultiple(items: object[]) {
    for (let item of items) {
      this.removeItem(item);
    }
  }
  
  contains(obj: Object) {
    for (let item of this.setItems) {
      if (obj === item) {
        return true
      }
    }
    return false
  }
}
