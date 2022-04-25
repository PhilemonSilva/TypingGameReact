import React, { useState, useEffect } from "react";
import { Input } from 'semantic-ui-react'
//import "./index.css";

const GameInputHandler = ({
        setClearedCharacters,
        setCurrentCharacter,
        setRemainingCharacters,
        textToMatch,
        endGame,
        ...props
    }) => {

    const [gameText, setGameText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        if(gameText && gameText[gameText.length - 1]){
            validadeCurrentCharacter(gameText[gameText.length - 1]);
        }
    }, [gameText])

    useEffect(()=>{
        if(currentIndex >= (textToMatch.length)){ // Sentence is done:
            endGame();
        }
    }, [currentIndex, textToMatch])
    
    const validadeCurrentCharacter = (currentCharacter) => {
        if(currentCharacter === textToMatch[currentIndex]){ // Success:
          setCurrentCharacter('');
          setClearedCharacters(prevState => {
              let clearedCharacters = prevState;
              return (clearedCharacters + currentCharacter);
          });
          setRemainingCharacters(prevState => {
              let remainingCharacters = prevState;
              return (remainingCharacters.substring(1));
          });
          setCurrentIndex(prevState => {
              let count = prevState;
              return (count+1);
          });
        }
        else{ // Failure:
          setCurrentCharacter(currentCharacter);
        }
    }

    return (
    <>
      <div 
        className='centerAll' 
        {...props}
      >
        <div className="gameInputBox">
            <Input
                value={gameText}
                onChange={(_, { value }) => setGameText(value)}
                id="gameInput" 
                autoComplete="off" 
                className="formElement gameInput"
                autoFocus
            />
        </div>
      </div>
    </>
    );
};
export default GameInputHandler;