import React, { useState } from 'react';
import useInput from '../utils/useInput';
import '../sass/components/_UploadProduct.scss';


function UploadProduct(){
    const [name, setName] = useInput('');
    const [price, setPrice] = useInput(0.00);
    const [category, setCategory] = useInput('');
    const [quantity, setQuantity] = useInput(1);
    const [description, setDescription] = useInput('');

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState('hidden');

    function handleSubmit(ev) {
        ev.preventDefault();
        if (name === '' || price === "" || category === "" || quantity ==="" || description ==="") {
            setMessage("Please add all product details");
            setShowMessage('failure');
            setTimeout(function(){ setShowMessage('hidden'); }, 1500);
        } else if (price <= 0 || quantity <= 0 ) {
            setMessage("Price and Quantity must be above zero");
            setShowMessage('failure');
            setTimeout(function(){ setShowMessage('hidden'); }, 1500);
        } else { 
        let newProduct = {
            "name": name,
            "price": price,
            "category": category,
            "quantity": quantity,
            "description": description,
            "seller": 'johndoe'
        };
        fetch('https://608d9e2cfe2e9c00171e1daf.mockapi.io/api/v1/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 201) {
                setMessage("Product created succesfully!")
                setShowMessage('success');
                setTimeout(function(){ setShowMessage('hidden'); }, 1500);
                return res;
            }
            
        })
        .catch(err => {
            setMessage(err);
            setShowMessage('failure');
            setTimeout(function(){ setShowMessage('hidden'); }, 1500);
            return err
        })
        }
    }

    return (
        <>
        <form id="product-form" className="product__form">
            <label className="form__label">product name</label>
            <input id="prod-name" type="text" className="form__input" value={name} onChange={setName} />
            <label className="form__label">price</label>
            <input id="price" type="number" className="form__input" value={price} onChange={setPrice} />

            <label className="form__label">category</label>
            <select name="categories" id="categories" className="form__input" value={category} onChange={setCategory} >
                <option value="#">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Clothing">Clothing</option>
                <option value="Fitness">Fitness</option>
                <option value="Travel">Travel</option>
            </select>
            <label className="form__label">quantity</label>
            <input id="price" type="number" className="form__input" value={quantity} onChange={setQuantity} />

            <label className="form__label">description</label>
            <textarea id="description" name="description" className="form__input" rows="10" cols="50" value={description} onChange={setDescription} ></textarea>
            
            <div className="form__images">
                <button className="form__button button-upload">upload image</button>
                <input id="image" type="file" className="form__input-upload"/>
            </div>

            <button type="submit" className="form__button" onClick={handleSubmit}>upload product</button>
            <div className={showMessage}>
                {message}
            </div>
        </form>
        
        </>
    );
}

export default UploadProduct;