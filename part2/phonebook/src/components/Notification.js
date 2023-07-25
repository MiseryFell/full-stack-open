

const Notification = (props) => {


    if (props.success === true) {
        return (
            <div className="success-message">
                {props.message}
            </div>
        )
    }else if (props.success === false) {
        return (
            <div className="error-message">
                {props.message}
            </div>
        )
    }else if (props.success === null) {
        return 
    }
    
}

export default Notification