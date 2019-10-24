import {fizzBuzzStageOne, fizzBuzzStageTwo} from "../app";

describe('FizzBuzz Kata tests', () => {
    it('should return 1-15 with multiples of 3 replaced with Fizz, 5 with Buzz, 3 & 5 with FizzBuzz', () => {
        expect(fizzBuzzStageOne(15)).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"])
    });

    it('should return as FizzBuzz, but replacing if divisible or containing 3 or 5', () => {
        expect(fizzBuzzStageTwo(15)).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz",14,"FizzBuzz"])
    });
});