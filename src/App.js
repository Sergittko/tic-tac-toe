import style from "./App.module.scss";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

function App() {
  return (
    <div className={style.gameContainer}>
      <PlayerInfo />
    </div>
  );
}

export default App;
