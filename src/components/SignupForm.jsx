import React , {useState}from 'react';
import '../sass/components/_SignupForm.scss';
import Alert from './Alert';

async function registerUser(data){
    try{

        const response = await fetch('https://marketplace-platzi.herokuapp.com/auth/register',{
        method: 'POST',
        
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const res = await response.json();

    if(res.status === 200){
        document.getElementById("alert-success").style.display = 'block';
    }else{
        document.getElementById("alert-wrong").style.display = 'block';
    }
    
    }catch(error){
        console.log('Error', error);
    }
}

function SignupForm(){
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setConfirmPassword] = useState();
    
    const rolSeller = 2;
    const rolBuyer = 1;
    let rol_id = [];
    


    const handleCheck = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if(rol_id.length === 2){
            rol_id=[];
        }
    
        if(target.name === "buyer" && value){
            rol_id.push(rolBuyer);
        }

        if(target.name === "seller" && value){
            rol_id.push(rolSeller);
        }
        
    }
    
    const handleSubmit = async e =>{
        e.preventDefault();

        await registerUser({
            first_name,
            last_name,
            email,
            password,
            passwordConfirm,
            rol_id
        });

        document.getElementById("signup-form").reset();
    }


    return (

        <section className="signup">
            <Alert text="Your account has been created!" styleAlert="alert alert-green" idAlert="alert-success"></Alert>
            <Alert text="Something went wrong, please try again" styleAlert="alert alert-red" idAlert="alert-wrong"></Alert>
            <form className="signup__form" id="signup-form" onSubmit={handleSubmit}>
                <label className="form__label">name</label>
                <input id="name" type="text" className="form__input" onChange={e => setFirstName(e.target.value)}/>
                <label className="form__label">last name</label>
                <input id="lastname" type="text" className="form__input" onChange={e => setLastName(e.target.value)}/>
                <label className="form__label">email</label>
                <input id="email" type="email" className="form__input" onChange={e => setEmail(e.target.value)}/>
                <label className="form__label">password</label>
                <input id="password" type="password" className="form__input" onChange={e => setPassword(e.target.value)}/>
                <label className="form__label">confirm password</label>
                <input id="conf-password" type="password" className="form__input" onChange={e => setConfirmPassword(e.target.value)}/>
                
                <div className="form__checkbox">
                    <label className="form__label">Buyer</label>
                    <input id="check-buyer" name="buyer" type="checkbox" className="form__input-check"onChange={handleCheck} />
                    <label className="form__label">Seller</label>
                    <input id="check-seller" name="seller" type="checkbox" className="form__input-check"  onChange={handleCheck}/>
                </div>

                <button type="submit" className="form__button">sign up</button>
            </form>
        </section>
    )
}

export default SignupForm;