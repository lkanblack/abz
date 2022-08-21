import React from "react";
import PostForm from "../../components/PostForm/PostForm";

import "./signup.scss";

function SignUp() {
  return (
    <div className="container signup-container">
      <h1>Working with POST request</h1>
      <PostForm />
    </div>
  );
}

export default SignUp;
