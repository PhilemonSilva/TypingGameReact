import React, { useEffect } from "react";
import { Input } from 'semantic-ui-react'

const userNameKey = 'user_name_cache';

const UserNameInput = ({userName, setUserName, setCanStart, ...props}) => {

  useEffect(()=>{
    const un = localStorage.getItem(userNameKey);
    if(un) 
      setUserName(un);
  },[setUserName])

  useEffect(()=>{
    setCanStart(userName.length > 0);
    localStorage.setItem(userNameKey, userName);   
  }, [userName, setCanStart]);

  return (
    <>
        <Input
            value={userName}
            onChange={(_, { value }) => setUserName(value)}
            label={{ basic: true, content: 'UserName: '}}
            placeholder='Carl...'
            size='small'
            {...props}
        />
    </>
  );
};
export default UserNameInput;