
import React, { useState } from 'react';


const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    const [bday, setBday] = useState(age);
    const buttonClick = () => {
        setBday(bday + 1);
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {bday}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick= {buttonClick}> Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PersonCard;