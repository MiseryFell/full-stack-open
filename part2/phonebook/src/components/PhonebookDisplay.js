import PhonebookEntry from "./PhonebookEntry"
import useState from "react"

const PhonebookDisplay = (props) => {
    let persons = props.person
    const [displayedPersons, setDisplayedPersons] = useState(persons)

    if (props.isLoading) {
        return <h1>Loading</h1>
    }

    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name) {

        }
    }

    return (
        <div>
            <h1>Numbers</h1>
            {persons.map((person) => {

                return (
                    <PhonebookEntry key={person.id} person={person} />
                )
            })}
        </div>
    )
}

export default PhonebookDisplay