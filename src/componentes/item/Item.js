import React, { useContext } from 'react';
import styled from 'styled-components';
import dashsContext from '../../context/dashbord/dashContext';

//pestañas  
import WindowCarrito from './ventanas/WindowCarrito';
import WindowInf from './ventanas/WindowInf';
import WindowNew from './ventanas/WindowNew';

const ContVentanas = styled.div`
    background: ${({ ventana }) => ventana === 'item' ? '#FFF0DE' :
                                   ventana === 'newproducto' ? '#fff' :
                                   ventana === 'informacion' ? '#fff' : null };
`;


const Item = () => {

    const dashContext = useContext(dashsContext);
    const { ventana, cambioVentana } = dashContext;

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
          ( <WindowInf /> )
         :
        null
        }

        </ContVentanas>
    );
}
 
export default Item;