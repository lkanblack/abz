import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./people.scss";

function People() {
  return (
    <div className="container">
      <section className="people">
        <h1>Working with GET request</h1>
        <div className="people-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button text="Show more" />
      </section>
    </div>
  );
}

export default People;
