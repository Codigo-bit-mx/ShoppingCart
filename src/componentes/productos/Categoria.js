import React, {useContext} from 'react';
import carritoContext from '../../context/carrito/carritoContext';

const Categoria = ({categoria}) => {
    
    const carritosContext = useContext(carritoContext);
    const {productos, cats } = carritosContext;

    return ( 
        
        <h1>{categoria}</h1>

     );
}
 
export default Categoria;