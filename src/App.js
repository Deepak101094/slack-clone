import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from  "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <>
        <Switch>
          <Route exact={true} path="/">
            <Header />
          </Route>
        </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
