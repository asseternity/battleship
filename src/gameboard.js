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
    // create a ship instance and assign its length based on coordinates.length
    let ship = new Ship(coordinates.length);
    // what format should the coordinates be in?
    // coordinates = [[1, 2], [1, 3], [1, 4]]
    // iterate through the coordinates array
    // confirming that every cell is free
    for (let i = 0; i < coordinates.length; i++) {
      let coordinate1 = parseInt(coordinates[i][0]);
      let coordinate2 = parseInt(coordinates[i][1]);

      if (
        coordinate1 < 0 ||
        coordinate1 >= this.board.length ||
        coordinate2 < 0 ||
        coordinate1 >= this.board[0].length
      ) {
        return new Error("Coordinates are out of bounds!");
      }
      if (this.board[coordinate1][coordinate2] !== null) {
        return new Error("This cell is taken!");
      }
      let neighborCell1;
      let neighborCell2;
      let neighborCell3;
      let neighborCell4;
      if (coordinate1 === 0) {
        neighborCell2 = "undefined";
      } else {
        neighborCell2 = this.board[coordinate1 - 1][coordinate2];
      }
      if (coordinate1 === 9) {
        neighborCell1 = "undefined";
      } else {
        neighborCell1 = this.board[coordinate1 + 1][coordinate2];
      }
      if (coordinate2 === 0) {
        neighborCell4 = "undefined";
      } else {
        neighborCell4 = this.board[coordinate1][coordinate2 - 1];
      }
      if (coordinate2 === 9) {
        neighborCell3 = "undefined";
      } else {
        neighborCell3 = this.board[coordinate1][coordinate2 + 1];
      }
      let neighborCells = [
        neighborCell1,
        neighborCell2,
        neighborCell3,
        neighborCell4,
      ];
      for (let k = 0; k < neighborCells.length; k++) {
        if (neighborCells[k] == "undefined") {
          neighborCells.splice(k, 1);
        }
      }
      for (let l = 0; l < neighborCells.length; l++) {
        if (neighborCells[l] !== null) {
          return new Error("Neighboring cells must be empty!");
        }
      }
    }
    for (let j = 0; j < coordinates.length; j++) {
      // we confirmed that the place is valid
      // now we iterate again and create a ship in every cell
      let coordinate1 = parseInt(coordinates[j][0]);
      let coordinate2 = parseInt(coordinates[j][1]);
      this.board[coordinate1][coordinate2] = ship;
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
  receiveRandomAttack() {
    let coordinate1 = Math.floor(Math.random() * 10);
    let coordinate2 = Math.floor(Math.random() * 10);
    if (
      this.board[coordinate1][coordinate2] !== "miss" ||
      this.board[coordinate1][coordinate2] !== "hitShip"
    ) {
      this.receiveAttack([coordinate1, coordinate2]);
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
