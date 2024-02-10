import { useState } from 'react';
import './App.css';
import Create from './modules/Create';

function App() {

  const [state, setState] = useState ('');

  function create() {
    setState('Hey')
  }

  return (
    <div className="App">
      <h1>Welcome To Your CRUD App</h1><br />
      <span>Choose request type</span><br /><br />
      <div className="crud_Options">
        <Create title = 'hello11' />
        <button id='01'>Insert</button>
        <button>Update</button>
        <button>Read</button>
        <button>Delete</button>
      </div><br /><br />
      <span>Or enter your SQL</span><br /><br />
      <input type='text' placeholder = 'Enter your sql'></input><button className='btn'>Send</button>
    </div>
  );
}

export default App;
