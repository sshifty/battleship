import { displayDom } from "./displayDom";
import { gameBoard } from "./gameBoardFactory";
import { makeShip } from "./shipFactory";
import { player } from "./player";
import style from './style.css';

const modal = document.querySelector(".modal");
const checkWinner = (winner, gamePlay) => {
  const winnerText = document.querySelector(".winner");
  const button = document.querySelector(".btn");
  if (winner.length != 0) {
    winnerText.textContent = `The Winner Is ${winner} !`;
    modal.style.display = "block";
  }
  button.addEventListener("click", gamePlay);
};
const gamePlay = () => {
  modal.style.display = "none";
  let winner = "";
  const playerShips = [
    makeShip(5),
    makeShip(4),
    makeShip(3),
    makeShip(2),
    makeShip(1),
  ];
  const compShips = [
    makeShip(5),
    makeShip(4),
    makeShip(3),
    makeShip(2),
    makeShip(1),
  ];
  const playerDeck = gameBoard(playerShips);
  const compDeck = gameBoard(compShips);
  const player1 = player();
  const computer = player();
  computer.setTurn(false);
  const compGuess = () => {
    if (!playerDeck.getAllSunk() && computer.getTurn()) {
      let [x, y] = computer.guessShip(playerDeck);

      playerDeck.receieveAttack(x, y);

      let div = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      if (playerDeck.getBoard()[x][y] === "x") {
        div.classList.add("fired");
      } else if (playerDeck.getBoard()[x][y] === "") {
        div.classList.add("missed");
      }
      if (playerDeck.getAllSunk()) {
        winner = "The Computer";
        checkWinner(winner, gamePlay);
      }
      player1.setTurn(true);
      computer.setTurn(false);
    }
  };
  const clickAttack = (e) => {
    if (!compDeck.getAllSunk() && player1.getTurn()) {
      let x = +e.target.dataset.x;
      let y = +e.target.dataset.y;
      if (player1.playerClick(compDeck, x, y)) {
        compDeck.receieveAttack(x, y);
        if (compDeck.getBoard()[x][y] === "x") {
          e.target.classList.add("fired");
        } else if (compDeck.getBoard()[x][y] === "") {
          e.target.classList.add("missed");
        }
        if (compDeck.getAllSunk()) {
          winner = "You";
          checkWinner(winner, gamePlay);         
        }
        player1.setTurn(false);
        computer.setTurn(true);
        compGuess();
      }
    }
  };
  if (winner) {
    console.log(winner);
  }

  displayDom(playerDeck, compDeck, clickAttack);
};
gamePlay();
