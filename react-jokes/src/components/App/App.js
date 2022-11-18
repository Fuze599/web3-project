import About from "components/About/About"
import Home from "components/Home/Home"
import AddJoke from "components/Jokes/AddJoke"
import ListJokes from "components/Jokes/ListJokes"
import JokeDetail from "components/Jokes/JokeDetail"
import { Routes, Route, Link } from "react-router-dom"

const App = () => {

  const generalStyle = {
    fontFamily: "Verdana"
  }

  const navbarStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
  }

  const navbarElementStyle = {
    textDecoration: 'none',
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    marginRight: "10px",
  }

  return (
    <div style={generalStyle}>
      <div style={navbarStyle}>
        <Link style={navbarElementStyle} to="/">Home</Link>
        <Link style={navbarElementStyle} to="/jokes">Jokes</Link>
        <Link style={navbarElementStyle} to="/create">Create new jokes</Link>
        <Link style={navbarElementStyle} to="/about">About</Link>
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
