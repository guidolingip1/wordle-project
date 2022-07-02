import "./Modal.styles.css";

interface ModalProps {
  isCorrect: boolean;
  turn: number;
  solution: any;
}

export const Modal: React.FC<ModalProps> = ({ isCorrect, turn, solution }) => (
  <div className="modal">
    {isCorrect && (
      <div>
        <h1>You win!</h1>
        <p className="solution">{solution}</p>
        <p>You found the solution in {turn} guesses</p>
        <button
          onClick={() => {
            document.location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    )}
    {!isCorrect && (
      <div>
        <h1>Nevermind</h1>
        <p className="solution">{solution}</p>
        <p>Better luck next time :)</p>
        <button
          onClick={() => {
            document.location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    )}
  </div>
);
