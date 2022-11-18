import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as MuiXDatePickers from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";

const MuiDatePicker = MuiXDatePickers.DatePicker

const DatePicker =(props) => {
  const { onChange, required, label } = props;
  const [value, setValue] = useState(null);

  const handleNewValue = (newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue); 
  };

  const handleOnChange = (newValue) => {
    let value = newValue;
    try {
      value = newValue.toISOString();
    } catch {}
    handleNewValue(value ? value : null);
  };

  const handleOnBlur = (e) => {
    handleNewValue(e.target.value);
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          value={value}
          onChange={handleOnChange}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label={label}
                error={false}
                onBlur={handleOnBlur}
                required={required}
                size="small"
              />
            );
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
export default DatePicker
