import DeleteBtn from "./DeleteBtn"

const PhonebookEntry = (props) => {

    /* const handleDelete = (event) => {
        event.preventDefault()
        PhonebookDisplay.remove(props.id)
    } */

    return (
        <div>
            {props.person.name} {props.person.number} <DeleteBtn id={props.person.id} handleDelete={props.handleDelete} />
        </div>
    )
}

export default PhonebookEntry