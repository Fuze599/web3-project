import { useContext } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'

const JokeDetail = (joke) => {

    console.log(joke)

    return (
        <>
            <div>{joke.content}</div>
        </>
    )
}

export default JokeDetail