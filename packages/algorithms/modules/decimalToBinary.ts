import { Stack } from "../../data-structures";

export function decimalToBinary(decNumber: number, base = 2) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  if (base < 2 || base > 36) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}
