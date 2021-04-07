import Set from "../set";

/**
 * red -> green -> refactor
 *
 * Step 1 - New Set
 * Step 2 - Add item
 * Step 3 - Remove item
 * Step 4 - Add a specific object
 * ^^^^^^^ We are here ^^^^^^^
 * Step 5 - Refactor
 * Step 6 - Remove specific object
 * Step 7 - Add multiple objects
 * Step 8 - Refactor
 * Step 9 - Remove multiple objects
 * Step 10 - Refactor
 * Step 11 - Ensure no duplicates
 * Step 12 - Add any number of objects to set
 *
 */

describe("Set tests", () => {
  const set = new Set();

  it("should be empty after initializing", () => {
    expect(set.isEmpty).toBeTruthy();
  });

  it("should be able to add an item", () => {
    set.addItem();
    expect(set.isEmpty).toBeFalsy();
  });

  it("should be able to remove an item", () => {
    set.removeItem();
    expect(set.isEmpty).toBeTruthy();
  });

  it("should be able to add specific items", () => {
    const obj1 = { id: 1, name: "Object 1" };
    const obj2 = { id: 1, name: "Object 1" };

    set.addItem(obj1);
    expect(set.isEmpty).toBeFalsy();
    expect(set.contains(obj1)).toBeTruthy();
    expect(set.contains(obj2)).toBeFalsy();
  });
});
