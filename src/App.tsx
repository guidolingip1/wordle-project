/* Imports */
import { useEffect, useState } from "react";
import { GameComponent } from "./components/Game/Game.component";

/* Styles */
import "./App.css";

function App() {
  let [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
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
