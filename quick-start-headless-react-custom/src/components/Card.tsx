import { AdaptiveCardUsingHostConfigContext } from "adaptivecards-react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  padding: 5px;
  margin-top: 15px;
  width: 100%;
  max-width: 400px;
`;

const Card = ({ card, onActionSubmit, onExecuteAction }) => {
  return (
    <StyledPaper elevation={3}>
      <AdaptiveCardUsingHostConfigContext
        payload={card}
        onActionSubmit={onActionSubmit}
        onExecuteAction={onExecuteAction}
      />
    </StyledPaper>
  );
};

export default Card;
