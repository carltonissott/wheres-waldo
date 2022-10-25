import { useEffect } from "react";
import { useCallback, useState } from "react";
import loading from "../assets/icons8-spinner.gif";

const GameFinish = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [loadedScores, setLoadedScores] = useState([]);
  const fetchScoresHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://where-s-waldo-leaderboard-default-rtdb.firebaseio.com/scores.json"
      );
      if (!response.ok) {
        throw new Error("Uh oh! Can't load scores");
      }

      const data = await response.json();
      const scores = [];

      for (const key in data) {
        scores.push({
          id: key,
          name: data[key].name,
          time: data[key].time,
        });
      }

      scores.sort((a,b)=> parseFloat(a.time) - parseFloat(b.time))

      setLoadedScores(scores);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const playAgainHandler = () =>{
    window.location.reload()
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      fetchScoresHandler();
    }, 2000);
    return () => clearTimeout(timer);
  }, [fetchScoresHandler]);

  return (
    <div className="modal">
      <div className="modal-center">
        <div className="scores">
          <h3>Top 5 Scores:</h3>
          {isLoading && <img src={loading} alt="loading..." />}
          {!isLoading && (
            <ol>
              {loadedScores.slice(0,5).map((score) => {
                return (
                  <li key={score.id}>
                    {score.name} <b>{score.time} second</b>
                  </li>
                );
              })}
            </ol>
          )}
          <button onClick={playAgainHandler}>Play Again!</button>
        </div>
      </div>
    </div>
  );
};
export default GameFinish;
