import React from "react";

function PostForm() {
  return (
    <form>
      <label>
        Имя:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
}

export default PostForm;
