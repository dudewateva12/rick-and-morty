import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'

function Homepage() {

//create state for characters
const [characters, setCharacters] = useState([])

//https://rickandmortyapi.com/api/character

//get api data when page loads

useEffect(
    ()=>{
        console.log('homepage loaded')
        //call api to get data
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(res=>{
            console.log(res.data.results)
            //store this data in state
            setCharacters(res.data.results)
        })
        .catch(err=> console.log(err)) 

    }, [] //empty array means it only runs on first render
)

  return (
    <div className='home-container'>
        <Search setCharacters={setCharacters} />
        <h1>Main Characters</h1> 
        <div className='characters-container'>
            {
                characters.map(item=><CharacterCard key={item.id} character={item}/>)
                // characters.map(item=><p key={item.id}>{item.name}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage