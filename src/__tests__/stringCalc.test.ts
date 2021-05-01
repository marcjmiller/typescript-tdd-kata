/* 

1. In a test-first manner, create a simple class class StringCalculator with a method public int Add(string numbers)
  1. The method can take 0, 1 or 2 numbers, and will return their sum
  (for an empty string it will return 0): “” == 0 , “1” == 1 , “1,2” == 3

  2. Start with the simplest test case of an empty string and move to one & two
  numbers
  
  3. Remember to solve things as simply as possible so that you force yourself to
  write tests you did not think about

  4. Remember to refactor after each passing test

2. Allow the Add method to handle an unknown amount of numbers

3. Allow the Add method to handle new lines between numbers (instead of commas).
  1. the following input is ok: “1\n2,3” == 6
  2. the following is INVALID input so do not expect it : “1,\n” (not need to write a test for it)

4. Support different delimiters:
  to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]”: “//;\n1;2” == 3

  since the default delimiter is ‘;’ .
  Note: All existing scenarios and tests should still be supported

5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.

6. If there are multiple negatives, show all of them in the exception message

7. Using TDD, Add a method to StringCalculator called public int GetCalledCount() that returns how many times Add() was invoked.
  Remember - Start with a failing (or even non compiling) test.

8. SKIP

9. Numbers bigger than 1000 should be ignored, for example: 2 + 1001 == 2

10. Delimiters can be of any length with the following format: //[delimiter]\n”, “//[***]\n1***2***3” == 6

11. Allow multiple delimiters like this: “//[delim1][delim2]\n”, “//[*][%]\n1*2%3” == 6.

12. make sure you can also handle multiple delimiters with length longer than one char: “//[**][%%]\n1**2%%3” == 6.

Driver:
V

Nav:
D

Time (8 minute blocks):
M

*/

import { StringCalc } from "../stringCalc";

describe("String calculator", () => {
  const sc = new StringCalc();

  it("should take in no input and return a number", () => {
    expect(sc.add()).toEqual(0);
  });

  it("should take in a string with one input and return a number", () => {
    expect(sc.add("2")).toEqual(2);
  });

  it('should take in two number in a string and return the sum', () => {
    expect(sc.add("2,3")).toEqual(5);
  })
  
  it('should in multiple number in a string and return the sum', () => {
    expect(sc.add("1,2,3,4")).toEqual(10);
  })
  
  it('should take in "/n" as a delimiter', () => {
    expect(sc.add("1\n2,3")).toEqual(6);
  })
  
  it('should support any delimiter', () => {
    expect(sc.add("//;\n1;2")).toEqual(3);
  })
  
  it('should take throw an exception negatives not allowed when passed a negative  number', () => {
    expect(sc.add("1,-2,4")).toEqual("No negatives allowed: -2");
    expect(sc.add("1,-2,-4")).toEqual("No negatives allowed: -2, -4");
  })
  
});
