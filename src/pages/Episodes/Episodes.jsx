import React, { useEffect } from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Episodes() {
  //create state to hold episode numbers
  const [options, setOptions] = React.useState([])
  //need state to hold option selected
  const [selectedOption, setSelectedOption] = React.useState(1)

  //create state for episode info
  const [selectedEpisode, setSelectedEpisode] = React.useState('')
  //need state for character info
  const [characterList, setCharacterList] = React.useState([])

  const handleSelectChange = (e) => {
    console.log(e.target.value)
    //store value
    setSelectedOption(e.target.value)
  }

 //https://rickandmortyapi.com/api/episode
 //to create drop down menu need to know how many episodes

 useEffect(
  ()=>{
    console.log('page loaded')
    //call api for # of episodes
    axios.get('https://rickandmortyapi.com/api/episode')
    .then(res => {
      console.log(res.data.info.count)
      //create array with 1 to this count
      const newOptions = []
      for (let i=1; i<= res.data.info.count; i++){
        newOptions.push(i)
      }
      console.log(newOptions)
      //store in state
      setOptions(newOptions)
    })
    .catch(err => console.log(err))

  }, [] //empty array runs once when page loads
 )

 //useEffect to run when option changes

 useEffect(
  () => {
    console.log('you selected', selectedOption)
    //call api to get data for this episode
    //https://rickandmortyapi.com/api/episode/20
    //use async JS
    const fetchEpisodeData = async() => {
      try{
        //make api call and wait for result
        const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
        console.log(res.data)
        //store in state
        setSelectedEpisode(res.data)
        //to get each character data need to make api calls from res.data.characters
        
       const episodeCharacters = await Promise.all(
          res.data.characters.map(url => {
            return axios.get(url).then(res => res.data)
          })
        )

        console.log(episodeCharacters)
        //store in state
        setCharacterList(episodeCharacters)

      } catch(err) {
        console.log(err)
      }
    }
    //call the function
    fetchEpisodeData();
  }, [selectedOption] //dependency array
 )

  return (
    <div className='episodes-container'>
      <div>
        <label>Select an episode:</label>
        <select id='select-episode' onChange={handleSelectChange} >
          {
            options.map(num => <option key={num} value={num }>{`Episode ${num}`}</option>)
          }
        </select>
      </div>

      <div>
        <div className='episodes-info'>
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className='character-container'>
            {characterList.map(item=><CharacterCard key={item.id} character={item}/>)}
        </div>
      </div>
    
    </div>
  )
}

export default Episodes