import isEmail from "validator/lib/isEmail";

export const SPECIAL_CHARACTERS = /[!"#$%&'()*+,-./:;<=>?@\]\[\\^_`{|}~]/;

export const isEmailValid = (value: string): boolean => {
  return isEmail(value);
};

export const hasPasswordCorrectLength = (value: string, minValue: number) => {
  return value.length >= minValue;
};

export const hasPasswordDigits = (value: string): boolean => {
  return /\d/.test(value);
};

export const hasPasswordLowercaseLetters = (value: string): boolean => {
  return /[a-z]/.test(value);
};

export const hasPasswordUppercaseLetters = (value: string): boolean => {
  return /[A-Z]/.test(value);
};

export const hasPasswordSpecialCharacter = (
  value: string,
  specialCharacters: RegExp = SPECIAL_CHARACTERS
): boolean => {
  return specialCharacters.test(value);
};
