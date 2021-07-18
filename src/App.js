import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import RegionList from "./containers/RegionList";
import Region from "./containers/Region";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Buscar</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={RegionList} />
        <Route path={"/region/:region"} exact component={Region} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
