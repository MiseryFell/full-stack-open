import axios from "axios"
import { useEffect, useState } from "react"
import CountryList from "./CountryList"

const Search = () => {
    const [currentSearch, setCurrentSearch] = useState('')
    const [currentCountries, setCurrentCountries] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
            setCurrentCountries(
                response.data.filter((countryData) => {
                    
                    if (countryData.name.common.toLowerCase().includes(currentSearch.toLowerCase())) {
                        return true
                    }
                })
            )
            console.log(currentCountries)
            setLoading(false)
        })
    }, [currentSearch])

    const searchHandler = (event) => {
        setCurrentSearch(event.target.value)
    }

    if (currentSearch === '') {
        return (
            <div>
                find countries <input value={currentSearch}
                                      onChange={searchHandler} />
                <div>Type in a country to return results.</div>
            </div>
        )
    }

    return (
        <div>
            <div>
                find countries <input value={currentSearch}
                       onChange={searchHandler} />
            </div>
            <CountryList loading={isLoading} countries={currentCountries} />
        </div>
    )
}

export default Search