export class StringCalc {
 
  add(input: string = "0") {
    let result = 0;
    let delimiter: string | RegExp = /[,\n]/;

    if (input.includes("-")) {
      console.log(this.findNeg(input))
      
      // return "No negatives allowed: -" + firstNeg;
    }

    if (input.startsWith("//")) {
      delimiter = input.charAt(2);
      input = input.substring(4);
    }

    input.split(delimiter).forEach((numInput) => (result += +numInput));

    return result;
  }

  anotherWay() {

    let nums = [12,2,3,4,5,8]

    nums.forEach((num, index) => {console.log(index)})
    
    for (let num in nums) {
      console.log(num)  
    }
  }

  findNeg(input: string, negs: number[] = []) {
    if (!input.includes("-")) {
      return negs;
    }
    let firstNeg = input.charAt(input.indexOf("-") + 1);
    negs.push(+firstNeg);
    this.findNeg(input.substring(input.indexOf("-") + 2), negs)
  }
}
