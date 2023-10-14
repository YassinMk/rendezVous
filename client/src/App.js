import Main from "./pages/Main/Main";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import RendezVous from "./pages/RendezVous/RendezVous";
import LoginAdmin from "./pages/Login/loginAdmin"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages/Main/style.css";
import "./pages/RendezVous/style2.css";
import Dashbord from "./pages/Dashbord/DashbordHome";
import { useState} from "react";
import Report from "./pages/Dashbord/Report";
import CheckConfirm from "./pages/Dashbord/CheckConfirm"; // Use "Dashbord" instead of "Dashboard"
import DashbordHome from "./pages/Dashbord/DashbordHome";


function App() {
  const [authenticated, setAuthenticated] = useState("");
  useEffect(() => {
    setAuthenticated(localStorage.getItem("login"))
  }, [setAuthenticated]);
  
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
            {authenticated==="yes" ? (
              <Switch>
                <Route path="/dashbord/confirmation">
                  <CheckConfirm />
                </Route>
                <Route path="/dashbord/reportation">
                  <Report />
                </Route>
                <Route path="/dashbord">
                  <DashbordHome setAuthenticated={setAuthenticated} />
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
