 
import { useContext } from "react"
import { ThemeContext } from "../App"

function FunctionContextComponent(){
const darkTheme = useContext (ThemeContext)
const themeStyles = {
  backgtroundColor:darkTheme ? 'aqua' : 'red',
  color:darkTheme ? 'red' : 'aqua', 
  padding:"2rem",
  margin:"2rem"
}
return (
  <div style={themeStyles}>Function Theme</div>
)
}

export default FunctionContextComponent