import { hotPotato } from "./hotPotato";

describe("test hotPotato", () => {
  it("test case 1", () => {
    const elementList = [1, 2, 3];
    const num = 3;

    const { eliminated, winner } = hotPotato(elementList, num);
    expect(eliminated).toEqual([1, 3]);
    expect(winner).toBe(2);
  });
});
