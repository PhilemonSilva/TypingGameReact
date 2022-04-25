import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useNavigate } from "react-router-dom";
import "./index.css";

const Timer = ({...props}) => {
    const navigate = useNavigate();

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer, white">GO!</div>;
        }
      
        return (
          <div className="timer, white">
            <div style={{marginBottom: '20px'}}>Get Ready to Type!</div>
            <div className="value">{remainingTime}</div>
          </div>
        );
    };


    return (
    <div className='centerAll'>
        <CountdownCircleTimer
            isPlaying
            duration={3}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[3, 2, 1, 0]}
            onComplete={() => navigate("/game", { replace: true })}
        >
            {renderTime}
        </CountdownCircleTimer>
    </div>
    );
};
export default Timer;