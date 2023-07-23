const PhonebookEntry = (props) => {

    return (
        <div>
            {props.person.name} {props.person.number}
        </div>
    )
}

export default PhonebookEntry