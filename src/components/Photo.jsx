import React from 'react';
import '../sass/components/_Photo.scss';

function Photo ({size, source, description, image}) {
    return (
        <article className="photo__card">
                <img className={size} src={image} alt={description} />
        </article>
    )
};

export default Photo;