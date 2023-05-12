import {useState, createContext, useEffect} from 'react'

//create this context
export const FavoritesContext = createContext()

//create provider
export default function FavoritesContextProvider(props){
    //create global state
    const [favorites, setFavorites] = useState([])
    
    useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedFavorites = localStorage.getItem('favoritesList')
            if (storedFavorites){
                //use this to initialize state
                setFavorites(JSON.parse(storedFavorites))
            }
            
        }, [] //runs once when context loads
    )

 

    const addCharacter = (charToAdd) =>{
        console.log('add', charToAdd)
        //add charToAdd to favorites
        let newFavorites = [...favorites, charToAdd]
        //update state
        setFavorites(newFavorites)
        //update local storage
        localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
    }

    const removeCharacter = (charId) =>{
        console.log('remove', charId)
        //remove the object with charId
        let newFavorites = favorites.filter(item=>item.id !== charId)
        //update state
        setFavorites(newFavorites)
        //update local storage
        localStorage.setItem('favoritesList', JSON.stringify(newFavorites))

    }

    return (
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}} >
            {props.children}
        </FavoritesContext.Provider>
    )
}