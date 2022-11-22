import { useContext, useEffect, useState } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
import { useParams } from "react-router-dom";

const JokeDetail = () => {
  const [joke, setJoke] = useState({})
  const [likes, setLikes] = useState(0)
  const { getJoke, likeJoke } = useContext(JokesContext)

  const jokeId = useParams().id
  useEffect(() => {
    const loadJoke = async () => {
      const newJoke = await getJoke(jokeId)
      setJoke(newJoke)
      setLikes(newJoke.like)
    }
    loadJoke()
  }, [getJoke, jokeId])

  const handleLikeButton = () => {
    const newLikes = joke.like + 1
    const updatedJoke = {
      ...joke,
      "like": newLikes
    }
    setLikes(newLikes)
    likeJoke(joke.id, updatedJoke)
    document.getElementById("likeBtn").disabled = true
  }

  return (
    <>
      <div>joke = {joke.content}</div>
      <div>categorie = {joke.category}</div>
      <div>date d'ajout = {joke.date}</div>
      <div>nombre de likes = {likes}</div>
      <button id="likeBtn" onClick={handleLikeButton}>Like joke</button>
    </>
  )
}

export default JokeDetail