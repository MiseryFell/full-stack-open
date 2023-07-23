import AddName from "./AddName"
import AddNumber from "./AddNumber"

const AddNewNumber = (props) => {
    

    return (
        <div>
            <h1>Add a New Number</h1>
            <form onSubmit={props.submitForm} >
                <div>
                    <AddName setName={props.setName} nameState={props.nameState} />
                </div>
                <div>
                    <AddNumber setNumber={props.setNumber} numberState={props.numberState} />
                </div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default AddNewNumber