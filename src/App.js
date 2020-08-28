import React , {useState , useEffect} from 'react';
import './App.css';
import { Button , FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'ali', text: 'hi'}]);
  const [username, setUsername] = useState('');

  // useState = variable in EACT
  // useEffect = run code on a condition in REACT
  console.log(messages);

  useEffect(() => {
    setUsername(prompt('Please Enter your usernaem .'))
  }, [])//when condition is Empty the code run once after running the page.
  

  const sendMessage = (event) => {
    //all the logig to send a message goes here
    
    //to prevent refresh when clicking on button
    event.preventDefault();
  
    setMessages([...messages,{username: username , text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello {username}</h1>
      <h2>welcome to the messenger.</h2>
      <form>
        <FormControl>
          <InputLabel>Hello</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />    
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Click me</Button>      
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
