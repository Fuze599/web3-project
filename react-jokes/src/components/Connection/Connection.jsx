import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from '../../contexts/JokesContext'

const Connection = () => {
  const navigate = useNavigate()
  const [pseudo, setPseudo] = useState("")
  const [password, setPassword] = useState("")
  const { getUser, setIsConnected } = useContext(Context)

  const handlerPseudoChange = (e) => {
    setPseudo(e.target.value)
  }

  const handlerPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const connectUser = () => {
    localStorage.setItem("isConnected", true)
    setIsConnected(true)
    navigate("/")
  }

  const onSubmitButtonClick = async (e) => {
    e.preventDefault()
    const user = await getUser(pseudo)
    if (user && user.length === 1 && user[0].password === password) {
      connectUser()
    } else {
      console.log("Incorrect password")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="pseudo">Pseudo :</label>
        <input onChange={handlerPseudoChange} type="text" id="pseudo" name="pseudo" required></input>
        <br></br>
        <label htmlFor="password">Password :</label>
        <input onChange={handlerPasswordChange} type="text" id="password" name="password" required></input>
        <input type="submit" value="Se connecter" onClick={onSubmitButtonClick}></input>
      </form>
    </div>
  )
}
export default Connection