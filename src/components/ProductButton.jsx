import React, {useContext} from 'react';
import ModalContext from '../App';
import '../sass/components/_ProductButton.scss';

function ProductButton ({text, style, type}) {

    let modalStatus = useContext(ModalContext);

    function handleClick (ev) {
        switch (ev.target.value) {
            case "open-modal":
                console.log("open modal window");
                modalStatus = "modal";
                break;
            case "close-modal":
                console.log("close modal window");
                modalStatus = "modal-hidden";
                break;
            case "confirm-card":
                console.log("confirm purchase card");
                break;
            default:
                console.log("No action defined")
        }
    }
    return (
        <button className={style} value={type} onClick={handleClick}>{text}</button>
    )
};

export default ProductButton;