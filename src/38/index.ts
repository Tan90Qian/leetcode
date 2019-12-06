interface Cache {
  [key: number]: string;
}

export const countAndSay = (function() {
  const cache: Cache = {};

  return function(n: number): string {
    if (n === 0) return "";
    if (cache[n]) return cache[n];
    let curStr = "1";
    for (let i = 1; i <= n - 1; i++) {
      curStr = generatorNextStr(splitStr(curStr));
      if (!cache[i + 1]) cache[i + 1] = curStr;
    }
    return curStr;
  };
})();

type SplitUnit = [string, number];

export function splitStr(str: string) {
  let result: SplitUnit[] = [];
  let curVal;
  let repeatTimes = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === curVal) {
      repeatTimes += 1;
      continue;
    }
    if (curVal) {
      result.push([curVal, repeatTimes]);
    }
    curVal = str[i];
    repeatTimes = 1;
  }
  if (curVal) result.push([curVal, repeatTimes]);
  return result;
}

export function generatorNextStr(splitResult: SplitUnit[]) {
  let str = "";
  for (let i = 0; i < splitResult.length; i++) {
    let unit = splitResult[i];
    str += `${unit[1]}${unit[0]}`;
  }
  return str;
}
