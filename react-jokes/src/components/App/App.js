import About from "components/About/About"
import Home from "components/Home/Home"
import AddJoke from "components/AddJoke/AddJoke"
import ListJokes from "components/ListJokes/ListJokes"
import JokeDetail from "components/JokeDetails/JokeDetail"
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom"
import Connection from "components/Connection/Connection"
import { Context } from '../../contexts/JokesContext'
import { useContext } from "react"
import './App.css'

const App = () => {
  const { isConnected, setIsConnected } = useContext(Context)
  const navigate = useNavigate()

  const generalStyle = {
    fontFamily: "Verdana"
  }

  const navbarStyle = {
    color: "white",
    backgroundColor: "#4299e1",
    padding: "10px",
  }

  const navbarElementStyle = {
    textDecoration: 'none',
    color: "white",
    backgroundColor: "#4299e1",
    padding: "10px",
    marginRight: "10px",
    cursor: "pointer"
  }

  const disconnect = () => {
    setIsConnected(false)
    localStorage.removeItem("isConnected")
    navigate("/login")
  }

  return (
    <div style={generalStyle}>
      {
        isConnected ?
          <div style={navbarStyle}>
            <Link style={navbarElementStyle} to="/">Accueil</Link>
            <Link style={navbarElementStyle} to="/jokes">Blagues</Link>
            <Link style={navbarElementStyle} to="/create">Créer une nouvelle blague</Link>
            <Link style={navbarElementStyle} to="/about">À propos</Link>
            <span style={navbarElementStyle} onClick={disconnect}>
              Se déconnecter
            </span>
          </div>
          :
          <></>
      }


      <Routes>
        <Route path='/' element={isConnected ? <Home /> : <Navigate replace to="/login" />} />
        <Route path='/login' element={!isConnected ? <Connection /> : <Navigate replace to="/" />} />
        <Route path='/jokes' element={isConnected ? <ListJokes /> : <Navigate replace to="/login" />} />
        <Route path='/create' element={isConnected ? <AddJoke /> : <Navigate replace to="/login" />} />
        <Route path='/about' element={isConnected ? <About /> : <Navigate replace to="/login" />} />
        <Route path='/jokes/:id' element={isConnected ? <JokeDetail /> : <Navigate replace to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
