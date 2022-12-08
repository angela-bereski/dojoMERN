import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const AuthorForm = () => {
    const [authors, setAuthors] = useState('');
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createAuthor', {
            name
        })
        .then(res => {
            console.log(res);
            setErrors([]);
            setAuthors([...authors, res.data.author]);
            navigate("/authors")
        })
        .catch((err) => {
            const errorResponse = err.response.data.errors;
            const errorArr= [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
                console.log(err.response.data.errors)
            }
            setErrors(errorArr);
        }) 
    }

    return (
        <div>
            <form onSubmit = {onSubmitHandler}>
                {errors.map((err,index)=> <p key={index}>{err}</p>)}
                <p>
                    <label htmlFor="name">Add a New Author:</label>
                    <input type="text" onChange = {(e)=>setName(e.target.value)} value={name}/>
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </p>
                <input type="submit" />
            </form>
        </div>
    )

}

export default AuthorForm;