import React from "react";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import RadioBtn from "./RadioBtn";

import "./radioBtns.scss";

function RadioBtns() {
  return (
    <FormControl className="radio-btns">
      <FormLabel>Select your position</FormLabel>
      <RadioGroup defaultValue="Frontend developer" name="radio-buttons-group">
        <RadioBtn value="Frontend developer" label="Frontend developer" />
        <RadioBtn value="Backend developer" label="Backend developer" />
        <RadioBtn value="Designer" label="Designer" />
        <RadioBtn value="QA" label="QA" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioBtns;
