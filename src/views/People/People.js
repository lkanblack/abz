import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./people.scss";

function People() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setUsers(data.users);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <section className="people">
        <h1>Working with GET request</h1>
        <div className="people-wrap">
          {users.map((user) => (
            <Card
              key={user.id}
              img={user.photo}
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
        <Button text="Show more" />
      </section>
    </div>
  );
}

export default People;
