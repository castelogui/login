import React, { useState, useEffect } from "react";

//import UserItem from "../Profile";

import api from "../../services/api";
import "./styles.css";

import { Container } from "./styles";

function Dashbord() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <>
      <div id="app">
        <section>
          <Container>
            <main>
              <ul className="user-list">
                {users.map((user) => (
                  <li className="user-item">
                    <header>
                      <div className="user-info">
                        <h3>
                          {user.name_user} {user.lastname_user}
                        </h3>
                        <strong>{user.username_user}</strong>
                      </div>
                    </header>
                    <p>{user.on_user}</p>
                    <p>{user.dataNasc_user}</p>
                    <div className="link">
                      <a href={user.email_user}>{user.email_user}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          </Container>
          <footer></footer>
        </section>
      </div>
    </>
  );
}

export default Dashbord;
