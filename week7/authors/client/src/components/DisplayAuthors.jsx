import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const DisplayAuthors = (props) => {
    const {removeFromDom, authors, setAuthors} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res.data);
            setAuthors(res.data.authors);
        })
        .catch((err)=> {
            console.log(err)
        })
    }, [])

    const authorsSort = [...authors].sort((a,b) => a.name > b.name ? 1 : -1);
    console.log(authorsSort);
    
    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            removeFromDom(id)
            console.log('it worked')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            {
                authorsSort.map((author, index) => {
                return (
                    <div key={author._id} className="displayFun">
                        <Link to={`/authors/${author._id}`}> {author.name} </Link> {"  "} | {"  "}
                        <Link to={`/authors/edit/${author._id}`}>Edit</Link>{"  "} | {"  "}
                        <button onClick={(e)=> {deleteAuthor(author._id)}}>Delete</button>
                    </div>
                )})
            }
        </div>
    )
}

export default DisplayAuthors;