import Set from '../set';

/*
 *
 * Step 1 - New Set
 * Step 2 - Add item
 * Step 3 - Remove item
 * Step 4 - Add a specific object
 * Step 5 - Refactor
 * Step 6 - Remove specific object
 * Step 7 - Add multiple objects
 * Step 8 - Refactor
 * Step 9 - Remove multiple objects
 * Step 10 - Refactor
 * Step 11 - Ensure no duplicates
 * ^^^^^^^ We are here ^^^^^^^
 * Step 12 - Add any number of objects to set
 *
 * */

describe('Set tests', () => {
  const set = new Set();
  const obj1 = new Object({ id: 1 });
  const obj2 = new Object({ id: 2 });
  const obj3 = new Object({ id: 3 });

  it('should instantiate the set, and it should be empty', () => {
    expect(set.isEmpty()).toBeTruthy();
  });

  it('should be able to add a specific object to the set', () => {
    set.addItem(obj1);

    expect(set.isEmpty()).toBeFalsy();
    expect(set.contains(obj1)).toBeTruthy();
  });

  it('should be able to remove a specific object', () => {
    set.removeItem(obj1)
    
    expect(set.isEmpty()).toBeTruthy();
    expect(set.contains(obj1)).toBeFalsy();
  })
  
  it('should be able to add multiple objects', () => {
    set.addMultiple([obj1, obj2, obj3])
    
    expect(set.isEmpty()).toBeFalsy();
    expect(set.contains(obj1)).toBeTruthy();
    expect(set.contains(obj2)).toBeTruthy();
    expect(set.contains(obj3)).toBeTruthy();
  })

  it('should be able to remove multiple objects', () => {
    set.removeMultiple([obj1, obj3]);

    expect(set.isEmpty()).toBeFalsy();
    expect(set.contains(obj1)).toBeFalsy();
    expect(set.contains(obj2)).toBeTruthy();
    expect(set.contains(obj3)).toBeFalsy();
  })
  
  it('should fix a bug', () => {  
    set.addItem(obj1);
    expect(set.contains(obj1)).toBeTruthy();
    expect(set.contains(obj2)).toBeTruthy();

    set.addMultiple([obj2, obj3])
    expect(set.contains(obj1)).toBeTruthy();
    expect(set.contains(obj2)).toBeTruthy();
    expect(set.contains(obj3)).toBeTruthy();
  })
});

