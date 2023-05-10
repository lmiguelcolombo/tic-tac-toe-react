import React, { useState } from "react";
import "./board.css";
import "../App.css";

// function PatternsToWin() {
//   const patterns = [[]];
//   return;
// }

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // output: [ [null], [null], ...9x ]

  const handleClick = (i) => {
    // i is passed as a param for allowing the function to fill any square by the index
    const nextSquares = squares.slice();
    // creates a copy of the array "squares"
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };

  return (
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
  );
}
