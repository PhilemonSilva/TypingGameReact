import React from "react";
import "./index.css";

const GameTextDisplay = ({clearedCharacters, currentCharacter, remainingCharacters, ...props}) => {
    return (<>
        <div className="gameTextDisplay">
            <p>
                <span className="clearedCharacters">{clearedCharacters}</span>
                <span className="currentCharacter">{currentCharacter}</span>
                <span className="remainingCharacters">{remainingCharacters}</span>
            </p>
        </div>
      </>
    );
};
export default GameTextDisplay;