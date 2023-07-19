import { useState } from 'react'

const SearchNumbers = (props) => {

  const handleSearchChange = (event) => {
    props.searchSetter(event.target.value)
    filter(event)
    
  }

  const filter = (event) => {
    props.setFilterState(() => {
      console.log(props.search.length+1)

      let filteredIds = []

      for (let i = 0; i < props.list.length; i++) {
        console.log(i)
        /* console.log(props.search)
        console.log(props.list[i].name.slice(0, props.search.length)) */
        // if (event.target.value === props.list[i].name.slice(0, props.search.length+1).toLowerCase()) {
        if (props.list[i].name.toLowerCase().includes(event.target.value.toLowerCase())) {
          console.log("adding", props.list[i].id)
          filteredIds.push(props.list[i].id)
        } else {
          console.log(event.target.value, "DNE", props.list[i].name.slice(0, props.search.length+1).toLowerCase())
        }
      }

      console.log("filtered ids are", filteredIds)
      return filteredIds
    })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={props.state}
                                 onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}

const NumbersList = (props) => {

  return (
    <div>
      <h2>Numbers</h2>
      <div>
        {props.list.map(person => {
          console.log(props.displayedIds)
          if (props.displayedIds.indexOf(person.id) !== -1) {
            console.log(props.displayedIds)
            return (
              <div key={person.id}>{person.name} {person.number}</div>
            )
          }
        })}
      </div>
    </div>
  )
}

const InputField = props => {

  return (
    <div>
      {props.fieldName}: <input value={props.newValue} onChange={props.handler} type={props.type} />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '888-888-8888', id: 1}
  ]) 
  const [filteredIds, setFilteredIds] = useState(persons.map(person => person.id))
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log(event.target)

    const newPerson = { name: newName, number: newNumber, id: (persons[persons.length-1].id)+1}
    
    for (let i = 0; i < persons.length; i++) {
      const isEqual = (persons[i].name === newPerson.name)

      if (i === persons.length-1) {
        if (isEqual) {
          alert(`${newName} is already added to phonebook`)
          console.log("1")
        } else {
          setPersons(persons.concat(newPerson))
          setFilteredIds(filteredIds.concat(newPerson.id))
          setNewName('')
          setNewNumber('')
          console.log("2")
        }
      } else {
        if (isEqual) {
          alert(`${newName} is already added to phonebook`)
          console.log("3")
          break
        } else {
          console.log("4")
          continue
        }
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <SearchNumbers search={newSearch} searchSetter={setNewSearch} list={persons} setFilterState={setFilteredIds} />
      <h2>Add New Number</h2>
      <form onSubmit={addName}>
        <InputField type={"text"} fieldName={"name"} newValue={newName} handler={handleNameChange} />
        <InputField type={"tel"} fieldName={"number"} newValue={newNumber} handler={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <NumbersList list={persons} displayedIds={filteredIds} />
    </div>
  )
}

export default App