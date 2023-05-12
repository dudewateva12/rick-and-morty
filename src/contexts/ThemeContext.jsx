import {useState, createContext, useEffect} from 'react'

//create this context
export const ThemeContext = createContext()

//create provider
export default function ThemeContextProvider(props){
    //create global state
    const [darkMode, setDarkMode] = useState(false)

    useEffect(
        ()=>{
            console.log('context loaded')
            //get value from localstorage
            const storedDarkMode = localStorage.getItem('darkMode')
            if (storedDarkMode){
                //use this to initialize state
                setDarkMode(JSON.parse(storedDarkMode))
            }
            //console.log(typeof(storedDarkMode))
        },[] //runs once when context loads
    )

    useEffect(
        ()=>{
            console.log('darkmode now', darkMode)
            //save value anytime it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        },[darkMode] //runs anytime dark mode changes
    )

    useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedDarkMode = localStorage.getItem('darkMode')
            if (storedDarkMode){
                //use this to initialize state
                setDarkMode(JSON.parse(storedDarkMode))
            }
            //console.log(typeof(storedDarkMode))
        }, [] //runs once when context loads
    )

    useEffect(
        ()=>{
            console.log('darkMode now ', darkMode)
            //save value anytime it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode] //runs anytime darkMode changes
    )

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}