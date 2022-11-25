import { useContext, useState, useEffect } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
import { useNavigate } from "react-router-dom"

const ListJokes = () => {
  const { jokes, categories } = useContext(JokesContext)
  const [filteredJokes, setFilteredJokes] = useState([])
  const navigate = useNavigate()

  const jokesStyle = {
    margin: "20px",
    padding: "0px 10px 0px 10px",
    border: "2px solid DodgerBlue",
    cursor: "pointer",
    borderRadius: "4px"
  }

  const clearButtonStyle = {
    float: "none",
    padding: "1px 10px",
    marginLeft: "10px"
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
      <h1>Toutes les blagues</h1>
      <select onChange={handleFilterByCategory}>
        {categories.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button style={clearButtonStyle} onClick={clearFilters}>Réinitialiser</button>
      {filteredJokes.map((joke, index) => (
        <div onClick={() => navigate(`/jokes/${joke.id}`)} key={joke.id} style={jokesStyle}>
          <p>{index + 1} - {joke.content}</p>
          <p>{joke.like || 0} likes</p>
        </div>
      ))}
    </>
  )
}


export default ListJokes