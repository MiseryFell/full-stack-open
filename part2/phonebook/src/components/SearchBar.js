const SearchBar = (props) => {
    const handleSearch = (event) => {
        props.setSearch(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <div>filter shown with <input value={props.searchState} 
                                          onChange={handleSearch}
            /></div>
        </div>
    )
}

export default SearchBar