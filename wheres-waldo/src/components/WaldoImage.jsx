import { useState, useEffect } from "react";
import waldo1 from "../assets/waldo1.jpg";
import Dropdown from "./Dropdown";
// import waldo2 from "../assets/waldo2.jpg";
// import waldo3 from "../assets/waldo3.jpg";
const imagesrc = [
  {
    src: waldo1,
    waldo: [2560, 1383],
    odlaw: [966, 1220],
    wizard: [206, 1430],
  },
];

const WaldoImage = (props) => {
  const [dropdownShown, setDropdownShown] = useState(false);
  const [xPosition, setXPosition] = useState(null);
  const [yPosition, setYPosition] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState("waldo");
  const [foundCharacters, setfoundCharacters] = useState([]);

  useEffect(() => {
    if (
      xPosition < imagesrc[0][currentCharacter][0] + 50 &&
      xPosition > imagesrc[0][currentCharacter][0] - 50 &&
      yPosition < imagesrc[0][currentCharacter][1] + 50 &&
      yPosition > imagesrc[0][currentCharacter][1] - 50
    ) {
      setfoundCharacters((prevState) => [...prevState, currentCharacter]);
    }
  }, [xPosition, yPosition, currentCharacter]);

  const checkLocation = (e) => {
    setYPosition(e.pageY);
    setXPosition(e.pageX);
    setDropdownShown(true);
  };

  const selectedCharacterHandler = (e) => {
    setCurrentCharacter(e);
  };

  return (
    <div>
      <img onClick={checkLocation} alt="Where's Waldo" src={imagesrc[0].src} />
      {dropdownShown && (
        <Dropdown
          left={xPosition}
          top={yPosition}
          foundCharacters={foundCharacters}
          selectedCharacter={selectedCharacterHandler}
          finished={props.finished}
        />
      )}
    </div>
  );
};

export default WaldoImage;
