import Main from "./pages/Main/Main";
import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import RendezVous from "./pages/RendezVous/RendezVous";
import LoginAdmin from "./pages/Login/loginAdmin"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages/Main/style.css";
import "./pages/RendezVous/style2.css";
import Dashbord from "./pages/Dashbord/Dashbord";
import { useState } from "react";
import Report from "./pages/Dashbord/Report";
import Confirm from "./pages/Dashbord/Confirm";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
    <div >
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Rendez-vous">
          <RendezVous />
        </Route>
        <Route path="/LoginAdmin">
          <LoginAdmin setAuthenticated={setAuthenticated}/>
        </Route>
        <Route path="/dashbord">
            {authenticated ? (
              <Switch>
                <Route path="/dashbord/confirmation">
                  <Confirm />
                </Route>
                <Route path="/dashbord/reportation">
                  <Report />
                </Route>
                <Route path="/dashbord">
                  <Dashbord />
                </Route>
              </Switch>
            ) : (
              <Redirect to="/LoginAdmin" />
            )}
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
