import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../sass/components/_Login.scss';


function loginUser(credentials) {
    console.log(credentials);
    
   }

function Login(){

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e =>{
        e.preventDefault();

        await loginUser({
            username,
            password
        });
    }

    return(
        <section className="login">
            <h1 className="login__title">Login</h1>

            <form className="login__form" onSubmit={handleSubmit}>
                <label className="form__label">email</label>
                <input id="email" type="email" className="form__input" onChange={e => setUserName(e.target.value)}/>
                <label className="form__label">password</label>
                <input id="password" type="password" className="form__input" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="form__button">go shopping</button>
            </form>

            
                <Link to="/" className="login__password">Forgot password?</Link>
                <Link to="/signup" className="login__signup">Create account</Link>
            

        </section>
    )
}

export default Login;