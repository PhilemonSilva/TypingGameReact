import React, { useState } from "react";
import { Image } from 'semantic-ui-react'
import UserNameInput from "./UserNameInput/index";
import StartGameButton from "./StartGameButton/index";
import TitleAnimation from "./TitleAnimation/index";

const HomeScreen = ({userName, setUserName, ...props}) => {

  const [canStart, setCanStart] = useState(false);
  return (<>
    <div className='centerAll'>
        <TitleAnimation/>
        <Image src={"/assets/logo.png"} alt="logo" />
        <UserNameInput
          setCanStart={setCanStart} 
          userName={userName}
          setUserName={setUserName}
          {...props}
        />
        <StartGameButton canStart={canStart} />
    </div>
    </>
  );
};
export default HomeScreen;