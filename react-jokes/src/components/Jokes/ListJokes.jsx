import { useContext, useEffect, useState } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
const options = require('./Categories')

const ListJokes = () => {

    const { jokes } = useContext(JokesContext)
    const [filteredJokes, setFilteredJokes] = useState([])
    const navigate = useNavigate()
  
    const jokesStyle = {
      margin: "20px",
      padding: "0px 10px 0px 10px",
      border: "2px solid DodgerBlue",
      cursor: "pointer",
      "border-radius": "4px"
    }

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
            <h1>All jokes</h1>
            {filteredJokes.map((joke, index) => (
                <div onClick={() => navigate(`/jokes/${joke.id}`)} key={joke.id} style={jokesStyle}>
                <p>{index} - {joke.content}</p>
                <p>{joke.like || 0} likes</p>
                </div>
            ))}
            <select onChange={handleFilterByCategory}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <button onClick={clearFilters}>Clear</button>
        </>
    )
}

export default ListJokes