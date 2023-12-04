import React from "react";
import ReactDOM from "react-dom/client";


const myElement=<h1>welcome to jsx!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);



const x=6;
let text="odd";
if(l>5){
  m="yes";
}
const k=<h1>{m}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(k);



const x=6;
let text="odd";
if(x%2===0){
  text="even";
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(text);


class Car extends React.Component{
render(){
return <h1>hi, welcome!</h1>;
}
}
const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car/>);



function Car(){
  return <h1>hi,hello</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);


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


import Car from './car.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);


class Car extends React.Component{
  render(){
    return <h1>welcome to class</h1> 
  }
}
const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car/>);



class A extends React.Component{
  render(){
    return <h1>welcome to {this.props.color} class</h1>
  }
}
const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<A color="property"/>);


class Car extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render(){
    return <h2>i am a {this.props.model}!</h2>
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model='audi'/>);


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
  changeColor=()=>{
    this.setState({color:"blue"});
  }
  render(){
    return(
      <div>
    <h1>my {this.state.brand}</h1>
    <p>it is a {this.state.color} {this.state.model} from {this.state.year} </p>
    <button type="button" onClick={this.changeColor}>changeColor</button>
    </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);


class Car extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={favoritecolor:"black"};
  }
  static getDerivedStateFromProps(props,state){
    return {favoritecolor:props.favcol};
  }
  render(){
    return <h1>my favorite color is {this.state.favoritecolor}</h1>;
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car favcol="orange"/>);


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={Favoritecolor:"red"};
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({Favoritecolor:"yellow"})},1000)
  }
  render(){
    return(<h1>my Fovorite color is{this.state.Favoritecolor} </h1>);
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);



function Football(){
  const shot=()=>{
    alert("great shot!");
  }
  return(
    <button onClick={shot}>take the shot !</button>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football/>);



function MissedGoal(){
  return  <h1>MISSED!</h1>;
}
function MadeGoal(){
  return  <h1>Goal!</h1>;
}
function Goal(props){
  const isGoal=props.isGoal;
  if(isGoal){
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false}/>);



function Football(){
  const shoot=(a)=>{
    alert(a);
  }
  return(
    <button onClick={()=>shoot("Goal!")}>take a shoot</button>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football/>);

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


  
import { useEffect, useRef, useState } from "react";
  function Apple(){
    const[inputValue,setInputValue]=useState("");
    const previousInputValue=useRef("");
    useEffect(()=>{
      previousInputValue.current=inputValue;
    },[inputValue]);
    return(
      <>
      <input type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <h2>current value:{inputValue}</h2>
      <h2>previous value:{previousInputValue.current}</h2>
      </>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apple/>);



import { useReducer } from "react";
const initialTodos=[
  {
    id:1,
    title:"todo 1",
    complete:false,
  },
  {
    id:2,
    title:"todo 2",
    complete:false,
  },
];
const reducer=(state,action)=>{
  switch(action.type){
    case "COMPLETE":
      return state.map((todo)=>{
        if(todo.id===action.id){
          return{...todo,complete:!todo.complete};
        }else{
          return todo;
        }
      });
      default:
        return state;
  }
};
function Todos(){
  const[todos,dispatch]=useReducer(reducer,initialTodos);
  const handleComplete=(todo)=>{
    dispatch({type:"COMPLETE",id:todo.id});
  };
  return(
    <>
    {todos.map((todo)=>(
      <div key={todo.id}>
      <label>
        <input
        type="checkbox"
        checked={todo.complete}
        onChange={()=>handleComplete(todo)}
        />
        {todo.title}
      </label>
      </div>
    ))}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();