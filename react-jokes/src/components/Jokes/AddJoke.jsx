import { useState } from "react";
import { useContext } from "react"
import { Context as JokesContext } from "../../contexts/JokesContext"

const AddJoke = () => {
    
    const { createJoke } = useContext(JokesContext)
    const [jokeContent, setJokeContent] = useState('')
    const [jokeCategory, setJokeCategory] = useState('')

    const handleContentChange = (event) => {
        setJokeContent(event.target.value)
    }

    const handleCategoryChange = (event) =>{
        setJokeCategory(event.target.value)
    }

    const addJoke = (event) => {
      event.preventDefault()
      const joke = {
         "content":jokeContent,
         "category":jokeCategory,
         "date": new Date(Date.now()).toDateString()
      }
      createJoke(joke)
      setJokeContent('')
      setJokeCategory('')
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

    const formStyle = {
      textAlign: "center",
      margin: "50px"
    }

    const inputStyle = {
      textAlign: "center",
      margin: "10px"
    }

    return(
    <div>
      <h1>Create new joke</h1>
      <form style={formStyle} onSubmit={addJoke}>
        <textarea style={inputStyle} rows="10" cols="70" value = {jokeContent} onChange={handleContentChange}/>
        <br/>
        <select style={inputStyle} value= {jokeCategory} onChange={handleCategoryChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <br/>
        <button style={inputStyle} type="submit">Add Joke</button>
      </form>
    </div>
    )
}

export default AddJoke