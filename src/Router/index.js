import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from "../Navigation";
import Figure from "../Figure";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/figure/:figureType/:figureColor">
            <Navigation />
          </Route>
          <Route path="">
            <Navigation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;