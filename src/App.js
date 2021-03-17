import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/sidebar";
import Chat from "./components/chatScreen/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const [ user, loading ] = useAuthState(auth);
  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
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
        )}
       
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`;
