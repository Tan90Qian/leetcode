import { Deque } from "data-structures";

export function palindromeChecker(aString: string) {
  if (!aString) return false;
  const deque = new Deque();
  const lowerString = aString
    .toLowerCase()
    .split(" ")
    .join("");
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeBack();
    lastChar = deque.removeFront();
    if (firstChar !== lastChar) isEqual = false;
  }

  return isEqual;
}
