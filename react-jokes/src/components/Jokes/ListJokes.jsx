import { useContext, useState } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
import { useNavigate } from "react-router-dom"
const ListJokes = () => {

  const { jokes } = useContext(JokesContext)
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [searchCategory, setSearchCategory] = useState('')

  const jokesStyle = {
    margin: "20px",
    padding: "0px 10px 0px 10px",
    border: "2px solid DodgerBlue",
    cursor: "pointer",
    "border-radius": "4px"
  }

  const options = [
    {
      label: "Second degre",    //site
      value: "second degre",
    },
    {
      label: "Autres",
      value: "others",
    },
  ];

  return (
    <>
      <h1>All jokes</h1>
      <input type="text"/>
      <br/>
      <select value= {searchCategory}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
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