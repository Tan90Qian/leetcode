export type Character = string;

export const isValidSudoku = function(board: Character[][]): boolean {
  for (let row = 0; row < board.length; row++) {
    if (!validOnce(board[row], transformCharToNumber)) return false;
  }
  const flattedBoard = board.reduce((acc, val) => acc.concat(val), []);
  for (let i = 0; i < 9; i++) {
    const col = flattedBoard.filter((_, idx) => idx % 9 === i);
    if (!validOnce(col, transformCharToNumber)) return false;
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const unit = flattedBoard.filter((_, idx) => {
        const mo = Math.floor(idx / 9);
        const yu = idx % 9;
        return mo >= i && mo < i + 3 && yu >= j && yu < j + 3;
      });
      if (!validOnce(unit, transformCharToNumber)) return false;
    }
  }
  return true;
};

interface Hash {
  [value: number]: boolean;
}

interface TransformFnc {
  (char: Character, index?: number, array?: Character[]): number;
}

export function validOnce(line: Character[], transformFnc: TransformFnc) {
  const valuesOfLine = line.map(transformFnc);
  const hash: Hash = {};
  for (let i = 0; i < valuesOfLine.length; i++) {
    const value = valuesOfLine[i];
    if (value !== -1 && hash[value]) return false;
    hash[value] = true;
  }
  return true;
}

export const transformCharToNumber: TransformFnc = function(char) {
  const value = parseInt(char);
  if (Number.isNaN(value)) return -1;
  return value;
};
