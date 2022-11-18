import { useContext, useEffect, useState } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'
import {useParams} from "react-router-dom";

const JokeDetail = () => {
    const [joke, setJoke] = useState({})
    const { getJoke } = useContext(JokesContext)

    const jokeId = useParams().id
    useEffect(() => {
        const loadJoke = async () => {
            setJoke(await getJoke(jokeId))
        }
        loadJoke()
      }, [getJoke, jokeId])
    return (
        <>
            <div>{joke.content}</div>
        </>
    )
}

export default JokeDetail