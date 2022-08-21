import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import RadioBtn from "./RadioBtn";

import "./radioBtns.scss";

function RadioBtns() {
  const [positions, setPositions] = useState([]);

  const fetchData = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setPositions(data.positions);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormControl className="radio-btns">
      <FormLabel>Select your position</FormLabel>

      {positions.length > 0 && (
        <RadioGroup name="radio-buttons-group">
          {positions.map((pos) => (
            <RadioBtn key={pos.id} value={pos.name} label={pos.name} />
          ))}
        </RadioGroup>
      )}
    </FormControl>
  );
}

export default RadioBtns;
