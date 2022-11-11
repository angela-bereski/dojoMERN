import React, {useState} from 'react'
import NavContext from '../contexts/NavBarContext'
const Wrapper = ({children}) => {
    const [name, setName] = useState("Bob Smith");

  return (
    <div>
        <NavContext.Provider value = {{name, setName}} >
            {children}
        </NavContext.Provider>
    </div>
  )
}

export default Wrapper