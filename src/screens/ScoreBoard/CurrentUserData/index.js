import React, { useState } from "react";
import "./index.css";

const CurrentUserData = ({user, ...props}) => {

  return (
    <div className='centerAll'>
      <h1 className="prompt">Your Score:</h1>
      <tr>
        <td className='rainbow'>{user?.name}</td>
        <td className='rainbow'>{user?.timeSpent + 'ms'}</td>
        <td className='rainbow'>{user?.wpm?.toFixed(4) + 'wpm'}</td>
      </tr>
    </div>
  );
};
export default CurrentUserData;