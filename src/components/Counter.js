import React, { Component } from 'react'


export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state={
          count:0  
        }

        // if we have a number of state properties :
        const {state1 , state2} = this.state
    }

   /*  increment(){
        this.setState({
            count:this.state.count + 1
        } , 
        ()=> {
            console.log(this.state.count)
        }
        )
        
        console.log(this.state.count)
    } */

    increment(){
        this.setState((prevState) => ({
            count: prevState.count +1
        }))
           
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
  

    render() {
        return (
            <div>
            <div>
                count - {this.state.count}
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
            </div>
           
        )
    }
}







