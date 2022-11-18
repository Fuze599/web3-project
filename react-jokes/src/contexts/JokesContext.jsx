import React, { useState } from "react"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import JokesAPI from "../services/Jokes"

const Context = React.createContext(null)
		
const ProviderWrapper = (props) => {
    const [jokes, setJokes] = useState([])

    const initialLoad = () => {
        JokesAPI
            .getAll()
            .then(jokes => setJokes(jokes))
            .catch(error => console.warn(error))
    }
    useEffect(initialLoad, [])
    
    const createJoke = (payload) => {
        const joke = {
            ...payload,
            id: uuidv4()
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

    const likeJoke = (id, payload) => {
        JokesAPI
            .likeOne(id, payload)
            .then(joke => joke)
            .catch(error => console.warn(error))
    }

    return (
        <>
            <Context.Provider value={{jokes, createJoke, getJoke, likeJoke}}>
                { props.children }
            </Context.Provider>
        </>
    )  
}
		

export {    
    Context,
    ProviderWrapper,    
}