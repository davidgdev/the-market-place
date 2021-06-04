import React from 'react';
import '../sass/components/_PurchaseForm.scss';

function PurchaseForm(){
    return (
        <section className="purchase">
            <section className="purchase__total"></section>
            <form className="purchase__form">
                <div id="card-type">
                    <div className="form__checkbox">
                        <label className="form__label">credit card</label>
                        <input id="check-credit" type="checkbox" className="form__input-check"/>
                    </div>
                    <div className="form__checkbox">
                        <label className="form__label">debit card</label>
                        <input id="check-debit" type="checkbox" className="form__input-check"/>
                    </div>
                </div>
                <div id="card_number">
                    <label className="form__label">number</label>
                    <input id="number-card" type="text" className="form__input"/>
                </div>
                <div id="card-info">
                    <div className="form__exp">
                        <label className="form__label">expiration date</label><br/>
                        <input id="expiration-card" type="date" className="form__input"/>
                    </div>
                    <div className="form__sec">
                        <label className="form__label">security number</label><br/>
                        <input id="security-card" type="text" className="form__input"/>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default PurchaseForm;