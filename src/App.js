import React from "react";
import CrossPost from "./pages/CrossPost";
import DevDotTo from "./pages/DevDotTo";
import { Route } from "react-router-dom";
import HashToDevMed from './components/HashToDevMed'
import Home from "./pages/Home";
import DevToMedHashForm from "./components/DevToMedHashForm";
import MedToDevHash from "./components/MedToDevHash";

const App = () => {
  return (
    <div>
      <Route path="/"  exact>
        <Home />
      </Route>
      <Route path="/dev" exact>
        <DevDotTo />
      </Route>
      <Route path="/crosspost" exact>
        <CrossPost />
      </Route>
      <Route path = "/crosspost/devToMed" exact>
        <DevToMedHashForm/>
      </Route>
      <Route path = "/crosspost/medToDev" exact>
        <MedToDevHash/>
      </Route>
      <Route path = "/crosspost/hashToDev" exact>
        <HashToDevMed/>
      </Route>
    </div>
  );
};

export default App;
