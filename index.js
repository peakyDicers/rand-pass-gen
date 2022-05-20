import { customAlphabet } from "nanoid";

const n = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&"
);

for (let i = 0; i < 5; i++) console.log(n(20));
