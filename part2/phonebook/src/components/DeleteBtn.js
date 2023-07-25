import PhonebookDisplay from '../services/communication'

const DeleteBtn = (props) => {

    

    return (
        <span>
            <button id={props.id} onClick={props.handleDelete}>Delete</button>
        </span>
    )
}

export default DeleteBtn