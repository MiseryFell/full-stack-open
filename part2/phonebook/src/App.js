import { useState } from 'react'

const NumbersList = (props) => {

  return (
    <div>
      <h2>Numbers</h2>
      <div>
        {props.persons.map(person => <div key={person.name}>{person.name}</div>)}
      </div>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log(event.target)

    const newPerson = { name: newName }

    if (persons.indexOf(newPerson) === -1) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }

    
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
                       onChange={handleChange}
          />
        </div>
        <div>
          debug: {newName}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <NumbersList persons={persons}/>
    </div>
  )
}

export default App