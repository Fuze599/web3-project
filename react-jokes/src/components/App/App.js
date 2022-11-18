import About from "components/About/About"
import Connection from "components/Connection/Connection"
import Home from "components/Home/Home"
import AddJoke from "components/Jokes/AddJoke"
import ListJokes from "components/Jokes/ListJokes"
import OneJoke from "components/Jokes/OneJoke"
import Registration from "components/Registration/Registration"
import { Routes, Route, Link } from "react-router-dom"

const App = () => {

  return (
    <div>
      <div>
        <Link to="/">jokes</Link>
        <Link to="/create">create new</Link>
        <Link to="/about">about</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jokes' element={<ListJokes />} />
        <Route path='/create' element={<AddJoke />} />
        <Route path='/about' element={<About />} />
        <Route path='/jokes/:id' element={<OneJoke />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/connection' element={<Connection />} />
      </Routes>
    </div>
  )
}

export default App
