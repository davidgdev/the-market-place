import React, {useContext} from 'react';
import ModalContext from '../App';
import '../sass/components/_PurchaseModal.scss';
import PurchaseTotalCard from '../components/PurchaseTotalCard';
import PurchaseForm from '../components/PurchaseForm';
import ProductButton from '../components/ProductButton';

function PurchaseModal(){
    
    let modalStatus = useContext(ModalContext);

    return (
        <div id="modal" className="modal">
            <div className="modal-center">
                <PurchaseTotalCard/>
                <PurchaseForm/>
                <div className="modal__buttons">
                    <ProductButton text="close" style="btn btn-secondary" type="close-modal"/>
                    <ProductButton text="confirm" style="btn btn-primary" type="confirm-card"/>
                </div>
                
            </div>
        </div>
    )
}

export default PurchaseModal;