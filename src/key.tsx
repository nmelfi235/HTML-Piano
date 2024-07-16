import { MouseEventHandler } from "react";
import { useState } from "react";

interface propTypes {
  className: string;
  key: number;
}

export default function Key(props: propTypes) {
  const [playing, setPlaying] = useState(false);
  const keySound = new Audio("assets/piano-g.mp3");
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setPlaying(true);
    keySound.play();
  };

  return (
    <div
      key={props.key}
      className={
        playing ? props.className + " key playing" : props.className + " key"
      }
      onClick={handleClick}
    >
      <p style={{ transform: "rotate(90deg)" }}>{props.className}</p>
    </div>
  );
}
