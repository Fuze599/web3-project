import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    if (!localStorage.getItem("isConnected")) {
        navigate("/connection")
        return
    }
    return <p>HOME</p>
}

export default Home