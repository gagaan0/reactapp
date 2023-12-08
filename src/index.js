import React from "react";
import ReactDOM from "react-dom/client";

function Car(props){
  return <h2>i am a {props.color} car!</h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

function Car(props){
  return <h1>this is a car!</h1>;
}
function Garage(){
  return(
    <>
    <h1>stays in Garage</h1>
    <Car/>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);

            
            
--------------------------------


  
class Car extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      brand:"ford",
      model:"mustang",
      color:"red",
      year:1969,
    };
  }
  render(){
    return(
      <div>
    <h1>my {this.state.brand}</h1>
    <p>it is a {this.state.color}  </p>
    </div>
    );
  }
}
const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car/>);


<----------------------------------------------------------------------------------------------------> 


            
import { useState } from "react";
function MyForm(){
  const[inputs,setInputs]=useState({});
  const handleChange=(event)=>{
    const name=event.target.name;
    const value =event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs);
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>enter your name:
        <input
        type="text"
        name="username"
        value={inputs.username||""}
        onChange={handleChange}
        />
        </label>
        <label>enter your age:
          <input
          type="number"
          name="age"
          value={inputs.age||""}
          onChange={handleChange}
          />
        </label>
        <input type ="submit"/>
    </form>
  )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm/>);


           
import { useEffect, useState } from "react";
function Counter(){
  const[count,setCount]=useState(0);
  const[calculation,setCalculation]=useState(0);
  useEffect(()=>{
    setCalculation(()=>count*2);
  },[count]);
  return(
    <>
    <p>count:{count}</p><button onClick={()=>setCount((c)=>c+1)}>+</button>
    <p>calculation={calculation}</p>
    </>
  );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Counter/>);

              
              
  import { createContext, useContext, useState } from "react";
  const userContext =createContext();
  function Component1() {
    const [user, setUser] = useState("test user");
  
    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </>
    );
  }
  function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  function Component3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }
  function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }
  function Component5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Component1 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
