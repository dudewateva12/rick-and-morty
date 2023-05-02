import React from 'react'
import './CharacterDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    //need to know ID of character
    //get ID from the parameter in the url
    const {characterId} = useParams()

    //create state to store character data
    const [character, setCharacter] = React.useState('')

    //https://rickandmortyapi.com/api/character/4
    
    //need to get the data from API when page loads
    React.useEffect(
        ()=>{
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res =>{
                console.log(res.data)
                //store it in state
                setCharacter(res.data)
            })
            .catch(err => console.log(err))

        }, [] //this means only run once when page loads

    )


  return (
    <div className='details-container'>
        <div className='all-details-div'>
        <img src={character?.image} />
        <div className='container-info'>
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>
        </div>
        
        

    </div>
  )
}

export default CharacterDetails