import { useContext } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'

const ListJokes = () => {

    const { jokes } = useContext(JokesContext)

    return (
        <>
            {jokes.map((joke) => <div key={joke.id}>{joke.content}</div>)}
        </>
    )
}

export default ListJokes