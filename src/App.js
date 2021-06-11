import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Projects from "./Components/Projects/Projects";
import PojectState from "./Context/Projects/projectState";
import TaskState from "./Context/Tasks/taskState";

const App = () => {
  return (
    <PojectState>
      <TaskState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
      </TaskState>
    </PojectState>
  );
};

export default App;
