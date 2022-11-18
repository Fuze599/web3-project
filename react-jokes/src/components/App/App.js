import About from "components/About/About"
import Home from "components/Home/Home"
import AddJoke from "components/Jokes/AddJoke"
import ListJokes from "components/Jokes/ListJokes"
import JokeDetail from "components/Jokes/JokeDetail"
import { Routes, Route, Link } from "react-router-dom"

const App = () => {

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
        <Route path='/jokes/:id' element={<JokeDetail />} />
      </Routes>
    </div>
  )
}

export default App
