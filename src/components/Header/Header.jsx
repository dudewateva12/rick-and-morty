import React, { useContext } from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

function Header() {
  //change to use global state
  //NOTE {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)



  //create var for darkMode
  // const darkMode = false;

  //create state for theme
  //const [darkMode, setDarkMode] = React.useState(false)



  return (
    <div className={darkMode?'header-container header-dark':'header-container'}>
        <div>
            <Link to='/' style={{marginRight:"10px"}}>Home</Link>
            <Link to='/about' style={{marginRight:"10px"}}>About</Link>
            <Link to='/episodes'>Episodes</Link>
        </div>
        <div>
        <Link to='/favorites'>My Favorites</Link>
        <button onClick = {()=>setDarkMode(!darkMode)}
        className={darkMode?'theme-button theme-button-dark':'theme-button'}>
          {
            darkMode?"Light Mode":"Dark Mode"
          }
          
          </button>
          </div>

    </div>
  )
}

export default Header