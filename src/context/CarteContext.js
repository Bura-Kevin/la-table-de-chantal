import React, { createContext } from 'react';
import produits from '../assets/data';

export const CarteContext = createContext();

const CarteContextProvider = (props) => {

    return (
        <CarteContext.Provider value={{ produits }}>
            {props.children}
        </CarteContext.Provider>
    )

}

export default CarteContextProvider;
