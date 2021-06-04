import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../sass/components/_LoginForm.scss';


async function loginUser(credentials) {
    try{
        const response = await fetch('https://marketplace-platzi.herokuapp.com/auth/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    const res = await response.json();

    return res.token;
    
    }catch(error){
        console.log('Error', error);
    }
    
}

function Login({setToken}){

    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e =>{
        e.preventDefault();

       const token =  await loginUser({
            email,
            password
        });
        setToken(token);
    }

    return(
        <form className="login__form" onSubmit={handleSubmit}>
            <label className="form__label">email</label>
            <input id="email" type="email" className="form__input" onChange={e => setUserName(e.target.value)}/>
            <label className="form__label">password</label>
            <input id="password" type="password" className="form__input" onChange={e => setPassword(e.target.value)}/>
            <button type="submit" className="form__button">go shopping</button>
        </form>

    )
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}