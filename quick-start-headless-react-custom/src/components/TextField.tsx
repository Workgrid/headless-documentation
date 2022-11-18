import * as React from "react";
import MuiTextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TextField = (props) => {
  const { size = "small", variant = "outlined", onChange } = props;
  console.log("PROPS UPDATED");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (onChange) onChange(newValue);
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <MuiTextField sx={{ width: '100%' }}
        {...props}
        size={size}
        variant={variant}
        onChange={handleChange}
        onBlur={handleChange}
      />
    </Box>
  );
};

export default TextField
