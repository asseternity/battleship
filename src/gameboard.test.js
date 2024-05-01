import Gameboard from "./gameboard";

let gameboard1 = new Gameboard(10, 10);
gameboard1.createGameboard();

test("gameboard creation", () => {
  expect(gameboard1.width).toBe(10);
  expect(gameboard1.height).toBe(10);
});

// gameboard correctly being made!

test("gameboard ship placement: cells are being filled", () => {
  let ship4 = gameboard1.placeShip([
    [4, 5],
    [4, 6],
    [4, 7],
  ]);
  expect(gameboard1.board[4][5].hitsSuffered).toBe(0);
  expect(gameboard1.board[4][6].length).toBe(3);
  expect(gameboard1.board[4][7].sunk).toBe(false);
  expect(ship4.length).toBe(3);
});

// gameboard ship placement: different ship length
test("gameboard ship placement: different ship length", () => {
  let ship5 = gameboard1.placeShip([
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [2, 9],
  ]);
  expect(gameboard1.board[2][7].hitsSuffered).toBe(0);
  expect(gameboard1.board[2][7].length).toBe(5);
  expect(gameboard1.board[2][7].sunk).toBe(false);
  expect(ship5.length).toBe(5);
});

// gameboard ship placement: cells are already full
test("gameboard ship placement: cells are already full", () => {
  expect(() =>
    gameboard1.placeShip([
      [2, 5],
      [2, 6],
      [2, 7],
      [2, 8],
      [2, 9],
    ]),
  ).toThrow("The cells are not empty!");
});

// gameboard ship placement: same cell twice
test("gameboard ship placement: cells are already full", () => {
  expect(() =>
    gameboard1.placeShip([
      [6, 5],
      [6, 6],
      [6, 7],
      [6, 8],
      [6, 8],
    ]),
  ).toThrow("The cells are not empty!");
});

test("receiveAttack hit", () => {
  let ship = gameboard1.board[4][5];
  gameboard1.receiveAttack([4, 5]);
  expect(ship.hitsSuffered).toBe(1);
  expect(gameboard1.board[4][5]).toBe("hitShip");
});

test("receiveAttack ship object is the same", () => {
  expect(gameboard1.board[4][6].hitsSuffered).toBe(1);
});

test("receiveAttack ship sunk", () => {
  let ship = gameboard1.board[4][6];
  gameboard1.receiveAttack([4, 6]);
  gameboard1.receiveAttack([4, 7]);
  expect(ship.hitsSuffered).toBe(3);
  expect(ship.sunk).toBe(true);
  expect(gameboard1.board[4][6]).toBe("hitShip");
  expect(gameboard1.board[4][7]).toBe("hitShip");
});

test("receiveAttack miss", () => {
  gameboard1.receiveAttack([3, 5]);
  expect(gameboard1.board[3][5]).toBe("miss");
});

test("receiveAttack already attacked", () => {
  expect(() => gameboard1.receiveAttack([3, 5])).toThrow(
    "Already attacked here!",
  );
});

let gameboard2 = new Gameboard(10, 10);
gameboard2.createGameboard();
test("allShipsSunk false", () => {
  gameboard2.placeShip([
    [1, 1],
    [1, 2],
    [1, 3],
  ]);
  gameboard2.placeShip([
    [3, 1],
    [3, 2],
    [3, 3],
  ]);
  gameboard2.receiveAttack([3, 1]);
  gameboard2.receiveAttack([3, 2]);
  gameboard2.receiveAttack([3, 3]);
  expect(gameboard2.allShipsSunk()).toBe(false);
});

test("allShipsSunk true", () => {
  gameboard2.receiveAttack([1, 1]);
  gameboard2.receiveAttack([1, 2]);
  gameboard2.receiveAttack([1, 3]);
  expect(gameboard2.allShipsSunk()).toBe(true);
});
