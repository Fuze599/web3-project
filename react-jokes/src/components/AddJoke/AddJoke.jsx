import { useState } from "react";
import { useContext } from "react"
import { Context as JokesContext } from 'contexts/JokesContext'

const AddJoke = () => {
  const { createJoke, categories } = useContext(JokesContext)
  const [jokeContent, setJokeContent] = useState('')
  const [jokeCategory, setJokeCategory] = useState('')

  const handleContentChange = (e) => {
    setJokeContent(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setJokeCategory(e.target.value)
  }

  const addJoke = (e) => {
    e.preventDefault()
    const joke = {
      "content": jokeContent,
      "category": jokeCategory,
      "date": new Date(Date.now()).toDateString()
    }
    createJoke(joke)
    setJokeContent('')
    setJokeCategory('')
    alert('New joke added')
  }

  const formStyle = {
    textAlign: "center",
    margin: "50px"
  }

  const inputStyle = {
    textAlign: "center",
    margin: "10px"
  }

  return (
    <div>
      <h1>Create a new joke</h1>
      <form style={formStyle} onSubmit={addJoke}>
        <textarea style={inputStyle} rows="10" cols="70" value={jokeContent} onChange={handleContentChange} />
        <br />
        <select style={inputStyle} value={jokeCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>{category.label}</option>
          ))}
        </select>
        <br />
        <button style={inputStyle} type="submit">Add Joke</button>
      </form>
    </div>
  )
}

export default AddJoke