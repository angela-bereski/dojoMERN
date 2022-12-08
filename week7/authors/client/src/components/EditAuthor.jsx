import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const Edit = (props) => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            setName(res.data.author.name);
        })
        .catch(err => console.log(err))
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
            name
        })
        .then(res => {
            console.log(res);
            setErrors([]);
            navigate('/authors');
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
            <h2>Update Author</h2>
            <form onSubmit={updateAuthor}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
                <p>
                    <label>Author Name:</label><br />
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={(e)=> {setName(e.target.value)}} />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Edit;