import React from "react";
import { FormControlLabel, Radio } from "@mui/material";

function RadioBtn({ value, label }) {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          sx={{
            color: "#D0CFCF",
            "&.Mui-checked": {
              color: "#00BDD3",
            },
          }}
        />
      }
      label={label}
    />
  );
}

export default RadioBtn;
