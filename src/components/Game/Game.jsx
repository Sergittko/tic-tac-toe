import style from "./Game.module.scss";
import Board from "./Board/Board";
import { useState, useEffect } from "react";
import Modal from "./../Modal/Modal";
import { checkWinner } from "../../assets/GameLogic";

const Game = ({
  firstPlayer,
  setFirstPlayer,
  setGamesPlayed,
  setFirstPlayerWins,
  setSecondPlayerWins,
  currentGameSize,
  setCurrentGameSize,
  selectedSize,
}) => {
  const [squares, setSquares] = useState(Array(currentGameSize).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  const handleClick = (index) => {
    if (squares[index] || checkWinner(squares, currentGameSize)) return;
    const newSquares = [...squares];
    newSquares[index] = firstPlayer ? 1 : 2;
    setSquares(newSquares);
    setFirstPlayer(!firstPlayer);
  };

  const finishGame = (draw = false) => {
    const winner = checkWinner(squares, currentGameSize);
    (draw || winner) && setTimeout(() => setShowModal(true), 2000);
    if (winner) {
      winner === 1
        ? setFirstPlayerWins((prev) => ++prev)
        : setSecondPlayerWins((prev) => ++prev);
      setGamesPlayed((prev) => ++prev);
      return setModalMessage({
        gameStatus: `Гравець ${winner} переміг`,
        message: "Вітаємо!",
      });
    } else if (draw) {
      setGamesPlayed((prev) => ++prev);
      return setModalMessage({
        gameStatus: "Нічия!",
        message: "Спробуйте ще :)",
      });
    }
  };

  const resetGame = () => {
    setCurrentGameSize(selectedSize);
    setShowPreloader(true);
    setFirstPlayer(true);
    setSquares(Array(currentGameSize).fill(null));
    setTimeout(() => setShowPreloader(false), 1000);
  };

  useEffect(() => {
    if (!squares.some((el) => el === null)) return finishGame(true);
    if (checkWinner(squares, currentGameSize)) return finishGame();
  }, [squares]);

  useEffect(() => {
    setSquares(Array(currentGameSize).fill(null));
  }, [currentGameSize]);

  return (
    <div>
      <Board
        squares={squares}
        onSquareClick={handleClick}
        showPreloader={showPreloader}
        currentGameSize={currentGameSize}
      />
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={() => resetGame()}>
          Нова гра
        </button>
      </div>
      {showModal ? (
        <Modal message={modalMessage} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Game;
