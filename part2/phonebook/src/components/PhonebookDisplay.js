import PhonebookEntry from "./PhonebookEntry"
import { useState } from "react"

const PhonebookDisplay = (props) => {
    let filteredArray = props.persons

    if (props.isLoading) {
        return <h1>Loading</h1>
    }

    filteredArray = props.persons.filter(person => {
        if (props.currentSearch === '') {
            return true
        } else if (person.name.toLowerCase().substring(0, props.currentSearch.length) === props.currentSearch.toLowerCase()) {
            return true
        }
    })

    return (
        <div>
            <h1>Numbers</h1>
            {filteredArray.map((person) => {

                return (
                    <PhonebookEntry handleDelete={props.handleDelete} key={person.id} person={person} />
                )
            })}
        </div>
    )
}

export default PhonebookDisplay