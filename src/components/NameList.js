import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Koustubh',
            age: 25,
            skill: 'React'
        },

        {
            id: 2,
            name: 'Bruce',
            age: 25,
            skill: 'Angular'
        },

        {
            id: 3,
            name: 'Tom',
            age: 25,
            skill: 'Vue'
        }
    ]

    const personList = persons.map(person => (
        <Person key={person.id} person={person}/>
    ))
    return <div>{personList}</div>
}

export default NameList
