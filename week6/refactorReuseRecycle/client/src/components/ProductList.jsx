import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Navigate, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    

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

    const removeFromDom = id => {
        setProducts(products.filter(product=> product._id !== id))
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
                        <DeleteButton id={product._id} successCallback= {() => Navigate('/products')} />
                    </div>
                )})
            }
        </div>
    )
}

export default ProductList;