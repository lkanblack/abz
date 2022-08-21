import { TextField } from "@mui/material";
import React from "react";
import RadioBtns from "../RadioBtns/RadioBtns";

import "./postform.scss";

function PostForm() {
  return (
    <form className="post-form">
      <TextField label="Your name" placeholder="Your Name" fullWidth />
      <TextField label="Email" placeholder="Email" fullWidth />
      <TextField label="Phone" placeholder="Phone" fullWidth />
      <RadioBtns />
    </form>
  );
}

export default PostForm;
