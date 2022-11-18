import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

export default (props) => {
  const { onChange, tooltip } = props;
  const [value, setValue] = React.useState("false");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <Box sx={{ marginTop: "5px" }}>
      <FormControlLabel
        {...props}
        labelPlacement="start"
        control={
          <Tooltip title={tooltip}>
            <Switch color="primary" value={value} onChange={handleChange} />
          </Tooltip>
        }
      />
    </Box>
  );
};
