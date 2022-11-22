import axios from "axios"

const baseUrl = "//localhost:3001/jokes"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const getOne = (id) => axios.get(`${baseUrl}/${id}`).then(response => response.data)

const create = (jokePayload) => axios.post(baseUrl, jokePayload).then(response => response.data)

const likeOne = (id, payload) => axios.put(`${baseUrl}/${id}`, payload).then(response => response.data)

const PersonsAPI = {
  getAll,
  getOne,
  create,
  likeOne,
}

export default PersonsAPI