import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import * as MuiSelect from "@mui/material/Select";

export default (props) => {
  const { label, size = "small", items = [], onChange, required } = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const itemsTemplate = items.map((item, idx) => (
    <MenuItem key={idx} value={item.value}>
      {item.title}
    </MenuItem>
  ));

  return (
    <Box sx={{ minWidth: 120, marginTop: "5px" }}>
      <FormControl fullWidth size={size}>
        {label ? (
          <InputLabel id="label-id" size={size} required={required}>
            {label}
          </InputLabel>
        ) : null}
        <MuiSelect.default
          {...props}
          labelId="label-id"
          size={size}
          value={value}
          onChange={handleChange}
          onBlur={handleChange}
        >
          {itemsTemplate}
        </MuiSelect.default>
      </FormControl>
    </Box>
  );
};
