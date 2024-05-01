import Ship from "./ship";

export default class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [];
  }
  createGameboard() {
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(null);
      }
      this.board.push(row);
    }
  }
  placeShip(coordinates) {
    // what format should the coordinates be in?
    // coordinates = [[[1], [2]], [[1], [3]], [[1], [4]]]
    // iterate through the coordinates array
    // placing "ship" in each cell
    let ship = new Ship(coordinates.length);
    for (let i = 0; i < coordinates.length; i++) {
      let coordinate1 = parseInt(coordinates[i][0]);
      let coordinate2 = parseInt(coordinates[i][1]);

      if (
        coordinate1 < 0 ||
        coordinate1 >= this.board.length ||
        coordinate2 < 0 ||
        coordinate1 >= this.board[0].length
      ) {
        throw new Error("Coordinates are out of bounds!");
      }
      if (this.board[coordinate1][coordinate2] == null) {
        // then create a ship
        // and assign its length based on coordinates.length
        this.board[coordinate1][coordinate2] = ship;
      } else {
        throw new Error("The cells are not empty!");
      }
    }
    return ship;
  }
  receiveAttack(coordinates) {
    let coordinate1 = coordinates[0];
    let coordinate2 = coordinates[1];
    if (this.board[coordinate1][coordinate2] === null) {
      this.board[coordinate1][coordinate2] = "miss";
    } else if (
      this.board[coordinate1][coordinate2] === "miss" ||
      this.board[coordinate1][coordinate2] === "hitShip"
    ) {
      throw new Error("Already attacked here!");
    } else {
      let hitShip = this.board[coordinate1][coordinate2];
      hitShip.isHit();
      this.board[coordinate1][coordinate2] = "hitShip";
    }
  }
  allShipsSunk() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (
          this.board[i][j] !== null &&
          this.board[i][j] !== "miss" &&
          this.board[i][j] !== "hitShip"
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
