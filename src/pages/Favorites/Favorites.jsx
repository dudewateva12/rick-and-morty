import React, {useContext} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'


function Favorites() {

     //change to use global state
  //NOTE {} not []
  const {favorites} = useContext(FavoritesContext)

  return (
    <div className='favorites-container'>
        <h1>My Favorite Characters</h1>
        <div className='favorites-characters'>
        {
        favorites.map(item=><CharacterCard key={item.id} character={item}/>)
        //favorites.map(item =><p>{item.name}</p>)
        }
        </div>
    </div>
  )
}

export default Favorites