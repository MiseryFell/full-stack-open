

const CountryItem = (props) => {

    return (
        <div key={props.id}>{props.country}</div>
    )
}

export default CountryItem