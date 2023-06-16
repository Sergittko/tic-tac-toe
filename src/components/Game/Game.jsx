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
}) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  const handleClick = (index) => {
    if (squares[index] || checkWinner(squares)) return;
    const newSquares = [...squares];
    newSquares[index] = firstPlayer ? 1 : 2;
    setSquares(newSquares);
    setFirstPlayer(!firstPlayer);
  };

  const finishGame = (draw = false) => {
    const winner = checkWinner(squares);
    (draw || winner) && setShowModal(true);
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
    setFirstPlayer(true);
    setSquares(Array(9).fill(null));
  };

  useEffect(() => {
    if (!squares.some((el) => el === null)) return finishGame(true);
    if (checkWinner(squares)) return finishGame();
  }, [squares]);

  return (
    <div>
      <Board squares={squares} onSquareClick={handleClick} />
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
