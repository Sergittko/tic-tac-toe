import style from "./Board.module.scss";
import Square from "./../Square/Square";
import { resizeBoard } from "../../../assets/resizeStyles";

const Board = ({ squares, onSquareClick, showPreloader, currentGameSize }) => {
  return (
    <div className={style.boardContainer} style={resizeBoard(currentGameSize)}>
      {showPreloader ? <div className={style.renewGemePreloader}></div> : null}
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onSquareClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
