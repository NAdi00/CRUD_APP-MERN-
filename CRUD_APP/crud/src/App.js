import { useState } from 'react';
import './App.css';
import Create from './modules/Create';

function Create_sql() {
  console.log('creating new database/table');
}

function App() {

  const [state, setState] = useState (<div><input type='text' placeholder = 'Enter your sql'></input><button className='btn'>Send</button></div>);

  function creating() {
    setState(<div>
      <label>Type:databse/table</label><br></br>
      <input type='text' placeholder='type' ></input><br /><br />
      <label>Name</label><br />
      <input type='text' placeholder='name'></input><br /><br />
      <button onClick={Create_sql} >Create</button>
    </div>)
  }

  return (
    <div className="App">
      <h1>Welcome To Your CRUD App</h1><br />
      <span>Choose request type</span><br /><br />
      <div className="crud_Options">
        <Create creating={creating}/>
        <button id='01'>Insert</button>
        <button>Update</button>
        <button>Read</button>
        <button>Delete</button>
      </div><br /><br />
      <span>Or enter your SQL</span><br /><br />
      {state}
    </div>
  );
}

export default App;
