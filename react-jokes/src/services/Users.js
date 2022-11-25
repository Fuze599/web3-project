import axios from "axios"

const baseUrl = "//localhost:3002/users"

const getOne = (pseudo) => axios.get(`${baseUrl}?pseudo=${pseudo}`).then(response => response.data)

const UsersAPI = {
  getOne
}

export default UsersAPI