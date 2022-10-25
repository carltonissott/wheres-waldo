import { useState } from "react";
import { useEffect } from "react";

const Dropdown = (props) => {
  const position = {
    top: props.top,
    left: props.left,
  };
  const foundCharacters = props.foundCharacters;
  const buttonHandler = (e) => {
    props.selectedCharacter(e.target.value);
  };

  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    if (foundCharacters.length === 3) {
      setGameFinished(true);
      props.finished(gameFinished);
    }
  }, [foundCharacters, gameFinished, props]);

  return (
    <>
      {!gameFinished && (
        <div>
          <div className="click-circle" style={position} />
          <div style={position} className="dropdown">
            {!foundCharacters.includes("waldo") && (
              <button value={"waldo"} onClick={buttonHandler}>
                Waldo
              </button>
            )}
            {!foundCharacters.includes("odlaw") && (
              <button value={"odlaw"} onClick={buttonHandler}>
                Odlaw
              </button>
            )}
            {!foundCharacters.includes("wizard") && (
              <button value={"wizard"} onClick={buttonHandler}>
                Wizard Whitebeard
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
