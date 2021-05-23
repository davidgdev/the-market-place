import React from 'react';
import '../sass/components/_PhotoReel.scss';

import Photo from './Photo';

function PhotoReel ({photos}) {
    return (
        <div className="photoReel">
            <Photo size="photo__img photo__img--small"/>
            <Photo size="photo__img photo__img--small"/>
            <Photo size="photo__img photo__img--small"/>
        </div>
    )
};

export default PhotoReel;