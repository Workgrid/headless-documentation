import * as React from "react";
import MuiButton from "@mui/material/Button";

const Button = (props) => {
  const { label } = props;
  return <MuiButton {...props}>{label ? label : null}</MuiButton>;
};

export default Button
