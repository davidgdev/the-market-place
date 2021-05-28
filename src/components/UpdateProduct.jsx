import React from 'react';
import '../sass/components/_UploadProduct.scss';

function UpdateProduct(){
    return (
        <form className="product__form">
            <label className="form__label">product name</label>
            <input id="prod-name" type="text" className="form__input"/>
            <label className="form__label">price</label>
            <input id="price" type="number" className="form__input"/>

            <label className="form__label">category</label>
            <select name="categories" id="categories" className="form__input">
            <option value="#">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Clothing">Clothing</option>
                <option value="Fitness">Fitness</option>
                <option value="Travel">Travel</option>
            </select>
            <label className="form__label">quantity</label>
            <input id="price" type="number" className="form__input"/>

            <label className="form__label">description</label>
            <textarea id="description" name="description" className="form__input" rows="4" cols="50"></textarea>
            
            <div className="form__images">
                <button className="form__button button-upload">upload image</button>
                <input id="image" type="file" className="form__input-upload"/>
            </div>

            <button type="submit" className="form__button">update product</button>
        </form>
    );
}

export default UpdateProduct;