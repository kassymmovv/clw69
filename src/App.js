import React from 'react';
import {Route, Switch} from "react-router-dom";

import contactData from "./contactData/contactData";
import Menu from "./container/Menu";
const App = () => (
    <Switch>
      <Route path="/" exact component={Menu} />
      <Route path="/orders"  component={contactData} />
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
);

export default App;
