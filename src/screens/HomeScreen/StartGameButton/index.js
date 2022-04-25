import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

const StartGameButton = ({canStart, ...props}) => {

  const navigate = useNavigate();

  return (
    <>
        <Button 
          color='green'
          disabled={!canStart}
          onClick={()=> navigate("/timer", { replace: true })}
          style={{marginTop: '10px'}}
          {...props}
        >
          START!
        </Button>
    </>
  );
};
export default StartGameButton;