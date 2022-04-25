import React from "react";
import './index.css';

const TitleAnimation = ({...props}) => {

  return (
    <>
    <div className="wrapper" {...props}>
        <div className="typing-demo">
            Typing Game
        </div>
    </div>
        
    </>
  );
};
export default TitleAnimation;