import React from 'react';
import '../sass/components/_Alert.scss';

function Alert({text, styleAlert, idAlert}){
    return(
        <section className={styleAlert} id={idAlert}>
            <p>{text}</p>
        </section>
    )
}

export default Alert;