import * as React from "react";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  padding: 5px;
  margin-top: 15px;
  width: 100%;
  max-width: 400px;
`;

export default () => {
  return (
    <StyledPaper elevation={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          paddingBottom: "50px"
        }}
      >
        <CircularProgress />
      </Box>
    </StyledPaper>
  );
};
