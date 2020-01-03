export const partition = function(s: string) {

};

export function isPalindrome(s: string) {
  for (let i = 0; i < Math.floor(s.length); i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}

export function isValidComb(arr: string[], validFunc: typeof isPalindrome) {
  return arr.every(validFunc);
}