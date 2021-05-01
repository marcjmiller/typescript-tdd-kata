interface Result {
  isValidPassword: boolean;
  reasons: string[];
}

class PasswordChecker {
  private matchOneLetter = /[a-zA-Z]/;
  private matchOneNumber = /[0-9]/;
  private specialChar = /[?$%#@!*,.]/;

  check(input: string, isAdminPass: boolean = false): Result {
    if (isAdminPass) {
      return this.checkAdmin(input);
    }

    return this.checkOthers(input);
  }

  checkOthers(input: string): Result {
    if (
      input.length >= 7 &&
      this.matchOneLetter.test(input) &&
      this.matchOneNumber.test(input)
    ) {
      return { isValidPassword: true, reasons: [] } as Result;
    }

    return { isValidPassword: false, reasons: [] } as Result;
  }

  checkAdmin(input: string) {
    if (input.length >= 10 && this.specialChar.test(input)) {
      return { isValidPassword: true, reasons: [] } as Result;
    }

    return { isValidPassword: false, reasons: [] } as Result;
  }
}

export default PasswordChecker;
