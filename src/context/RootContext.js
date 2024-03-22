import React, { useContext, useState } from 'react';
import { MenuContext } from '.';

const RootContext = ( {children}) => {
    const [produtAll,setProductAll]=useState([])
    return (
        <MenuContext.Provider Provider value={{
            produtAll,
            setProductAll,
        }}>
            {children}
        </MenuContext.Provider>
    );
};

export default RootContext;