import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description});
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input type="text" name="price" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" name="description" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default ProductForm;