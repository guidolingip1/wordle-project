import { RowComponent } from "../Row/Row.component";

/*Styles*/
import "./Grid.styles.css";

interface GridComponentProps {
  currentGuess: string;
  guesses: Array<any>;
  turn: number;
}

export const GridComponent: React.FC<GridComponentProps> = ({ currentGuess, guesses, turn }) => {
  return (
    <div className="Grid-container">
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <RowComponent key={i} currentGuess={currentGuess} />;
        }
        return <RowComponent key={i} guess={guess} />;
      })}
    </div>
  );
};
