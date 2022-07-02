import "./Keyboard.styles.css";

const keys = [
  { key: "a" },
  { key: "b" },
  { key: "c" },
  { key: "d" },
  { key: "e" },
  { key: "f" },
  { key: "g" },
  { key: "h" },
  { key: "i" },
  { key: "j" },
  { key: "k" },
  { key: "l" },
  { key: "m" },
  { key: "n" },
  { key: "o" },
  { key: "p" },
  { key: "q" },
  { key: "r" },
  { key: "s" },
  { key: "t" },
  { key: "u" },
  { key: "v" },
  { key: "w" },
  { key: "x" },
  { key: "y" },
  { key: "z" },
];

interface KeyboardProps {
  usedKeys: any;
}

export const Keyboard: React.FC<KeyboardProps> = ({ usedKeys }) => (
  <div className="keyboard">
    {keys.map((l) => {
      const color = usedKeys[l.key];
      return (
        <div key={l.key} className={color}>
          {l.key}
        </div>
      );
    })}
  </div>
);
