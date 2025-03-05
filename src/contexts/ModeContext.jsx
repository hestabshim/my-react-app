import { createContext, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
      //Variable to store the mode state
      const [mode, setMode] = useState("light");
      //function to update the mode state
      const handleModeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      };

      return (
        <ModeContext.Provider value={{ mode, handleModeChange }}>
          {children}
        </ModeContext.Provider>
      )

};
export default ModeContext;