import { useState, createContext, useMemo } from 'react';

const ModalContext = createContext(); 

const ModalProvider = (props) => {
    const [modalClass, setModalClass] = useState('modal-hidden');

const value = useMemo(
   () => ({modalClass, setModalClass}),[modalClass])


    return (
        <ModalContext.Provider
            value={value}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
export { ModalContext, ModalProvider };