import { View, Text } from 'react-native'
import React, {createContext, useState, useEffect} from 'react'
import AsynStorage from '@react-native-async-storage/async-storage'


export const MyContext = createContext();

export  function ContextApi({children}) {
  const [darkMode, setDarkMode] = useState(false);

  const DarkModeSet = () => {
    const newState = !darkMode
    setDarkMode(newState);
    AsynStorage.setItem('darkMode', newState.toString());
  }

  useEffect(() => {
    const preferences = async () => {
      try {
        const saveDarkMode = await AsynStorage.getItem('darkMode'); 
        if (saveDarkMode !== null){
             setDarkMode(saveDarkMode === true);
        }
      } catch (error) {
        console.error('Error saving dark mode', error);
      }
    }
    preferences();
  }, [])
  return (
    <MyContext.Provider value={{darkMode, setDarkMode, DarkModeSet}}>
      {children}
    </MyContext.Provider>
    
  )
}