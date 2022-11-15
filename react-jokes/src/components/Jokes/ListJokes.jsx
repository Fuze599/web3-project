import { useContext } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'

const ListJokes = () => {

    console.log("PASSE");

    const { jokes } = useContext(JokesContext)

    return (
        <>
            {jokes.map((joke) => <div>{joke.content}</div>)}
        </>
    )
}

export default ListJokes