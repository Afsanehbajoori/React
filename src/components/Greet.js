import React from 'react'


/* function Greet(){
    return <h1>Hello Afsaneh Bajoori</h1>
} */

const Greet = (props)=> {
    const {name , heroName} = props
    console.log(props)
    return (
        <div>
         <h1>Helloooo {name} as known as {heroName}
        </h1>
        {props.children} 

        
        </div>
    )
    
}



export default Greet;