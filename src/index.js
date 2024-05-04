import Player from "./player";
import "./styles.css";

let player1;
let player2;

class DOMManipulator {
  createPlayer(playerName, isHuman) {
    let newPlayer = new Player(playerName, isHuman);

    if (newPlayer.isHuman == true) {
      this.placeShip(newPlayer);
      player2 = this.createPlayer("player2", false);
    }

    let container = document.querySelector(".container");
    let playerArea = document.createElement("div");
    if (newPlayer.isHuman == true) {
      playerArea.textContent = "Your Board";
    } else {
      playerArea.textContent = "Opponent's Board";
    }
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
        let shipSelect = document.querySelector("#shipLength");
        if (!newPlayer.isHuman) {
          tile.addEventListener("click", () => {
            if (randomPressed || shipSelect.children.length == 0) {
              let playersTurn = newPlayer.gameboard.receiveAttack([i, j]);
              this.updateTiles(newPlayer);
              if (newPlayer.gameboard.allShipsSunk()) {
                alert("You win! Reload the page for another game.");
                document.body.removeChild(container);
              }
              if (playersTurn == "miss") {
                let computersTurn;
                while (computersTurn !== "miss") {
                  computersTurn = player1.gameboard.receiveRandomAttack();
                  this.updateTiles(player1);
                  if (player1.gameboard.allShipsSunk()) {
                    alert("You lose! Reload the page for another game.");
                    document.body.removeChild(container);
                  }
                }
              }
            } else {
              alert(
                "Please place all your ships or hit 'Random' before attacking!",
              );
            }
          });
        }
      }
    }
    return newPlayer;
  }
  updateTiles(player) {
    let div = document.querySelector(`#${player.name}`);
    for (let i = 0; i < player.gameboard.board.length; i++) {
      for (let j = 0; j < player.gameboard.board[i].length; j++) {
        if (player.gameboard.board[i][j] == null) {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = " ";
        } else if (player.gameboard.board[i][j] == "miss") {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "m";
        } else if (player.gameboard.board[i][j] == "hitShip") {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          tile.textContent = "h";
        } else {
          let tile = div.querySelector(`#TileID_${i}${j}`);
          if (player.isHuman) {
            tile.textContent = "s";
          } else {
            tile.textContent = " ";
          }
        }
      }
    }
  }
  placeShip(player) {
    let field_coordinate1 = document.querySelector("#coordinate1");
    let field_coordinate2 = document.querySelector("#coordinate2");
    let field_orientation = document.querySelector("#orientation");
    let field_shipLength = document.querySelector("#shipLength");
    let submitButton = document.querySelector('input[type="submit"]');

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      let startingCoordinate1 = parseInt(field_coordinate1.value) - 1;
      let startingCoordinate2 = parseInt(field_coordinate2.value) - 1;
      let ship;
      if (field_orientation.value == "horizontal") {
        let coordinates1 = [
          parseInt(startingCoordinate1),
          parseInt(startingCoordinate2),
        ];
        let coordinates2 = [
          parseInt(startingCoordinate1) + 1,
          parseInt(startingCoordinate2),
        ];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (field_shipLength.value == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 3) {
          coordinates3 = [
            parseInt(startingCoordinate1) + 2,
            parseInt(startingCoordinate2),
          ];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
          ]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 4) {
          coordinates3 = [
            parseInt(startingCoordinate1) + 2,
            parseInt(startingCoordinate2),
          ];
          coordinates4 = [
            parseInt(startingCoordinate1) + 3,
            parseInt(startingCoordinate2),
          ];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
          ]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 5) {
          coordinates3 = [
            parseInt(startingCoordinate1) + 2,
            parseInt(startingCoordinate2),
          ];
          coordinates4 = [
            parseInt(startingCoordinate1) + 3,
            parseInt(startingCoordinate2),
          ];
          coordinates5 = [
            parseInt(startingCoordinate1) + 4,
            parseInt(startingCoordinate2),
          ];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
            coordinates5,
          ]);
          this.updateTiles(player);
        }
        if (typeof ship === "object") {
          let selectedValue = field_shipLength.value;
          let selectedOption = document.querySelector(
            'option[value="' + selectedValue + '"]',
          );
          field_shipLength.removeChild(selectedOption);
        } else {
          alert("The tiles you selected are not empty!");
        }
      } // ***
      // same but vertical
      // ***
      else {
        let coordinates1 = [
          parseInt(startingCoordinate1),
          parseInt(startingCoordinate2),
        ];
        let coordinates2 = [
          parseInt(startingCoordinate1),
          parseInt(startingCoordinate2) + 1,
        ];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (field_shipLength.value == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 3) {
          coordinates3 = [
            parseInt(startingCoordinate1),
            parseInt(startingCoordinate2) + 2,
          ];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
          ]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 4) {
          coordinates3 = [
            parseInt(startingCoordinate1),
            parseInt(startingCoordinate2) + 2,
          ];
          coordinates4 = [
            parseInt(startingCoordinate1),
            parseInt(startingCoordinate2) + 3,
          ];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
          ]);
          this.updateTiles(player);
        } else if (field_shipLength.value == 5) {
          coordinates3 = [
            parseInt(startingCoordinate1),
            parseInt(startingCoordinate2) + 2,
          ];
          coordinates4 = [
            parseInt(startingCoordinate1),
            parseInt(startingCoordinate2) + 3,
          ];
          coordinates5 = [
            parseInt(startingCoordinate1),
            parseInt(startingCoordinate2) + 4,
          ];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
            coordinates5,
          ]);
          this.updateTiles(player);
        }
        if (typeof ship === "object") {
          let selectedValue = field_shipLength.value;
          let selectedOption = document.querySelector(
            'option[value="' + selectedValue + '"]',
          );
          field_shipLength.removeChild(selectedOption);
        } else {
          alert("The tiles you selected are not empty!");
        }
      }
    });
  }
  clearGameboard(player) {
    for (let i = 0; i < player.gameboard.board.length; i++) {
      for (let j = 0; j < player.gameboard.board[i].length; j++) {
        if (player.gameboard.board[i][j] !== null) {
          player.gameboard.board[i][j] = null;
        }
      }
    }
    this.updateTiles(player);
  }
  placeRandomShips(player) {
    let shipLengthsRemaining = [5, 4, 4, 3, 3, 3, 2, 2];
    let orientations = ["horizontal", "vertical"];

    this.clearGameboard(player);

    while (shipLengthsRemaining.length !== 0) {
      let random0to7 = Math.floor(Math.random() * 8);
      let chosenLength = shipLengthsRemaining[random0to7];
      let random0or1 = Math.floor(Math.random() * 2);
      let chosenOrientation = orientations[random0or1];

      let coordinate1 = Math.floor(Math.random() * 10);
      let coordinate2 = Math.floor(Math.random() * 10);

      let ship;

      if (chosenOrientation == "horizontal") {
        let coordinates1 = [coordinate1, coordinate2];
        let coordinates2 = [coordinate1 + 1, coordinate2];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (chosenLength == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (chosenLength == 3) {
          coordinates3 = [coordinate1 + 2, coordinate2];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
          ]);
          this.updateTiles(player);
        } else if (chosenLength == 4) {
          coordinates3 = [coordinate1 + 2, coordinate2];
          coordinates4 = [coordinate1 + 3, coordinate2];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
          ]);
          this.updateTiles(player);
        } else if (chosenLength == 5) {
          coordinates3 = [coordinate1 + 2, coordinate2];
          coordinates4 = [coordinate1 + 3, coordinate2];
          coordinates5 = [coordinate1 + 4, coordinate2];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
            coordinates5,
          ]);
          this.updateTiles(player);
        }
        if (!(ship instanceof Error)) {
          shipLengthsRemaining.splice(random0to7, 1);
        }
      } else {
        let coordinates1 = [coordinate1, coordinate2];
        let coordinates2 = [coordinate1, coordinate2 + 1];
        let coordinates3;
        let coordinates4;
        let coordinates5;
        if (chosenLength == 2) {
          ship = player.gameboard.placeShip([coordinates1, coordinates2]);
          this.updateTiles(player);
        } else if (chosenLength == 3) {
          coordinates3 = [coordinate1, coordinate2 + 2];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
          ]);
          this.updateTiles(player);
        } else if (chosenLength == 4) {
          coordinates3 = [coordinate1, coordinate2 + 2];
          coordinates4 = [coordinate1, coordinate2 + 3];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
          ]);
          this.updateTiles(player);
        } else if (chosenLength == 5) {
          coordinates3 = [coordinate1, coordinate2 + 2];
          coordinates4 = [coordinate1, coordinate2 + 3];
          coordinates5 = [coordinate1, coordinate2 + 4];
          ship = player.gameboard.placeShip([
            coordinates1,
            coordinates2,
            coordinates3,
            coordinates4,
            coordinates5,
          ]);
          this.updateTiles(player);
        }
        if (!(ship instanceof Error)) {
          shipLengthsRemaining.splice(random0to7, 1);
        }
      }
    }
  }
}

// testing zone
let game = new DOMManipulator();
player1 = game.createPlayer("player1", true);
game.placeRandomShips(player2);

// random ships for you
let randomPressed = false;
let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", () => {
  game.placeRandomShips(player1);
  randomPressed = true;
});
