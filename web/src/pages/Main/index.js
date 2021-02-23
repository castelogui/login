import React from "react";

import { Container } from "./styles";

import Login from "../LoginCard";

function Main() {
  return (
    <>
      <section>
        <main>
          <Container>
            <Login></Login>
          </Container>
        </main>
        <footer></footer>
      </section>
    </>
  );
}

export default Main;
