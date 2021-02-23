import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashbord from "./pages/Dashbord";

import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/dashboard" component={Dashbord} />
      </Switch>
    </BrowserRouter>
  );
}
