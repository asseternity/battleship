import Ship from "./ship";
let ship1 = new Ship(5);
let ship2 = new Ship(5);
let ship3 = new Ship(5);

test("ship exists", () => {
  expect(ship1.length).toBe(5);
});

test("ship being hit increases hitsSuffered", () => {
  ship1.isHit();
  expect(ship1.hitsSuffered).toBe(1);
});

test("ship being hit increases hitsSuffered (multiple)", () => {
  ship2.isHit();
  ship2.isHit();
  expect(ship2.hitsSuffered).toBe(2);
});

test("ship can be sunk", () => {
  ship3.isHit();
  ship3.isHit();
  ship3.isHit();
  ship3.isHit();
  ship3.isHit();
  expect(ship3.hitsSuffered).toBe(5);
  expect(ship3.sunk).toBe(true);
});
