import style from "./App.module.scss";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Game from "./components/Game/Game";
import { useState } from "react";
import { resizeWidth } from "./assets/resizeStyles";

function App() {
  const [firstPlayer, setFirstPlayer] = useState(true);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [firstPlayerWins, setFirstPlayerWins] = useState(0);
  const [secondPlayerWins, setSecondPlayerWins] = useState(0);
  const [selectedSize, setSelectedSize] = useState(9);
  const [currentGameSize, setCurrentGameSize] = useState(selectedSize);

  const handleSizeChange = (e) => {
    setSelectedSize(+e.target.value);
  };

  return (
    <div className={style.gameContainer} style={resizeWidth(currentGameSize)}>
      <div className={style.playerInfo}>
        <PlayerInfo player={1} wins={firstPlayerWins} />
        <div className={style.gameInformation}>
          <div>
            <label htmlFor="grid-size">Виберіть розмір:</label>
            <select
              id="grid-size"
              value={selectedSize}
              onChange={handleSizeChange}
              className={style.sizeSelect}
            >
              <option value={9}>3x3</option>
              <option value={16}>4x4</option>
              <option value={25}>5x5</option>
            </select>
          </div>
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
        setCurrentGameSize={setCurrentGameSize}
        currentGameSize={currentGameSize}
        selectedSize={selectedSize}
      />
    </div>
  );
}

export default App;
