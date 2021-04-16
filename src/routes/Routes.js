import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Apps from "../pages/App";
function App() {
  // const rutaServidor = "";
  //const rutaServidor = "/reactlogin";

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/apps" component={Apps} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
