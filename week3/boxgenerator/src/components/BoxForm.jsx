import React, {useState} from 'react'

const BoxForm = (props) => {

    const { boxArray, setBoxArray } = props;

    const [boxColor, setBoxColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxArray( [...boxArray, boxColor] );
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Color:</label>
                <input type="text" name="boxColor" onChange= { (e) =>setBoxColor(e.target.value)} />
                <button>Add Colored Box</button>
            </form>
        </div>
    )
}

export default BoxForm