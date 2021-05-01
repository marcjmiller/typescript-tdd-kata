import PasswordChecker from "../passwordChecker";

/*

Iteration 1
  The length of the password must be at least 7 characters in length
  The password must contain at least 1 letter
  The password must contain at least 1 digit

Iteration 2
  We need to add support for checking admin passwords

  Admin passwords must be at least 10 characters in length
  Admin passwords must contain at least 1 special character

Iteration 3
  We need to provide feedback to the user about the strength of their password

  Provide the user with a list of reasons why their password is 'weak'

*/

describe("Password Checker tests", () => {
  const pc = new PasswordChecker();

  describe("Iteration 1", () => {
    it("should verify passwords are at least 7 characters", () => {
      expect(pc.check("abc123").isValidPassword).toBeFalsy();
      expect(pc.check("abcd1234").isValidPassword).toBeTruthy();
      expect(pc.check("1qazxsw23edcvfr4").isValidPassword).toBeTruthy();
      expect(pc.check("pass").isValidPassword).toBeFalsy();
    });

    it("should verify there is at least one letter in the password", () => {
      expect(pc.check("sdfs6fsdfsdf").isValidPassword).toBeTruthy();
      expect(pc.check("abcd1234").isValidPassword).toBeTruthy();
      expect(pc.check("1qazxsw23edcvfr4").isValidPassword).toBeTruthy();
      expect(pc.check("1234567890").isValidPassword).toBeFalsy();
    });

    it("should verify there is at least one number in the password", () => {
      expect(pc.check("sdfsdfsdfsdf").isValidPassword).toBeFalsy();
      expect(pc.check("abcd1234").isValidPassword).toBeTruthy();
      expect(pc.check("1qazxsw23edcvfr4").isValidPassword).toBeTruthy();
      expect(pc.check("1234567890").isValidPassword).toBeFalsy();
    });
  });

  describe("Iteration 2", () => {
    it("should verify admin passwords are at least 10 characters long", () => {
      expect(pc.check("abc123", true).isValidPassword).toBeFalsy();
      expect(pc.check("abcde12345!", true).isValidPassword).toBeTruthy();
      expect(pc.check("1qazxsw23ed$vfr4", true).isValidPassword).toBeTruthy();
      expect(pc.check("pass", true).isValidPassword).toBeFalsy();
      expect(
        pc.check("This!sALongP@ssw0rd", true).isValidPassword
      ).toBeTruthy();
    });
    it("should verify admin passwords contain at least 1 special character", () => {
      expect(pc.check("abc123", true).isValidPassword).toBeFalsy();
      expect(pc.check("abcde12345!", true).isValidPassword).toBeTruthy();
      expect(pc.check("1qazxsw23ed$vfr4", true).isValidPassword).toBeTruthy();
      expect(pc.check("pass", true).isValidPassword).toBeFalsy();
      expect(
        pc.check("This!sALongP@ssw0rd", true).isValidPassword
      ).toBeTruthy();
    });
  });

  describe("Iteration 3", () => {
    it("should return reasons why password is weak", () => {
      expect(pc.check("pass", true).isValidPassword).toBeFalsy();
      expect(pc.check("pass12fdv6!", true).isValidPassword).toBeTruthy();
      expect(pc.check("P@ss12fdv6!", true).isValidPassword).toBeTruthy();
      expect(pc.check("user!@Nm3").isValidPassword).toBeTruthy();
      expect(pc.check("passwrd").isValidPassword).toBeFalsy();
    });
  });
});
