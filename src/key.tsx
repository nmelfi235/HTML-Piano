import { MouseEventHandler } from "react";
import { useState } from "react";

interface propTypes {
  className: string;
  keyNum: number;
}

export default function Key(props: propTypes) {
  const [playing, setPlaying] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setPlaying(true);
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(
      Number((27.5 * Math.pow(2, props.keyNum / 12)).toPrecision(2)),
      audioContext.currentTime
    );
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    setPlaying(false);
  };

  return (
    <div
      key={props.keyNum}
      className={
        playing ? props.className + " key playing" : props.className + " key"
      }
      onClick={handleClick}
    >
      <p style={{ transform: "rotate(90deg)" }}>{props.className}</p>
    </div>
  );
}
