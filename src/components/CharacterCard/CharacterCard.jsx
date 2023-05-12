import React, {useContext} from 'react'
import './CharacterCard.css'
import {Link} from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FavoritesContext } from '../../contexts/FavoritesContext';


function CharacterCard({character}) {
  //change to use global state
  //NOTE {} not []
  const {favorites, addCharacter, removeCharacter} = useContext(FavoritesContext)

  //create variable for heart
  //const isFavorite = false;
  //need to change to state
  const [isFavorite, setIsFavorite] = React.useState(false)

  //need to check if this character is a favorite
  //anytime favorites changes
  React.useEffect(
    ()=>{
      console.log('update isFavorite')
      //is this char in fav
      setIsFavorite(favorites.find(item=>character.id === item.id))
      //if not found returns undefined which is considered false

    }, [favorites]
  )
  return (
    <div className='character-card'> 
        <img src={character.image} />
        <p>{character.name}</p>
        <div className='button-container'>
          <Link to={`/details/${character.id}`}>See Details</Link> 
          {
            isFavorite?
            <FaHeart onClick={()=>removeCharacter(character.id)} className='heart-icon' />
            :
            <FaRegHeart onClick={()=>addCharacter(character)}
            className='heart-icon' />
          }
        </div>
        
    </div>
  )
}

export default CharacterCard