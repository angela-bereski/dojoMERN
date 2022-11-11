import React, {useContext} from 'react'
import NavBarContext from '../contexts/NavBarContext'
const Navbar = () => {

    const {name} = useContext(NavBarContext)

  return (
    <div>
        <h1 className="bg-turquoise color-white">Hi, {name}!</h1>

    </div>
  )
}

export default Navbar