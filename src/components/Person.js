import React from 'react'


export default function Person({person , key}) {
    return (
        <div>
            {key} <h5>My name is {person.name}. I am {person.age} years old. I know {person.skill}</h5>
        </div>
    )
}
