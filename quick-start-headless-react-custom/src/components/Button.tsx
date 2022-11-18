import * as React from "react";
import Button from "@mui/material/Button";

export default (props) => {
  const { label } = props;
  return <Button {...props}>{label ? label : null}</Button>;
};
