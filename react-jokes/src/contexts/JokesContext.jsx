import React, { useState } from "react"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import JokesAPI from "services/Jokes";

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
        JokesAPI
            .getOne(id)
            .then(joke => setJokes(joke))
            .catch(error => console.warn(error))
    }

    return (
        <>
            <Context.Provider value={{jokes, createJoke, getJoke}}>
                { props.children }
            </Context.Provider>
        </>
    )  
}
		

export {    
    Context,
    ProviderWrapper,    
}