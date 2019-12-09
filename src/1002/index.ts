export const commonChars = function(A: string[]): string[] {
  const compareResult = compareRepeat(...A.map(countStrRepeat));
  return Object.entries(compareResult).reduce((prevValue, [value, times]) => {
    return [...prevValue, ...value.repeat(times).split("")];
  }, []);
};

interface StrRepeat {
  [value: string]: number;
}

export const countStrRepeat = function(str: string): StrRepeat {
  const result: StrRepeat = {};
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    if (!result[value]) result[value] = 1;
    else result[value] += 1;
  }
  return result;
};

interface CompareObj {
  [value: string]: number[];
}

export const compareRepeat = function(...strRepeat: StrRepeat[]): StrRepeat {
  const compareObj: CompareObj = {};
  const result: StrRepeat = {};
  strRepeat.forEach(item => {
    Object.entries(item).forEach(([value, times]) => {
      if (!compareObj[value]) compareObj[value] = [times];
      else compareObj[value].push(times);
    });
  });
  Object.entries(compareObj).forEach(([value, times]) => {
    result[value] = times.length === strRepeat.length ? Math.min(...times) : undefined;
  });
  return result;
};
