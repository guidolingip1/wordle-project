/*Styles*/
import "./Row.styles.css";

interface RowComponentProps {
  guess?: any;
  currentGuess?: any;
}

export const RowComponent: React.FC<RowComponentProps> = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row-container past">
        {guess.map((l: any, i: any) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="row-container current">
        {letters.map((letter: any, i: any) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
