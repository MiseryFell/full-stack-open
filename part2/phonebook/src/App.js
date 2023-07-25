import phonebookService from "./services/communication"
import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import AddNewNumber from "./components/AddNewNumber"
import PhonebookDisplay from "./components/PhonebookDisplay"
import Notification from "./components/Notification"
import axios from "axios"








// High Level Components 







// Lowest Level Component

const App = () => {
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [persons, setPersons] = useState([])
    const [loading, setLoading] = useState(true)
    const [successfulOperation, setOperation] = useState(null)
    const [notificationMsg, setNotificationMsg] = useState('')

    useEffect(() => {
        phonebookService.getAll().then((promise) => {
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
        let equalObjId = null

        currentNewObject = {
            "name": name,
            "number": number
        }

        for (let i = 0; i < persons.length; i++) {
            if (currentNewObject.name === persons[i].name) {
                isEqual = true
                equalObjId = persons[i].id
                // alert(`${persons[i].name} is already added to phonebook`)
                break
            }
        }

        if (!isEqual) {
            console.log(currentNewObject)
            setLoading(true)
            phonebookService.create(currentNewObject)
            .then(() => {
                console.log("adding")
                phonebookService
                .getAll()
                .then((response) => {
                    setPersons(response.data)
                    setLoading(false)
                    setNotificationMsg(`Added ${currentNewObject.name}`)
                    setOperation(true)
                    setTimeout(() => {
                        setOperation(null)
                        setNotificationMsg('')
                    }, 3000)
                })
            })
            
            // setPersons(persons.concat(currentNewObject))
            
        }else if(window.confirm(`${currentNewObject.name} is already added to phonebook, replace the old number with a new one?`)) {
            setLoading(true)
            console.log(equalObjId)
            phonebookService.update(equalObjId, currentNewObject)
            .then(() => {
                console.log("modifying")
                phonebookService
                .getAll()
                .then((response) => {
                    setPersons(response.data)
                    setLoading(false)
                    setNotificationMsg(`Modified ${currentNewObject.name}`)
                    setOperation(true)
                    setTimeout(() => {
                        setOperation(null)
                        setNotificationMsg('')
                    }, 3000)
                })
            })
            .catch(() => {
                setNotificationMsg(`Information of ${currentNewObject.name} has already been removed from server`)
                setOperation(false)
                setTimeout(() => {
                    setOperation(null)
                    setNotificationMsg('')
                }, 3000)
            })
        }
    }
    

    const handleDelete = (event) => {       
        axios
        .get(`http://localhost:3001/persons/${event.target.id}`)
        .then(result => {
            // console.log(result.data.name)

            if (window.confirm(`Delete ${result.data.name}?`)) {
                event.preventDefault()
                setLoading(true)
                phonebookService.remove(event.target.id)
                .then(() => {
                    console.log(`removing ${event.target.id}`)
                    phonebookService
                    .getAll()
                    .then((response) => {
                        setPersons(response.data)
                        setLoading(false)
                        setNotificationMsg(`${result.data.name} successfully removed.`)
                        setOperation(true)
                        setTimeout(() => {
                        setOperation(null)
                        setNotificationMsg('')
                    }, 3000)
                    })
                })
                .catch(() => {
                    setNotificationMsg("This is not a valid item to delete!")
                    setOperation(false)
                    setTimeout(() => {
                        setOperation(null)
                        setNotificationMsg('')
                    }, 3000)
                })
            }
        })
        
    }

    if (loading) {
        return (
            <h1>Page Loading... {console.log("2")}</h1>
            
        )
    }
    
    return (
        <div>
            <SearchBar success={successfulOperation} message={notificationMsg} searchState={search} setSearch={setSearch} />
            <AddNewNumber submitForm={submitForm} setName={setName} setNumber={setNumber} nameState={name} numberState={number} />
            <PhonebookDisplay persons={persons} handleDelete={handleDelete} currentSearch={search} />
        </div>
    )
}

export default App