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
      alert("Incorrect pseudo or passsword !")
    }
  }

  const loginTitleStyle = {
    backgroundColor: "#4299e1",
    padding: "10px",
    color: "white"
  }

  const formStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    margin: "0 20%"
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  }

  return (
    <div>
      <h1 style={loginTitleStyle}>Login</h1>
      <form style={formStyle}>
        <label htmlFor="pseudo">Pseudo :</label>
        <br/>
        <input style={inputStyle} onChange={handlerPseudoChange} type="text" id="pseudo" name="pseudo" required></input>
        <br/>
        <label htmlFor="password">Password :</label>
        <br/>
        <input style={inputStyle} onChange={handlerPasswordChange} type="password" id="password" name="password" required></input>
        <br/>
        <input style={inputStyle} type="submit" value="Login" onClick={onSubmitButtonClick}></input>
      </form>
    </div>
  )
}
export default Connection