import style from "./Square.module.scss";
import { ReactComponent as Xmark } from "../../../img/xmark.svg";
import { ReactComponent as Ocircle } from "../../../img/ocircle.svg";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className={style.squareContiner} onClick={() => onSquareClick()}>
      {value === 1 ? (
        <Xmark
          fill="#31c4be"
          width={"55%"}
          height={"55%"}
          className={style.squareIcon}
        />
      ) : value === 2 ? (
        <Ocircle
          fill="#f2b237"
          width={"50%"}
          height={"50%"}
          className={style.squareIcon}
        />
      ) : null}
    </button>
  );
};

export default Square;
