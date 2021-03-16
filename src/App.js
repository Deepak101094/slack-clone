import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/sidebar";
import Chat from "./components/chatScreen/Chat";

function App() {
  return (
    <div>
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route exact={true} path="/">
                {/* chat */}
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`;
