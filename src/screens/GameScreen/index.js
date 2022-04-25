import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameTextDisplay from "./GameTextDisplay/index";
import TimeDisplay from "./TimeDisplay/index"
import GameInputHandler from "./GameInputHandler/index"
import "./index.css";

const GameScreen = ({setBeginTime, setEndTime, textToMatch, ...props}) => {
  const navigate = useNavigate();

  const [clearedCharacters, setClearedCharacters] = useState('');
  const [currentCharacter, setCurrentCharacter] = useState('');
  const [remainingCharacters, setRemainingCharacters] = useState(textToMatch);

  useEffect(()=>{
    setBeginTime(Date.now());
  }, [])

  const endGame = () => {
    setEndTime(Date.now());
    navigate("/scoreboard", { replace: true })
  }

  return (
  <>
    <div 
      className='centerAll' 
      {...props}
    >
      <h1 className="prompt">Type the Sentence!!!</h1>
      <TimeDisplay/>
      <GameTextDisplay 
        clearedCharacters={clearedCharacters} 
        currentCharacter={currentCharacter} 
        remainingCharacters={remainingCharacters}
      />
      <GameInputHandler
        setClearedCharacters={setClearedCharacters}
        setCurrentCharacter={setCurrentCharacter}
        setRemainingCharacters={setRemainingCharacters}
        textToMatch={textToMatch}
        endGame={endGame}
      />
    </div>
  </>
  );
};
export default GameScreen;