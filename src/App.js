import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//? library import
import styled from "styled-components";
import Spinner from "react-spinkit";
//? firebase import
import { useAuthState } from "react-firebase-hooks/auth";
//? own components
import { auth } from "./firebase";
import SideBar from "./components/sidebar";
import Chat from "./components/chatScreen/Chat";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
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
const AppLoading = styled.div`
 display: grid;
 place-items: center;
 height: 100vh;
 width:100%;
`;

const AppLoadingContent = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
