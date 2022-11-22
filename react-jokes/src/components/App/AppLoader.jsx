import { ProviderWrapper as JokesProviderWrapper } from "../../contexts/JokesContext"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

const AppLoader = () => {
  return (
    <JokesProviderWrapper>
      <Router>
        <App />
      </Router>
    </JokesProviderWrapper>
  )
}

export default AppLoader
