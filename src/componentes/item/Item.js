import React, { useContext } from 'react';
import styled                from 'styled-components';
import productosContext      from '../../context/productos/productosContext';

//pestañas  
import WindowCarrito from './ventanas/WindowCarrito';
import WindowInf     from './ventanas/WindowInf';
import WindowNew     from './ventanas/WindowNew';

const ContVentanas = styled.div`
    height: 100%;
    width: ${({open}) => open ? '290px' : '0px' };
    background: ${({ ventana }) => ventana === 'item' ? '#FFF0DE' :
                                   ventana === 'newproducto' ? '#fff' :
                                   ventana === 'informacion' ? '#fff' : null };
    position: fixed;
    z-index: 1; 
    overflow-x: hidden;
    top: 0;
    right: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: 250ms ease-in;
    transition: 150ms ease-in;

    @media(min-width: 1000px){
        width: ${({open}) => open ? '311px' : '0px' };
    }
`;


const Item = () => {

    const productoContext = useContext(productosContext);
    const { ventana, open, productos } = productoContext;
    
    return (  
     
        <ContVentanas 
            ventana = {ventana}
            open = {open}
        >
        { ventana === "item"
         ?  
          ( <WindowCarrito /> )
         : 
        ventana === "newproducto"
         ?
          ( <WindowNew /> )
         :
        ventana === "informacion"
         ?
          ( <WindowInf productos = {productos} /> )
         :
        null
        }

        </ContVentanas>
    );
}
 
export default Item;