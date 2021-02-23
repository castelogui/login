import styled from "styled-components";

export const Card = styled.div`
  position: absolute;
  width: 300px;
  height: 421px;
  left: 40vmax;
  top: 10vmax;

  background: linear-gradient(0deg, #e6eef8, #e6eef8), #cfd8dc;
  box-shadow: -10px -10px 40px rgba(253, 255, 255, 0.8),
    10px 10px 40px rgba(187, 195, 206, 0.6);
  border-radius: 16px;
`;

export const Welcome = styled.text`
  position: absolute;
  width: 127px;
  height: 21px;
  left: 87px;
  top: 24px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;

  /* blueGrey600 */

  color: #546e7a;
`;

export const Credencial = styled.input`
  position: absolute;
  width: 250px;
  height: 48px;
  left: 15px;
  top: 141px;
  background: linear-gradient(0deg, #e6eef8, #e6eef8), #cfd8dc;
  box-shadow: inset -4px -4px 12px rgba(253, 255, 255, 0.8),
    inset 4px 4px 12px rgba(187, 195, 206, 0.6);
  border-radius: 16px;
  border: none;
  font-family: IBM Plex Mono;
  font-style: normal;
  font-size: 15px;
  line-height: 18px;

  padding-left: 18px;

  letter-spacing: 1px;

  color: #90a4ae;
`;

export const Password = styled.input`
  position: absolute;
  width: 252px;
  height: 48px;
  left: 15px;
  top: 213px;
  background: linear-gradient(0deg, #e6eef8, #e6eef8), #cfd8dc;
  box-shadow: inset -4px -4px 12px rgba(253, 255, 255, 0.8),
    inset 4px 4px 12px rgba(187, 195, 206, 0.6);
  border-radius: 16px;
  border: none;
  font-family: IBM Plex Mono;
  font-style: normal;
  font-size: 15px;
  line-height: 18px;

  padding-left: 18px;

  letter-spacing: 1px;

  color: #90a4ae;
`;

export const Button = styled.button`
  position: absolute;
  width: 113px;
  height: 48px;
  left: 94px;
  top: 285px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;

  color: #ffffff;

  /* deepPurple300 */

  background: #9574cd;
  box-shadow: -4px -4px 12px rgba(253, 255, 255, 0.8),
    4px 4px 12px rgba(187, 195, 206, 0.6);
  border-radius: 16px;
  border: none;
  cursor: pointer;

`;
