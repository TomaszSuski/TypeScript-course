const nums: number[] = [1, 2, 3];

const strings: Array<string> = ["one", "two", "three"];

type Coords = {
  x: number;
  y: number;
  z?: number;
};

const coords: Coords[] = [];
coords.push({ x: 24, y: 15 });

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
