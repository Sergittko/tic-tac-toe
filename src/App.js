import style from "./App.module.scss";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Game from "./components/Game/Game";
import { useState } from "react";

function App() {
  const [firstPlayer, setFirstPlayer] = useState(true);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [firstPlayerWins, setFirstPlayerWins] = useState(0);
  const [secondPlayerWins, setSecondPlayerWins] = useState(0);

  return (
    <div className={style.gameContainer}>
      <div className={style.playerInfo}>
        <PlayerInfo player={1} wins={firstPlayerWins} />
        <div className={style.gameInformation}>
          <span className={style.playerMove}>
            Xодить гравець: {firstPlayer ? "1" : "2"}
          </span>
          <span className={style.playerMove}>Зіграних ігор: {gamesPlayed}</span>
        </div>
        <PlayerInfo player={2} wins={secondPlayerWins} />
      </div>
      <Game
        firstPlayer={firstPlayer}
        setFirstPlayer={setFirstPlayer}
        setGamesPlayed={setGamesPlayed}
        setFirstPlayerWins={setFirstPlayerWins}
        setSecondPlayerWins={setSecondPlayerWins}
      />
    </div>
  );
}

export default App;
