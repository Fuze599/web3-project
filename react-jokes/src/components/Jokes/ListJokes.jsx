import { useContext, useEffect, useState } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
const options = require('./Categories')

const ListJokes = () => {

    const { jokes } = useContext(JokesContext)
    const [filteredJokes, setFilteredJokes] = useState([])

    useEffect(() => {
        setFilteredJokes(jokes)
    }, [jokes])

    const handleFilterByCategory = (e) => {
        setFilteredJokes(jokes.filter(joke => joke.category === e.target.value))
    }

    const clearFilters = () => {
        setFilteredJokes(jokes)
    }

    return (
        <>
            <select onChange={handleFilterByCategory}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <button onClick={clearFilters}>Clear</button>
            {filteredJokes.map((joke) => <div key={joke.id}>{joke.content}</div>)}
        </>
    )
}

export default ListJokes