import React from 'react'


export default function Person({person}) {
    return (
        <div>
            <h5>My name is {person.name}. I am {person.age}. I know {person.skill}</h5>
        </div>
    )
}
