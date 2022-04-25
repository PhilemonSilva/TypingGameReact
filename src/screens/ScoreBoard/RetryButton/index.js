import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

const RetryButton = ({ ...props}) => {

  const navigate = useNavigate();

  return (
    <>
        <Button 
          color='green'
          onClick={()=> navigate("/", { replace: true })}
          style={{marginTop: '10px'}}
          {...props}
        >
          RETRY
        </Button>
    </>
  );
};
export default RetryButton;