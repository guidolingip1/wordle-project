import { useEffect, useState } from "react";
import useWordle from "../../hooks/useWordle";
import { GridComponent } from "../Grid/Grid.component";
import { Keyboard } from "../Keyboard/Keyboard.component";
import { Modal } from "../Modal/Modal.component";

/* Styles */
import "./Game.styles.css";

interface GameProps {
  solution?: string;
  word?: string;
}

export const GameComponent: React.FC<GameProps> = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      <div className="GameComponent-container">
        <div>
          <GridComponent currentGuess={currentGuess} guesses={guesses} turn={turn} />
          {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
      </div>
      <div className="keyboard-container">
        <Keyboard usedKeys={usedKeys} />
      </div>
    </>
  );
};
