import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Timer from "./screens/Timer";
import GameScreen from "./screens/GameScreen"
import ScoreBoard from "./screens/ScoreBoard"

// Text that the user has to type in:
let textToMatch = 'The foolishness of men who care, Dalinar, and the brilliance of those who do not. ' +
'The second depend on the first - but also exploit the first - while the first misunderstand the second, ' +
'hoping that the second are more like the first. And all of their games steal our time. Second by second.';

function App() {
  
  const [beginTime, setBeginTime] = useState(); //Time of start of the game match
  const [endTime, setEndTime] = useState();     //Time of end of the game match
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');

  useEffect(()=>{
    if(userName && beginTime && endTime){
      let timeSpentInMiliseconds = endTime - beginTime;
      let user = {
        name: userName,
        timeSpent: timeSpentInMiliseconds,
        wpm: calculateWordsPerMinute(timeSpentInMiliseconds)
      };
      setUser(user);
    }
  }, [beginTime, endTime, userName]);

  const calculateWordsPerMinute = (timeSpentInMiliseconds) => {
    return textToMatch.split(" ").length / ((timeSpentInMiliseconds / 1000) / 60);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact path="/" element={
              <HomeScreen 
                userName={userName} 
                setUserName={setUserName}
              />
            }
          />
          <Route exact path="/timer" element={ <Timer/> }/>
          <Route exact path="/game" element={ 
              <GameScreen 
                setBeginTime={setBeginTime}
                setEndTime={setEndTime}
                textToMatch={textToMatch}
              /> 
            } 
          />
          <Route exact path="/scoreboard" element={ 
              <ScoreBoard
                user={user}
              /> 
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
