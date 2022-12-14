import React, { useState } from "react"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import JokesAPI from "../services/Jokes"
import UsersAPI from "../services/Users"

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
	const [jokes, setJokes] = useState([])
	const [isConnected, setIsConnected] = useState(false)

	const initialLoad = () => {
		JokesAPI
			.getAll()
			.then(jokes => setJokes(jokes))
			.catch(error => console.warn(error))

		if (localStorage.getItem("isConnected")) {
			setIsConnected(true)
		}
	}
	useEffect(initialLoad, [])

	const createJoke = (payload) => {
		const joke = {
			...payload,
			id: uuidv4(),
			like: 0
		}
		JokesAPI
			.create(joke)
			.then(createdJoke => {
				setJokes([...jokes, createdJoke])
			})
	}

	const getJoke = (id) => {
		return JokesAPI
			.getOne(id)
			.then(joke => joke)
			.catch(error => console.warn(error))
	}

	const getUser = (pseudo) => {
		return UsersAPI
			.getOne(pseudo)
			.then(user => user)
			.catch(error => console.warn(error))
	}

	const likeJoke = (id, payload) => {
		const newJokes = Array.from(jokes)
		const joke = newJokes.find(j => j.id === id)

		const index = newJokes.indexOf(joke)
		newJokes[index].like++
		setJokes(newJokes)

		JokesAPI
			.likeOne(id, payload)
			.then(joke => joke)
			.catch(error => console.warn(error))
	}

	const categories = [
		{
			label: "farce",
			value: "farce",
		},
		{
			label: "informatique",
			value: "informatique",
		},
		{
			label: "blagues de toto",
			value: "blagues de toto",
		},
		{
			label: "anecdote",
			value: "anecdote",
		},
		{
			label: "chuck Norris facts",
			value: "chuck Norris facts",
		},
		{
			label: "autres",
			value: "autres",
		},
	]

	return (
		<>
			<Context.Provider value={{ jokes, createJoke, getJoke, likeJoke, getUser, isConnected, setIsConnected, categories }}>
				{props.children}
			</Context.Provider>
		</>
	)
}


export {
	Context,
	ProviderWrapper,
}