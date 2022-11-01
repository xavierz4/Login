import { useState } from "react"

export const Form = (props) => {

  const [headingText, setHeadingText] = useState("Register")
  const [isMouseOver, setIsMouseOver ] = useState(false)

  const handleClick = () => {
    return(
      console.log("click")
    )
  }
  const handleOnMouseOver = () => {
    setIsMouseOver(true)
  }

  const handleOnMouseOut = () => {
    setIsMouseOver(false)
  }
  
  return (
    
        <form action="">
            <h1 style={{textAlign:"center"}}>{headingText}</h1>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
             {!props.isRegistered && <input type="text" placeholder="Confirm Password"/> }
            
            <button type="submit"
              onClick={handleClick}
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              style={{backgroundColor: isMouseOver ? "LimeGreen": "ForestGreen" }}
            >
                {props.isRegistered ? "Login": "Register"}
              
            </button>
        </form>
   
    
  )
}
