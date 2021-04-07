export class StringCalc {
  private total = 0;

  add(input: string) {
    if (input.length > 0) {
      const inputSplit = this.splitInput(input);
      inputSplit.forEach((value) => (this.total += value));
    }

    return this.total;
  }

  splitInput(input: string): number[] {
    let defaultDelim = /[,\n]/ 
    if (input.startsWith('//')) {
      const delim = this.getDelim(input);
    }
    if (!delim) {
      const inputAsArray = input.split(/[,\n]/);
    } else {
      const inputAsArray = input.split(delim)
    }
    const output: number[] = [];
      // get delimiter(s) const delim
      //inputAsArray.forEach((stringValue) => if value!= delim output.push(+stringValue));
      //else
    
    inputAsArray.forEach((stringValue) => output.push(+stringValue));
    return output;


  }

  getDelim(input: string) {
    return input[2];
  }
}
