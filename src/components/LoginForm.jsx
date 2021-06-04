import React from 'react';
import ProductButton from './ProductButton';
import '../sass/components/_LoginForm.scss';


function LoginForm({btn_text_1}){
    return(
        <form className="login__form">
            <label className="form__label">email</label>
            <input id="email" type="email" className="form__input"/>
            <label className="form__label">password</label>
            <input id="password" type="password" className="form__input"/>

            <ProductButton text={btn_text_1} style="btn btn-primary"/>
        </form>
    )
}

export default LoginForm;