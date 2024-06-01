import "./App.css";
import { useState } from "react";
import WindowScore from "./assets/Components/WindowScore.jsx";
import WindowPopUps from "./assets/Components/WindowPopUps.jsx";
import "../node_modules/animate.css/animate.min.css";

function App() {
  const [popups, setpopups] = useState(false);
  const [score, setScore] = useState(0);

  console.log(popups);
  return (
    <main className="main-container">
      {popups ? (
        <WindowPopUps score={score} setpopups={setpopups} popups={popups} />
      ) : (
        <WindowScore
          score={score}
          setScore={setScore}
          setpopups={setpopups}
          popups={popups}
        />
      )}
    </main>
  );
}

export default App;
