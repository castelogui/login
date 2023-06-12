import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import {
  Card,
  InputUser,
  Welcome,
  Button,
  TextField,
  LabelLogin,
} from "./styles";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const response = await api.post("/login", { username, password });

      localStorage.setItem("id_user", response.data.id_user);

      localStorage.setItem("name_user", response.data.username);

      history.push("/dashboard");

      return alert("Login bem sucessido");
    } catch (err) {
      return alert(`Erro ao realizar login. ${err}`);
    }
  }

  return (
    <Card>
      <Welcome>Welcome Back</Welcome>
      <form onSubmit={handleLogon}>
        <TextField>
          <LabelLogin>Usuario</LabelLogin>
          <InputUser
            placeholder="Email/username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </TextField>
        <TextField>
          <LabelLogin>Senha</LabelLogin>
          <InputUser
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </TextField>
        <Button type="submit">Sign in</Button>
      </form>
    </Card>
  );
}

export default Login;
