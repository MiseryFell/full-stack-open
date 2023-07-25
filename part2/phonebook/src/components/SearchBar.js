import Notification from "./Notification"

const SearchBar = (props) => {
    const handleSearch = (event) => {
        props.setSearch(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification success={props.success} message={props.message} />
            <div>filter shown with <input value={props.searchState} 
                                          onChange={handleSearch}
            /></div>
        </div>
    )
}

export default SearchBar