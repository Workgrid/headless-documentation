import { AdaptiveCardUsingHostConfigContext } from "adaptivecards-react";
import * as React from "react";
import Paper from "@mui/material/Paper";

const Card = ({ card, onActionSubmit, onExecuteAction }) => {
  return (
    <Paper elevation={3} sx={{ 
      padding: '5px',
      marginTop: '15px',
      width: '100%',
      maxWidth: '400px' }}>
      <AdaptiveCardUsingHostConfigContext
        payload={card}
        onActionSubmit={onActionSubmit}
        onExecuteAction={onExecuteAction}
      />
    </Paper>
  );
};

export default Card;
