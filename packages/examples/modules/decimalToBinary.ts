import { Stack } from "data-structures";

const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * 10进制数转n进制数
 *
 * @export
 * @param {number} decNumber
 * @param {number} [base=2]
 * @returns {string}
 */
export function decimalToBinary(decNumber: number, base = 2): string {
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
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
}
