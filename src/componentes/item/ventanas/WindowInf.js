import React, {useContext} from 'react';
import styled from 'styled-components';
import carritosContext from '../../../context/carrito/carritoContext';



const WindowInf = () => {
    

    const carritoContext = useContext( carritosContext );
    const { productos, cambioVentana } = carritoContext;

    return ( 

        <div>
            <p>hola soy la informacion jaja</p>
        </div>

        );
}
 
export default WindowInf;