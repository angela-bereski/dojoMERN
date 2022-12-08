import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch( err => console.log(err));
    }, [] );

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log('it worked', res.data)
                navigate("/products")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    );
}

export default Detail;