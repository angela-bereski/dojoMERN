import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data.products);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [] )

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDom(id)
                console.log('it worked')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Products</h1>
            {
                products.map((product, index) => {
                return (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`}> {product.title} </Link>{" "}|{" "}
                        <Link to={`/products/edit/${product._id}`}>Edit</Link>{" "}|{" "}
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )})
            }
        </div>
    )
}

export default ProductList;