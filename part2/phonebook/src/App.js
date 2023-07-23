import axios from "axios"
import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import AddNewNumber from "./components/AddNewNumber"
import PhonebookDisplay from "./components/PhonebookDisplay"








// High Level Components 







// Lowest Level Component

const App = () => {
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [persons, setPersons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
        .get('http://localhost:3001/persons')
        .then((promise) => {
            setTimeout(() => {}, 5000)
            setPersons(promise.data)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <h1>Page Loading...</h1>
        )
    }

    let currentNewObject = {}

    const submitForm = (event) => {
        event.preventDefault()

        let isEqual = false

        currentNewObject = {
            "name": name,
            "number": number,
            "id": persons[persons.length-1].id+1
        }

        for (let i = 0; i < persons.length; i++) {
            if (JSON.stringify(currentNewObject) === JSON.stringify(persons[i])) {
                isEqual = true
                alert(`${persons[i].name} is already added to phonebook`)
                break
            }
        }

        if (!isEqual) {
            axios
            .post('http://localhost:3001/persons', currentNewObject)
            setLoading(true)
            setPersons(persons.concat(currentNewObject))
            setPersons(() => {
                axios
                .get('http://localhost:3001/persons')
                .then((promise) => {
                    setTimeout(() => {}, 5000)
                    setPersons(promise.data)
                    setLoading(false)
                })
            })
        }
    }

    return (
        <div>
            <SearchBar searchState={search} setSearch={setSearch} />
            <AddNewNumber submitForm={submitForm} setName={setName} setNumber={setNumber} nameState={name} numberState={number} />
            <PhonebookDisplay isLoading={loading} persons={persons} />
        </div>
    )
}

export default App