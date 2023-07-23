const AddNumber = (props) => {
    const handleNumber = (event) => {
        props.setNumber(event.target.value)
    }

    return (
        <input value={props.numberState} 
                      onChange={handleNumber} 
                      type="tel"
        />
    )
}

export default AddNumber