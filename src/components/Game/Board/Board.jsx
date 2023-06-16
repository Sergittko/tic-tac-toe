import style from "./Board.module.scss";
import Square from "./../Square/Square";

const Board = ({ squares, onSquareClick, showPreloader }) => {
  return (
    <div className={style.boardContainer}>
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
