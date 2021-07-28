import React, {useContext, useState} from 'react';
import carritoContext from '../../context/carrito/carritoContext';

const Categoria = ({categoria}) => {

 
    return ( 
       <div>
          <h3>{categoria}</h3>
       </div>
     );
}
 
export default Categoria;