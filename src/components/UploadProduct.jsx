import React from 'react';

function UploadProduct(){
    return (
        <form className="product__form">
            <label className="form__label">product name</label>
            <input id="prod-name" type="text" className="form__input"/>
            <label className="form__label">price</label>
            <input id="price" type="number" className="form__input"/>

            <label className="form__label">category</label>
            <select name="categories" id="categories" className="form__input">
                <option value="#">Select Category</option>
                <option value="Beauty">Beauty</option>
                <option value="Sports">Sports</option>
            </select>
            <label className="form__label">quantity</label>
            <input id="price" type="number" className="form__input"/>

            <label className="form__label">description</label>
            <textarea id="description" name="description" className="form__input" rows="4" cols="50"></textarea>
            
            <button className="form__button">upload image</button>
            <input id="image" type="file" className="form__input"/>

            <button type="submit" className="form__button">upload product</button>
        </form>
    );
}

export default UploadProduct;