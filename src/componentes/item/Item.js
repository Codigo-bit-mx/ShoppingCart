import React, { useContext } from 'react';
import styled                from 'styled-components';
import carritosContext       from '../../context/carrito/carritoContext';

//pestañas  
import WindowCarrito from './ventanas/WindowCarrito';
import WindowInf     from './ventanas/WindowInf';
import WindowNew     from './ventanas/WindowNew';

const ContVentanas = styled.div`
    background: ${({ ventana }) => ventana === 'item' ? '#FFF0DE' :
                                   ventana === 'newproducto' ? '#fff' :
                                   ventana === 'informacion' ? '#fff' : null };
`;


const Item = () => {

    const carritoContext = useContext(carritosContext);
    const { ventana, productos } = carritoContext;

    return (  
     
        <ContVentanas 
            ventana={ventana}
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