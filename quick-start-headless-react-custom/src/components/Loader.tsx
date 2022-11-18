import * as React from "react";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Paper elevation={3} sx={{     
        padding: '5px',
        marginTop: '15px',
        width: '100%',
        maxWidth: '400px'
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          paddingBottom: "50px"
        }}>
        <CircularProgress />
      </Box>
    </Paper>
  );
};
export default Loader
