import { useState } from "react";
import { useEffect } from "react";

const Timer = (props) => {
  const started = props.started;
  const finished = props.finished;

  async function addScore(score) {
    await fetch(
      "https://where-s-waldo-leaderboard-default-rtdb.firebaseio.com/scores.json",
      {
        method: "POST",
        body: JSON.stringify(score),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  const currentPlayer = props.currentPlayer;
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (started === true) {
      const timer = setTimeout(() => {
        setTime(time + 0.1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (finished === true) {
      addScore({
        name: currentPlayer,
        time: (Math.round(time * 100.0) / 100.0).toFixed(2),
      });
    }
  }, [time, started, finished, currentPlayer]);

  return <h2>{(Math.round(time * 100.0) / 100.0).toFixed(2)}</h2>;
};

export default Timer;
