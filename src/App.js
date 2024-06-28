import React, { useState, useEffect } from "react";
import wall from "../src/images/wall.png";
import coin from "../src/images/coin.png";
import pacman from "../src/images/pacman.png";
import bg from "../src/images/bg.png";
import ghost from "../src/images/ghost2.png";
import "./App.css";

const PacManGame = () => {
  const [pacman, setPacman] = useState({ x: 6, y: 4 });
  const [map, setMap] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);
  const [gameOver, setGameOver] = useState(false);
  const handleKeyDown = (event) => {
    if (gameOver) {
      return;
    }
    if (
      event.keyCode === 37 &&
      pacman.x > 0 &&
      map[pacman.y][pacman.x - 1] !== 1
    ) {
      setMap((prevMap) => {
        const newMap = [...prevMap];
        newMap[pacman.y][pacman.x] = 3;
        setPacman((prevPacman) => ({
          ...prevPacman,
          x: prevPacman.x - 1,
        }));
        newMap[pacman.y][pacman.x - 1] = 5;
        return newMap;
      });
    }
  };
};

export default PacManGame;
