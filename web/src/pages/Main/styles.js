import styled from "styled-components";

import Capa from "../../assets/images/capa.png";

export const CapaLogin = () => (
  <div>
    <Capa />
  </div>
);

export const MainLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSession = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RightSession = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TituloLogin = styled.h1`
  color: #ffc100;
`;
