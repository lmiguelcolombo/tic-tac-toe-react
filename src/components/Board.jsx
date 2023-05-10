import React, { useState } from "react";
import "./board.css";
import "../App.css";

function Square() {
  const [user, setUser] = useState("");

  const handleClick = () => {
    setUser("X");
  };

  return (
    <button onClick={handleClick} className="square">
      {user}
    </button>
  );
}

export default function Board() {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
