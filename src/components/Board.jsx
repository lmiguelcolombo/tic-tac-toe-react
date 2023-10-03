import React, { useState } from "react";
import "./board.css";
import "../App.css";

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  // this state will allow us to change the user that is playing by saying whether or not X is next

  const [squares, setSquares] = useState(Array(9).fill(null));
  // output: [ [null], [null], ...9x ]
  // now that the squares' states are stored in this component, we'll be allowed to determine the winner

  const handleClick = (i) => {
    // i is passed as a param for allowing the function to fill any square by the index
    if (squares[i] || checkWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice(); // creates a copy of the array "squares"

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares); // squares = nextSquares;
    setXIsNext(!xIsNext);
    // TODO: check xIsNext
  };

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }

  const handleResetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className={winner ? "status" : "none"}>
        {status}
        <button onClick={() => handleResetGame()}>Play Again</button>
      </div>
    </div>
  );
}

// TODO: Understand this function
function checkWinner(squares) {
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < patterns.length; i++) {
    const [a, b, c] = patterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
