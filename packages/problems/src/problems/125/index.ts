export const isPalindrome = function(s: string) {
  const strOfLow = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < Math.floor(strOfLow.length); i++) {
    if (strOfLow[i] !== strOfLow[strOfLow.length - i - 1]) return false;
  }
  return true;
};
