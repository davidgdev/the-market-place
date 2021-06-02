import React from 'react';
import '../sass/components/_PurchaseTotalCard.scss'

function PurchaseTotalCard({text__description}){
    return(
        <section className="totalCard">

            <article className="product-description">
                <label className="form__label">description:</label>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </article>
            <article className="quantity-total">
                <div>
                    <label className="form__label">quantity</label>
                    <select id="quantity" name="quantity" className="form__input"> 
                        <option value="zero">0</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                    </select>
                </div>

                <label className="form__label">total: <span>$100</span></label>
            </article>       
        </section>
    );   
}

export default PurchaseTotalCard;