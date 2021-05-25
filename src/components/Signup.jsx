import React from 'react';
import '../sass/components/_Signup.scss'

function Signup(){
    return (
        <section className="signup">
            <form className="signup__form">
                <label className="form__label">name</label>
                <input id="name" type="text" className="form__input"/>
                <label className="form__label">last name</label>
                <input id="lastname" type="text" className="form__input"/>
                <label className="form__label">email</label>
                <input id="email" type="email" className="form__input"/>
                <label className="form__label">password</label>
                <input id="password" type="password" className="form__input"/>
                <label className="form__label">confirm password</label>
                <input id="conf-password" type="password" className="form__input"/>
                
                <div className="form__checkbox">
                    <label className="form__label">Seller</label>
                    <input id="check-seller" type="checkbox" className="form__input-check"/>
                    <label className="form__label">Buyer</label>
                    <input id="check-buyer" type="checkbox" className="form__input-check"/>
                </div>

                <button type="submit" className="form__button">sign up</button>
            </form>
        </section>
    )
}

export default Signup;