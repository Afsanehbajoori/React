import  React  from 'react';
import Greet from './Greet';


const Hello = () => {
    
    //with JSX:
     return (
        <div className='dummyClass'>
            <h1>Hello Afsaneh</h1>
            <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  
  
        </div>
    )    


  /*    //without JSX:
     return React.createElement(
         'div' , {id:'hello'} , React.createElement('h1' , null , 'Hellooooooooo You')

    )  */
}



export default Hello;
 