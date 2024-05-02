import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import "./styles.css";

class DOMManipulator {
  createGameboard(playerName, isHuman) {
    let newPlayer = new Player(playerName, isHuman);
    newPlayer.gameboard.createGameboard();
    let container = document.querySelector(".container");
    let playerArea = document.createElement("div");
    container.appendChild(playerArea);
    let gameboardDiv = document.createElement("div");
    playerArea.appendChild(gameboardDiv);
    playerArea.classList.add("playerArea");
    playerArea.id = `${playerName}`;
    gameboardDiv.classList.add("gameboardDiv");
    for (let i = 0; i < newPlayer.gameboard.width; i++) {
      for (let j = 0; j < newPlayer.gameboard.height; j++) {
        let tile = document.createElement("div");
        tile.id = `TileID_${i}${j}`;
        tile.classList.add("tile");
        tile.style.gridColumn = `${i + 1}`;
        tile.style.gridRow = `${j + 1}`;
        gameboardDiv.appendChild(tile);
        tile.addEventListener("click", () => {
          newPlayer.gameboard.receiveAttack([i, j]);
          this.updateTiles(newPlayer);
        });
      }
    }
    return newPlayer;
  }
  updateTiles(player) {
    let div = document.querySelector(`#${player.name}`);
    for (let i = 0; i < player.gameboard.board.length; i++) {
      for (let j = 0; j < player.gameboard.board[i].length; j++) {
        if (player.gameboard.board[i][j] == null) {
        } else if (
          player.gameboard.board[i][j] == "miss" ||
          player.gameboard.board[i][j] == "hitShip"
        ) {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "x";
        } else {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "o";
        }
      }
    }
  }
}

// testing zone
let game = new DOMManipulator();
let player1 = game.createGameboard("player1", true);
console.log(player1);
player1.gameboard.placeShip([
  [1, 2],
  [1, 3],
  [1, 4],
]);
game.updateTiles(player1);

let player2 = game.createGameboard("player2", false);
player2.gameboard.placeShip([
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
]);
game.updateTiles(player2);
