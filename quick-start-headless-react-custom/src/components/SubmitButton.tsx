import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default (props) => {
  const { label } = props;

  return (
    <Button {...props} endIcon={<SendIcon />}>
      {label ? label : null}
    </Button>
  );
};
