import { useContext, useEffect, useState } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
import { useParams } from "react-router-dom";
import './JokeDetail.css'

const JokeDetail = () => {
  const [joke, setJoke] = useState({})
  const { getJoke, likeJoke } = useContext(JokesContext)

  const jokeId = useParams().id
  useEffect(() => {
    const loadJoke = async () => {
      const newJoke = await getJoke(jokeId)
      setJoke(newJoke)
    }
    loadJoke()
  }, [getJoke, jokeId])

  const handleLikeButton = () => {
    const newLike = joke.like + 1
    const updatedJoke = {
      ...joke,
      "like": newLike
    }

    likeJoke(joke.id, updatedJoke)
    document.getElementById("likeBtn").disabled = true
  }


  const formStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "10px 20px",
    margin: "20px 20%"
  }

  const titleStyle = {
    backgroundColor: "#4299e1",
    padding: "20px",
    color: "white"
  }
  
  return (
      <div style={formStyle}>
        <h3 style={titleStyle}>{joke.content}</h3>
        <p>Catégorie : {joke.category}</p>
        <p>Date : {joke.date}</p>
        <p>Likes : {joke.like}</p>
        <button id="likeBtn" onClick={handleLikeButton}>Like</button>
    </div>)
}

export default JokeDetail