import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectReview from "./Pages/ProjectReview";
import Sorry from "./Pages/Sorry";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/project-review/:id">
              <ProjectReview />
            </Route>
            <Route path="/sorry">
              <Sorry />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
