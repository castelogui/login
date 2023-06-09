import React from "react";

import { CapaLogin, LeftSession, MainLogin, RightSession, TituloLogin } from "./styles";

import Login from "../LoginCard";

function Main() {
  return (
    <>
      <MainLogin>
        <LeftSession>
          <TituloLogin>
            Seja bem vindo de volta!
          </TituloLogin>
          <CapaLogin></CapaLogin>
        </LeftSession>
        <RightSession>
          <Login></Login>
        </RightSession>
      </MainLogin>
      <footer></footer>
    </>
  );
}

export default Main;
