import React from "react";

import { LeftSession, MainLogin, RightSession, TituloLogin } from "./styles";
import Capa from './Components.js'

import Login from "../LoginCard";

function Main() {
  return (
    <>
      <MainLogin>
        <LeftSession>
          <TituloLogin>
            Seja bem vindo de volta!
          </TituloLogin>
          <Capa></Capa>
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
