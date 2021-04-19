import React from 'react'
import Person from './Person'

export default function NameList() {
    // a key is a special string attribute you nedd to include when creating lists of elements.
    // keys give the elements a stable identity.
    //keys help React identify which items have changed , are added , or are removed.
    //help in efficeient update of the user interface.
    //user index as a key
    //when to use index as a key: 1.the items in your list do not have a uniqe id    2.the list is a static list and will not change   3. the list will never be reordered or filtered
    
    const name =['bruce ' , 'clark ' , 'diana' , 'bruce']
    const persons=  [
        {
            id:1,
            name:'Bruce',
            age: 20,
            skill:'React'
        }, 
        {
            id:2,
            name:'Diana',
            age: 25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Derk',
            age: 30,
            skill:'Vue'
        }
    ]

    //chech the map method in javascript codes: MDN WEB Docs. const map1 = array1.map(x => x * 2);

    /* const personList=persons.map(person  => <Person key={person.id} person={person}/>) // if we want to use .map method in jsx , have to use in {} under a retrun and between div tag
    return (
        <div>
              {personList}            
                        
        </div>
    ) */
const nameList=name.map((name , index) => <h4 key ={index}> {index} {name}</h4>)
return (
    <div>{nameList}</div>
)



}
