const AddName = (props) => {
    const handleName = (event) => {
        props.setName(event.target.value)
    }

    return (
        <input value={props.nameState} 
                      onChange={handleName}
                      type="text" 
        />
    )
}

export default AddName