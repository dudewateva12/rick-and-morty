import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {

    //need state to hold user input
    const [query, setQuery] = React.useState('')
    //https://rickandmortyapi.com/api/character/?name=smith

    const handleSubmit = (e) => {
        console.log(query)
        e.preventDefault();
        //make api call to get characters matching query
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res=>{
            console.log(res.data.results)

            //use setCharacters to change the state 
            setCharacters(res.data.results)
        })
        .catch(err=> {
            if(err.response.status === 404){
                alert(`There is no character named ${query}`)
            }
            else{
                console.log(err)
            }
        })
        //clear textbox
        setQuery('')        
    }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
        <input type='text'
        value={query}
        onChange={e=>setQuery(e.target.value)} 
        placeholder='Search all characters' />
    </form>
  )
}

export default Search