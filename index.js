import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?~-_"
);

const nums = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
const symbols = new Set(["!", "@", "$", "%", "^", "&", "*", "?", "~", "-", "_"])

const hasNumber = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (nums.has(s[i])) {
      return true;
    }
  }
  return false;
};

const hasSymbol = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (symbols.has(s[i])) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < 5; i++){
  let pass;
  do {
    pass = nanoid()
  } while (!hasNumber(pass) || !hasSymbol(pass))
  console.log(pass);
}
