/* Imports */
import { useEffect, useState } from "react";
import { GameComponent } from "./components/Game/Game.component";
import { DB } from "./db";

/* Styles */
import "./App.css";

function App() {
  let [solution, setSolution] = useState<any>(null);

  useEffect(() => {
    const randomSolution = DB[Math.floor(Math.random() * DB.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Wordle</h1>
        </div>
        <div className="game">{solution && <GameComponent solution={solution} />}</div>
      </div>
    </div>
  );
}

export default App;
