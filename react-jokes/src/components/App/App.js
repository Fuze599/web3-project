import About from "components/About/About"
import Home from "components/Home/Home"
import AddJoke from "components/Jokes/AddJoke"
import ListJokes from "components/Jokes/ListJokes"
import JokeDetail from "components/Jokes/JokeDetail"
import { Routes, Route, Link, useMatch } from "react-router-dom"
import { useContext } from "react"
import { Context as JokesContext } from '../../contexts/JokesContext'

const App = () => {

  const { getJoke } = useContext(JokesContext)
  
  const match = useMatch('/jokes/:id')
  const joke = match
    ? getJoke(Number(match.params.id))
    : null

  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/jokes">jokes</Link>
        <Link to="/create">create new</Link>
        <Link to="/about">about</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jokes' element={<ListJokes />} />
        <Route path='/create' element={<AddJoke />} />
        <Route path='/about' element={<About />} />
        <Route path='/jokes/:id' element={<JokeDetail joke={joke} />} />
      </Routes>
    </div>
  )
}

export default App
