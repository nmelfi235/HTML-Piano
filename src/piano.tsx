import Key from "./key";

export default function Piano() {
  return <div className="piano">{generatePiano()}</div>;
}

function generatePiano() {
  let p = [];
  let names = [
    "A",
    "A# Sharp",
    "B",
    "C",
    "C# Sharp",
    "D",
    "D# Sharp",
    "E",
    "F",
    "F# Sharp",
    "G",
    "G# Sharp",
  ];
  for (let i = 0; i < 88; i++) {
    p.push(<Key key={i} keyNum={i} className={names[i % 12]} />);
  }
  return p;
}
