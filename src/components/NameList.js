import React from 'react'
import Person from './Person'

export default function NameList() {
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
    const personList=persons.map(person => <Person person={person}/>) // if we want to use .map method in jsx , have to use in {} under a retrun and between div tag
    return (
        <div>
              {personList}            
                        
        </div>
    )
}
