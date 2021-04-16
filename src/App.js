// import logo from './logo.svg';
import './App.css';
import MyComponent  from './components/Greet'; // can we use MyComponent instead of Greet
import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import HttpPost from './components/HttpGet';
import ParentComponenet from './components/ParentComponenet';
import UserLogin from './components/UserLogin';
//import Greet from './components/Greet';


/*  function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <Welcome></Welcome>
      
    </div>
  );
}  */

 class App extends Component {
  render() {
    return (

      <div className="App">
        <UserLogin/>
        <Message></Message>
       <MyComponent name="Afsaneh" heroName="Wonder Woman">
         <p>This is children props.</p>
       </MyComponent>
       <MyComponent name="Allan" heroName="Batman">
         <button>Action</button>
       </MyComponent>
       <MyComponent name="Adrian" heroName="Superman">
       </MyComponent>
      <Welcome name="Afsaneh" heroName="Wonder Woman"/>
      <Welcome name="Allan" heroName="Batman"/>
      <Welcome name="Adrian" heroName="Superman"/>
      <Hello />
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <HttpPost/>
      <ParentComponenet/>
     
      
    </div>

    );
  }
} 
export default App;
