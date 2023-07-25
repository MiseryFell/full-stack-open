import CountryItem from "./CountryItem"

const CountryList = (props) => {


    if (props.loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {props.countries.map((country) => {
                return (
                    <CountryItem id={Math.random()*100000000} country={country.name.common} />
                )
            })}
            
        </div>
    )
}

export default CountryList
