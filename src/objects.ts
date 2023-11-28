// Optional elements
type Coordinates = {
  x: number;
  y: number;
  z?: number;
};

const myCoords: Coordinates = {
  x: 1,
  y: 3,
};

// Readonly elements
type User = {
  readonly id: number;
  userName: string;
};

const user: User = {
  id: 1,
  userName: "SuperMan",
};

console.log(user.id);

type UserCoords = User & Coordinates & { dressColor: string };

const batmanCoords: UserCoords = {
  id: 2,
  userName: "Batman",
  x: 234,
  y: 233,
  z: 12,
  dressColor: "black"
};
