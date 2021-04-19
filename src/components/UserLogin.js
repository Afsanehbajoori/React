import React, { Component } from 'react'

export class UserLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggeIn: true
        }
    }
    
    render() {


        //4.forth way is at use && (if the first setning is true and the second setning is true too  otherwise show nothing in the browser. )
        
            return this.state.isLoggeIn &&  <div>welcome Afsaneh Bajoori to logge in</div>
        

       /* // 3.third way at use conditional syntax in JSX :
        return (
        (this.state.isLoggeIn) ? <div>welcome Afsaneh Bajoori to logge in</div> : <div>You are not logge in</div>

        ) */


        // // 2.second way to conditional with variable
        // let message
        // if(this.state.isLoggeIn)
        // {
        //     message=<div>welcome Afsaneh Bajoori to logge in </div>
        // }
        // else{
        //     message=<div>You are not logge in </div>
        // }
        // return(
        //     <div>{message}</div>
        // )


        
        // 1. first way to conditional 
        //   if(this.state.isLoggeIn)
        // {
        //     return (
           
        //     <div>welcome Afsaneh Bajoori to logge in </div>
        //         )
        // }else
        // {
        //     return(
        //         <div>You are not logge in</div>
        //     )
        // } 
        
    } 
}

export default UserLogin
