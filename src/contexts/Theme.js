//in the previous contextapi project we did the sme thing in two different files
//here we are doing them in a single file



import { createContext, useContext } from "react";


export const ThemeContext= createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){      //defining a custom hook to use ThemeContext whenever required
    return useContext(ThemeContext)
}