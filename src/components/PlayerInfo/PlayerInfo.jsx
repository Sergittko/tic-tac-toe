import style from "./PlayerInfo.module.scss";
import { ReactComponent as Xmark } from "../../img/xmark.svg";
import { ReactComponent as Ocircle } from "../../img/ocircle.svg";

const PlayerInfo = ({ player, wins }) => {
  return (
    <div
      className={style.playerInfoContiner}
      style={
        player === 1
          ? { backgroundColor: "#31c4be" }
          : { backgroundColor: "#f2b237" }
      }
    >
      <p className={style.player}>Гравець {player}</p>
      <p>
        Символ:
        <span>
          {player === 1 ? (
            <Xmark
              fill="#31c4be"
              width={"18px"}
              height={"18px"}
              className={style.playerIcon}
            />
          ) : (
            <Ocircle
              fill="#f2b237"
              width={"18px"}
              height={"18px"}
              className={style.playerIcon}
            />
          )}
        </span>
      </p>
      <p>
        Перемог: <span>{wins}</span>
      </p>
    </div>
  );
};

export default PlayerInfo;
