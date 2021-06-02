import React from 'react';
import '../sass/components/_PurchaseForm.scss';

function Purchase(){
    return (
        <section className="purchase">
            <section className="purchase__total"></section>
            <form className="purchase__form">
                <div className="form__checkbox">
                    <label className="form__label">credit card</label>
                    <input id="check-credit" type="checkbox" className="form__input-check"/>
                    <label className="form__label">debit card</label>
                    <input id="check-debit" type="checkbox" className="form__input-check"/>
                </div>

                <label className="form__label">number</label>
                <input id="number-card" type="number" className="form__input"/>

                <div className="form__number">
                    <label className="form__label">expiration date</label>
                    <input id="expiration-card" type="date" className="form__input"/>
                    <label className="form__label">security number</label>
                    <input id="security-card" type="number" className="form__input"/>
                </div>
            </form>
        </section>
    )
}

export default Purchase;