import React from 'react';
import '../sass/components/_Photo.scss';
import image from '../assets/dummy.png';

function Photo ({size, source, description}) {
    return (
        <article className="photo__card">
                <img className={size} src={image} alt={description} />
        </article>
    )
};

export default Photo;