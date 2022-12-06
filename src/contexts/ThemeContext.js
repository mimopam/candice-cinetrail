import React, {useState, createContext, useEffect} from "react";
export const ThemeContext = createContext();
//above is the global context name (ThemeContext)

export default function ThemeContextProvider(props) {
    //set up my global state to keep track of light and dark mode
    const [darkMode, setDarkMode] = useState(true);

    //have to get value from local storage when the page loads
    useEffect (
     ()=>{
      const theme = localStorage.getItem("darkMode");

    //stores everything as a string, needs to be a boolean
    //use JSON.parse to fix if value is not a string
    //all values in localStorage are stored as strings
    setDarkMode(JSON.parse(theme));
         }, []
    )
    
    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}





