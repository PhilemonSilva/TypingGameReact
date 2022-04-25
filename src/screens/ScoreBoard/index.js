import React, { useState, useCallback, useEffect } from "react";
import CurrentUserData from "./CurrentUserData/index"
import RetryButton from "./RetryButton/index"
import "./index.css";

// Generic list used for the Score Board is there is none in cache.
let genericUsersHistory = [
    { name: 'A nerd', timeSpent: 87955, wpm: 36.8370 },
    { name: 'The developer', timeSpent: 100635, wpm: 32.1956 }, 
    { name: 'Teacher', timeSpent: 109670, wpm: 29.5432 },
    { name: 'Andre', timeSpent: 64617, wpm: 50.1416 },
    { name: 'Bob', timeSpent: 80392, wpm: 40.3025 }
];

const userHistoryKey = 'user_history_cache';

const ScoreBoard = ({user, ...props}) => {
    const [userHistory, setUserHistory] = useState();
    const [cellRows, setCellRows] = useState([]);

    useEffect(()=>{
        const userScores= [];
        const cachedHistory = JSON.parse(localStorage.getItem(userHistoryKey));
        if(cachedHistory){
            userScores.push(...cachedHistory)
        }
        else{
            userScores.push(...genericUsersHistory);
        }

        if(user && user.name && user.timeSpent && user.wpm){
            userScores.push(user);
        }
        userScores.sort((a, b) =>  b.wpm - a.wpm);
        let orderedHistory = userScores.slice(0, 10);
        setUserHistory(orderedHistory);
    }, [user.name, user.timeSpent, user.wpm]);

    useEffect(()=>{
        if(userHistory && userHistory.length > 0){
            localStorage.setItem(userHistoryKey, JSON.stringify(userHistory));
            setCellRows(
                userHistory.map((u, index)=>{
                    return (
                        <tr>
                            <td className={user.wpm === u.wpm ? 'bold': ''}>{'#' + (index + 1)}</td>
                            <td className={user.wpm === u.wpm ? 'bold': ''}>{u.name}</td>
                            <td className={user.wpm === u.wpm ? 'bold': ''}>{u.timeSpent + 'ms'}</td>
                            <td className={user.wpm === u.wpm ? 'bold': ''}>{u.wpm.toFixed(4) + 'wpm'}</td>
                        </tr>
                    );
                })
            );
        }
        
    }, [userHistory])

    return (
    <>
        <div className='centerAll'>
            <CurrentUserData user={user}/>
            <table className="score">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Time</th>
                    <th>WPM</th>
                  </tr>
                </thead>
                <tbody>
                    {cellRows}
                </tbody>
            </table>
            <RetryButton/>
        </div>
    </>
    );
};
export default ScoreBoard;