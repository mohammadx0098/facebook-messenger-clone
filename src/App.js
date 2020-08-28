import React , {useState} from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(messages);
  
  const sendMessage = (event) => {
    //all the logig to send a message goes here
    
    //to prevent refresh when clicking on button
    event.preventDefault();
  
    setMessages([...messages,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello!</h1>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Click me</Button>
      
      </form>
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
