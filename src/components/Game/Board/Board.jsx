import style from "./Board.module.scss";
import Square from "./../Square/Square";

const Board = ({ squares, onSquareClick }) => {
  return (
    <div className={style.boardContainer}>
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
