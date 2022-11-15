import { useState } from "react"

const Connection = () => {
  const [pseudo, setPseudo] = useState("")
  const [password, setPassword] = useState("")
  const users = [
    {
        "id": 1,
        "pseudo": "eric",
        "password": "eric"
    }
  ]

  const handlerPseudoChange = (e) => {
    setPseudo(e.target.value)
  }

  const handlerPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitButtonClick = (e) => {
    e.preventDefault()
    if (users.find(u => u.pseudo === pseudo && u.password === password)) localStorage.setItem("isConnected", true);
    else console.log("Incorrect password")
  }

  return (
    <div>
      <h1>Shark squad</h1>
      <form>
        <label for="pseudo">Pseudo :</label>
        <input onChange={handlerPseudoChange} type="text" id="pseudo" name="pseudo" required></input>
        <br></br>
        <label for="password">Password :</label>
        <input onChange={handlerPasswordChange} type="text" id="password" name="password" required></input>
        <input type="submit" value="Se connecter" onClick={onSubmitButtonClick}></input>
      </form>
    </div>
  )
}
export default Connection