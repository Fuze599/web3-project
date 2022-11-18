import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [pseudo, setPseudo] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState([
    {
      "id": 1,
      "pseudo": "eric",
      "password": "eric"
    }
  ])

  const navigate = useNavigate()
  if (localStorage.getItem("isConnected")) {
    navigate("/")
    return
  }

  const handlerPseudoChange = (e) => {
    setPseudo(e.target.value)
  }

  const handlerPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitButtonClick = (e) => {
    e.preventDefault()
    const newUsers = users.concat({ id: users.at(-1).id + 1, pseudo: pseudo, password: password })
    if (users.find(u => u.pseudo === pseudo)) {
      console.log("User already exists")
      console.log(users)
    } else {
      console.log(newUsers)
      setUsers(newUsers) 
      localStorage.setItem("isConnected", true)
      navigate("/")
    }
  }

  return (
    <div>
      <h1>Registration</h1>
      <form>
        <label htmlFor="pseudo">Pseudo :</label>
        <input onChange={handlerPseudoChange} type="text" id="pseudo" name="pseudo" required></input>
        <br></br>
        <label htmlFor="password">Password :</label>
        <input onChange={handlerPasswordChange} type="text" id="password" name="password" required></input>
        <input type="submit" value="S'enregistrer" onClick={onSubmitButtonClick}></input>
      </form>
    </div>
  )
}

export default Registration