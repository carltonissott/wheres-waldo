import { useState } from "react";
import "./App.css";
import GameFinish from "./components/GameFinish";
import Gamestart from "./components/Gamestart";
import Header from "./components/Header";
import WaldoImage from "./components/WaldoImage";

function App() {
  const [started, setStarted] = useState(false);
  const [finished,setFinished] = useState(false)
  const [currentPlayer,setCurrentPlayer] =useState(null)

  const gameStartHandler = (e) => {
    setStarted(true);
  };

  const setPlayer = (e)=>{
    setCurrentPlayer(e)
  }

  const gameFinishHandler = (e)=>{
    setFinished(true)
    setStarted(false)
  }

  return (
    <div className="App">
      {finished && <GameFinish/>}
      {!started && !finished && <Gamestart gameStart={gameStartHandler} currentPlayer={setPlayer} />}
      <Header started={started} finished={finished} currentPlayer={currentPlayer} />
      <WaldoImage finished={gameFinishHandler} />
    </div>
  );
}

export default App;
