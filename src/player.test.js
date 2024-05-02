import Player from "./player";

let player1 = new Player(true);
let player2 = new Player(false);

test("Player human", () => {
  expect(player1.isHuman).toBe(true);
});

test("Player computer", () => {
  expect(player2.isHuman).toBe(false);
});

test("Player gameboard created", () => {
  expect(player1.gameboard.width).toBe(10);
  expect(player1.gameboard.height).toBe(10);
});
