import style from "./Board.module.scss";
import Square from "./../Square/Square";

const Board = ({ squares, onSquareClick, showPreloader, currentGameSize }) => {
  const resizeBoard = (size) => {
    switch (size) {
      case 9:
        return {
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridTemplateRows: "1fr 1fr 1fr",
          maxWidth: "435px",
          height: "435px",
        };
      case 16:
        return {
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          maxWidth: "510px",
          height: "510px",
        };
      case 25:
        return {
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
          maxWidth: "570px",
          height: "570px",
        };

      default:
        return {
          gridTemplateColumns: "1fr 1fr  ",
          gridTemplateRows: "1fr 1fr  ",
        };
    }
  };
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
