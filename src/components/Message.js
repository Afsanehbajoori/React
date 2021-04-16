import React, { Component } from 'react';

// code snippet to create a constractor in the class component is'rconst'

class Message extends Component {
    constructor(){
        super()
        this.state={
            message: ' my dear' , 
            text: 'my sweet'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for clicking me!'
        })
    }

    render() {
        
        return (
            <div>
                <h1>
                Welcome to my first react app {this.state.message} and {this.state.text}
                </h1>
                <button onClick={() => this.changeMessage()}>click me</button>
                {/* <button onClick={() => this.changeMessage()}>click me</button> */}
                <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
            </div>
           
              
        )
       
    }
}

export default Message;