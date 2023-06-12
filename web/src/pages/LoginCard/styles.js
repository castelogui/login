import styled from "styled-components";

export const Card = styled.div`
  width: 60%;
  display: flex;
  left: 40vmax;
  top: 10vmax;
  padding: 30px 35px;
  border-radius: 25px;
  flex-direction: column;
  background-color: #2f2841;
  box-shadow: 10px 10px 50px #00000086;
`;

export const Welcome = styled.text`
  font-size: 3vw;
  color: #ffc100;
  font-weight: bold;
  padding: 2rem;
  margin: 0 auto;
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
  width: 100%;
`;

export const LabelLogin = styled.label`
  font-size: 1.5rem;
  color: #fdfdfd;
  padding: 0.5rem;
`;

export const InputUser = styled.input`
  width: 100%;
  border: none;
  border-radius: 15px;
  padding: 1rem;
  background-color: #514869;
  color: #f0ffffde;
  font-size: 1rem;
  box-shadow: 0 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;
`;
export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem auto;
  border: none;
  border-radius: 15px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 0.09em;
  cursor: pointer;
  background: linear-gradient(180deg, #ffc100 20%, #ff8a00 90%);
  transition: font-size 0.1s ease-in-out, background 0.5s ease-in-out;
  &:hover {
    font-size: 1.5rem;
    background: linear-gradient(0deg, #ffc100 20%, #ff8a00 90%);
  }
`;