import React, {useContext} from 'react'
import NavBarContext from '../contexts/NavBarContext'

const Form = () => {

    const {name, setName} = useContext(NavBarContext);
    
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Name:</label> {""}
            <input value={name} onChange={e => setName(e.target.value)} />

        </form>
    </div>
  )
}

export default Form