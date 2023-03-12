import { createContext, useState } from "react";
import FunctionContextComponent from "./Components/FunctionContextComponent";

export const ThemeContext = createContext()

const App = () => {
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark(prev => !prev)
  }
  return(
    <>
    <ThemeContext.Provider value={dark}>
       <button onClick={toggleTheme}>Toggle</button>
      <FunctionContextComponent>
      
      </FunctionContextComponent>
    </ThemeContext.Provider>
    </>
  )

}
export default App