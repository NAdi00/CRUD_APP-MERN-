import { useState } from 'react';
import './App.css';
import Create from './modules/Create';

var value11;
var value22;
var value33;
var value44;
var value55;
var value66;
var sql;

function value_1(event) {
  value11 = event.target.value;
}
function value_2(event) {
  value22 = event.target.value;
}
function value_3(event) {
  value33 = event.target.value;
}
function value_4(event) {
  value44 = event.target.value;
}
function value_5(event) {
  value55 = event.target.value;
}
function value_6(event) {
  value66 = event.target.value;
}
function Create_sql() {
  sql = `Create ${value11} if not exist ${value22};`;
  console.log(sql);
  //////////////SEND THIS SQL REQUEST TO BACKEND(Node)
}
function Insert_sql() {
  sql = `INSERT INTO ${value11} ${value22} VALUES ${value33};`;
  console.log(sql);
  //////////////SEND THIS SQL REQUEST TO BACKEND(Node)
}
function Update_sql() {
  try {
    sql = `UPDATE ${value11} SET ${value22} = ${value33} WHERE ${value55} = ${value66};`
  } catch (error) {
    
  }
  console.log(sql);
  //////////////SEND THIS SQL REQUEST TO BACKEND(Node)
}
function Select_sql() {
  try {
    sql = `SELECT * FROM ${value11} WHERE ${value22} = ${value33};`
  } catch (error) {
    sql = `SELECT * FROM ${value11};`
  }
  console.log(sql);
  //////////////SEND THIS SQL REQUEST TO BACKEND(Node)
}
function Delete_sql() {
  sql = `Drop ${value11} if exists ${value22};`;
  console.log(sql);
  //////////////SEND THIS SQL REQUEST TO BACKEND(Node)
}

function App() {

  const [state, setState] = useState (<div><span>Or enter your SQL</span><br /><br /><input type='text' placeholder = 'Enter your sql'></input><button className='btn'>Send</button></div>);

  function creating() {
    setState(<div>
      <label>Type:database/table</label><br></br>
      <input type='text' placeholder='type' onMouseLeave={value_1}></input><br /><br />
      <label>Name</label><br />
      <input type='text' placeholder='name' onMouseLeave={value_2}></input><br /><br />
      <button onClick={Create_sql} >Create</button>
    </div>)
  }
  function Inserting() {
    setState(<div>
      <label>table</label><br></br>
      <input type='text' placeholder='Table name:' onMouseLeave={value_1}></input><br /><br />
      <label>colomn</label><br />
      <input type='text' placeholder='All yours Columns:'onMouseLeave={value_2}></input><br />
      <input type='text' placeholder='All your insert values:' onMouseLeave={value_3}></input><br />
      <button onClick={Insert_sql} >Insert</button>
    </div>)
  }
  function Updating() {
    setState(<div>
      <label>Table:</label><br></br>
      <input type='text' placeholder='Table name' onMouseLeave={value_1}></input><br /><br />
      <label>column:</label><br />
      <input type='text' placeholder='Column name:'onMouseLeave={value_2}></input><br />
      <input type='text' placeholder='then value(New value):' onMouseLeave={value_3}></input><br /><br />
      <label>Conditions:</label><br />
      <input type='text' placeholder='Column:' onMouseLeave={value_4}></input><br />
      <input type='text' placeholder='then value(Condition):' onMouseLeave={value_5}></input><br /><br />
      <button onClick={Update_sql} >Update</button>
    </div>)
  }
  function Reading() {
    setState(<div>
      <label>Table name:</label><br></br>
      <input type='text' placeholder='Table name:' onMouseLeave={value_1}></input><br /><br />
      <label>Conditions(optional - only if not all the data)</label><br />
      <input type='text' placeholder='Column name:'onMouseLeave={value_2}></input><br />
      <input type='text' placeholder='then value:'onMouseLeave={value_3}></input><br /><br />
      <button onClick={Select_sql} >Find</button>
    </div>)
  }
  function Deleting() {
    setState(<div>
      <label>Type:databse/table</label><br></br>
      <input type='text' placeholder='type' onMouseLeave={value_1}></input><br /><br />
      <label>Name</label><br />
      <input type='text' placeholder='name'onMouseLeave={value_2}></input><br /><br />
      <button onClick={Delete_sql} >Delete</button>
    </div>)
  }

  return (
    <div className="App">
      <h1>Welcome To Your CRUD App</h1><br />
      <span>Choose request type</span><br /><br />
      <div className="crud_Options">
        <Create creating={creating}/>
        <button onClick={Inserting}>Insert</button>
        <button onClick={Updating}>Update</button>
        <button onClick={Reading}>Read</button>
        <button onClick={Deleting}>Delete</button>
      </div><br /><br />
      
      {state}
    </div>
  );
}

export default App;
