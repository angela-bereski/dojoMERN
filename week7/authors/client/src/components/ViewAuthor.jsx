import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const View = (props) => {
    const [author, setAuthor] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=> {
            console.log(res.data);
            setAuthor(res.data.author);
        })
        .catch(err=> console.log(err))
    }, [])

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=> {
            console.log('it worked', res.data)
            navigate('/authors')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>

            <h2>{author.name}</h2>
            <button onClick={deleteAuthor}>Delete</button>

        </div>
    )

}

export default View;