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
  let stringCalc: StringCalc;
  
  beforeEach(() => {
    stringCalc = new StringCalc();
  });

  it("should take an empty string", () => {
    const result = stringCalc.add("");
    expect(result).toBe(0);
  });

  it("should return the value when passed only one", () => {
    const result = stringCalc.add("1");
    expect(result).toBe(1);
  });

  it("should add a string with 2 values", () => {
    const result = stringCalc.add("1,2");
    expect(result).toBe(3);
  });

  it('should add a string with a baggilion #s', () => {
    const result = stringCalc.add("1,2,3,4");
    expect(result).toBe(10);
  })

  it('should handle new lines and commas', () => {
    const result = stringCalc.add("1,2\n3,4");
    expect(result).toBe(10);
    
  })

  it('should support custom delimiters outline by //', () => {
    const result = stringCalc.add("//;\n1;2");
    expect(result).toBe(3);
    
  })
  
  
  

  
});
