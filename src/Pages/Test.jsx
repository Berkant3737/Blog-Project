import {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
function Test() {
    const {theme,setTheme} = useContext(ThemeContext)
    console.log(theme);
  return (
    <div> 
        {theme}
    </div>
  )
}

export default Test