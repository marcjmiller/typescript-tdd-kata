type FizzBuzzOutputType = Array<number | string>;


export function fizzBuzzStageOne(upperLimit: number): FizzBuzzOutputType  {
    let out: FizzBuzzOutputType = new Array<number | string>();

    for (let i = 1; i <= upperLimit; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            out = out.concat('FizzBuzz')
        } else if (i % 3 == 0) {
            out = out.concat('Fizz')
        } else if (i % 5 == 0) {
            out = out.concat('Buzz')
        } else {
            out = out.concat(i)
        }
    }
    return out
};

export function fizzBuzzStageTwo(upperLimit: number): FizzBuzzOutputType {
    let out: FizzBuzzOutputType = new Array<number|string>();

    for (let i = 1; i <= upperLimit; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            out = out.concat('FizzBuzz')
        } else if (i % 3 == 0 || i.toString().match('[3]')) {
            out = out.concat('Fizz')
        } else if (i % 5 == 0 || i.toString().match('[5]')) {
            out = out.concat('Buzz')
        } else {
            out = out.concat(i)
        }
    }

    return out;
}