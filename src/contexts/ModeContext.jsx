import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({children}) => {

    const [mode, setMode] = useState('light');
    const toggleMode = () =>{
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
    }
  return (
    <ModeContext.Provider value={{mode, toggleMode}}>
      {children}
    </ModeContext.Provider>
  );
}