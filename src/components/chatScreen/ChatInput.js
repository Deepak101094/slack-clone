import React, { useState } from "react";
import styled from "styled-components";
//? material import
import { Button } from "@material-ui/core";
//? firebase import
import firebase from "firebase";
import { useAuthState } from  "react-firebase-hooks/auth";
//? own components
import { db } from "../../firebase";
import { auth } from "../../firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL        
    });
    chatRef?.current.scrollIntoView({
      behavior: "smooth",
    })
    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          {" "}
          Send{" "}
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    display: flex;
    justify-content: center;
    position: relative;
  }
  > form > input {
    position: fixed;
    width: 60%;
    bottom: 30px;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
