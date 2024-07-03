import generatePassword from "./generatePassword";
import "@testing-library/jest-dom";

describe("generatePassword", () => {
  it("return a high security password if called with no arguments", () => {
    const password = generatePassword();
    expect(password).toHaveLength(12);
    expect(/[a-z]/.test(password)).toBe(true);
    expect(/[A-Z]/.test(password)).toBe(true);
    expect(/[0-9]/.test(password)).toBe(true);
  });
  it("returns a password of the specified length", () => {
    const length = 32;
    const password = generatePassword({ length });
    expect(password).toHaveLength(length);
  });

  it("returns a password containing uppercase when the uppercase option is true", () => {
    const password = generatePassword({
      length: 12,
      uppercase: true,
      numbers: false,
      symbols: false,
    });
    expect(/[A-Z]/.test(password)).toBe(true);
  });
  it("returns a password containing numbers when the numbers option is true", () => {
    const password = generatePassword({
      length: 12,
      uppercase: true,
      numbers: false,
      symbols: false,
    });
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  it("returns a password containing symbols when the symbols option is true", () => {
    const password = generatePassword({
      length: 12,
      uppercase: false,
      numbers: false,
      symbols: true,
    });
    expect(/[!@#$%^&*()_+\-={}[\];<>:]/.test(password)).toBe(true);
  });
});
