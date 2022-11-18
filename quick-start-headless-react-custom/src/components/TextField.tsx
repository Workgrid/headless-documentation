import * as React from "react";
import * as MuiTextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import styled from "styled-components";

const TextField = (props) => {
  const { size = "small", variant = "outlined", onChange } = props;
  console.log("PROPS UPDATED");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (onChange) onChange(newValue);
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <MuiTextField.default
        {...props}
        size={size}
        variant={variant}
        onChange={handleChange}
        onBlur={handleChange}
      />
    </Box>
  );
};

export default styled(TextField)`
  width: 100%;
`;
