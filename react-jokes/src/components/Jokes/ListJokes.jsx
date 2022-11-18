import { useContext } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
import { useNavigate } from "react-router-dom"
const ListJokes = () => {

  const { jokes } = useContext(JokesContext)
  const navigate = useNavigate()

  const jokesStyle = {
    margin: "20px",
    padding: "0px 10px 0px 10px",
    border: "2px solid DodgerBlue",
    cursor: "pointer",
    "border-radius": "4px"
  }

  return (
    <>
      <h1>All jokes</h1>
      {jokes.map((joke, index) => (
        <div onClick={() => navigate(`/jokes/${joke.id}`)} key={joke.id} style={jokesStyle}>
          <p>{index} - {joke.content}</p>
          <p>{joke.like || 0} likes</p>
        </div>
      ))}
    </>
  )
}

export default ListJokes