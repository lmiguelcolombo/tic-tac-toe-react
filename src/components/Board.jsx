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

  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <div className="board">
      <Square value={squares[0]} onSquareClick={handleClick} />
      <Square value={squares[1]} onSquareClick={handleClick} />
      <Square value={squares[2]} onSquareClick={handleClick} />
      <Square value={squares[3]} onSquareClick={handleClick} />
      <Square value={squares[4]} onSquareClick={handleClick} />
      <Square value={squares[5]} onSquareClick={handleClick} />
      <Square value={squares[6]} onSquareClick={handleClick} />
      <Square value={squares[7]} onSquareClick={handleClick} />
      <Square value={squares[8]} onSquareClick={handleClick} />
    </div>
  );
}
