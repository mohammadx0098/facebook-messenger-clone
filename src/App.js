import React, { useState, useEffect } from "react";
import "./App.css";
import {
  IconButton,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import Message from "./Message";
import { db } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState = variable in EACT
  // useEffect = run code on a condition in REACT
  // console.log(messages);

  useEffect(() => {
    // runs when the app component loads.
    console.log("ok");
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });

    // (event)=>{
    //   event.preventDefault();
    //   console.log("ok");
    // }();

    // let form = document.querySelector(".app__form");
    // form.addEventListener("submit", (event) => {

    //   // window.scrollTo(0, document.querySelector(".App").scrollHeight);
    // });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter your usernaem ."));
  }, []); //when condition is Empty the code run once after running the page.

  useEffect(() => {
    console.log("ok");
    window.scrollTo(0, document.querySelector(".App").scrollHeight);
  }, [messages]);
  const sendMessage = (event) => {
    //to prevent refresh when clicking on button
    event.preventDefault();

    //all the logig to send a message goes here
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <div className="app__header">
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
        <h1>{username} سلام</h1>
        <h2>به پیام رسان ایرانی خوش اومدی :)</h2>
      </div>
      <div className="form-container">
        <form className="app__form">
          <FormControl className="app__formControl">
            <Input
              className="app__input"
              placeholder="Enter a message ..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton
              className="app__iconButton"
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
