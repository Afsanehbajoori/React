import React, { Component } from 'react'



class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message1 : 'Hiiiiiiiiii'
             
        }

      /*   // it's third way: it's called binding in class constractor
        this.ClickHandler= this.ClickHandler.bind(this) */

        
    }

   /*  ClickHandler(){
        this.setState({
            message1 :'Gooooood Byeeeeee'
        })
            
    } */


    // it's the last way: (class property as arrow function)
    ClickHandler = () =>{
        this.setState({
            message1:'Gooooood Byeeeeee!!!'
        })
    }
    
    render() {
        return (
            <div>
                <div>
                {this.state.message1}
                </div>
                {/* 4 ways to make a click handler: */}
                {/* 1.binding in render: */}
                {/* <button onClick={this.ClickHandler.bind(this)}>Click</button>  */} 
                 {/* 2.Arrow function in render: */}
                {/* <button onClick={()=>this.ClickHandler()}>Click</button> */}
                {/* 3.binding in class constructor: */}
                {/* <button onClick={this.ClickHandler}>Click</button>  */}
                {/* 4.class property as arrow function: */}
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
