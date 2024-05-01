export default class Ship {
  constructor(length) {
    (this.length = length), (this.hitsSuffered = 0), (this.sunk = false);
  }
  isHit() {
    this.hitsSuffered += 1;
    this.sunk = this.isSunk();
  }
  isSunk() {
    if (this.length > this.hitsSuffered) {
      return false;
    } else {
      return true;
    }
  }
}
