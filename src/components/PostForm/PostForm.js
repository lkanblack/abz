import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import RadioBtns from "../RadioBtns/RadioBtns";
import Button from "../Button/Button";
import UploadBtn from "../UploadBtn/UploadBtn";

import "./postform.scss";

function PostForm() {
  const [token, setToken] = useState("");

  useEffect(() => {
    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((res) => setToken(res.data.token));
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    position_id: 1,
    photo:
      "https://frontend-test-assignment-api.abz.agency/images/users/63039a2fc55427832.jpg",
  });

  function sendToServer(e) {
    e.preventDefault();
    axios
      .post(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          position_id: 1,
          name: "Tom",
          email: "Tom@gmail.com",
          phone: "+380955388485",
          photo:
            "https://frontend-test-assignment-api.abz.agency/images/users/6303d0191cd507841.jpg",
        },
        { headers: { Token: token } }
      )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  }

  function handler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <form className="post-form" onSubmit={(e) => sendToServer(e)}>
      <TextField
        onChange={(e) => handler(e)}
        value={data.name}
        id="name"
        label="Your name"
        placeholder="Your Name"
        fullWidth
      />
      <TextField
        onChange={(e) => handler(e)}
        value={data.email}
        id="email"
        label="Email"
        placeholder="Email"
        fullWidth
      />
      <TextField
        onChange={(e) => handler(e)}
        value={data.phone}
        id="phone"
        label="Phone"
        placeholder="Phone"
        fullWidth
      />
      <RadioBtns />
      <UploadBtn />
      <Button text={"Sign Up"} />
    </form>
  );
}

export default PostForm;
