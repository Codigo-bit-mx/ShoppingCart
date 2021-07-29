import React, {useContext} from 'react';
import styled from 'styled-components';
import dashsContext from '../../../context/dashbord/dashContext';

const ContITEM = styled.div`
    margin: 16px auto 0 auto;
    padding: 1.5em;
`;
const MarcoProduct = styled.div`
   width: 100%;
   background: #80485B;
   margin: 0 auto;
   padding: 5px 0 5px 0;
   border-radius: 12px;
    p{
        margin: 10px;
        text-align: center;
        color: white;
        font-size: 16px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
    }
`;
const DivBUTTON = styled.div`
    width: 35%;
    margin: 0 auto;

    button{
        padding: 0.8em 1.3em;
        margin: 5px auto;
        text-align: center;
        border-radius: 12px;
        border: 1px solid #000;
        font-family: 'Quicksand', sans-serif;;
        font-size: 14px;
    }
`;

const WindowCarrito = () => {

    const dashContext = useContext(dashsContext);
    const { cambioVentana } = dashContext;

    return ( 

     <ContITEM>
       <MarcoProduct>
         <p>Agregar un nuevo producto y categoria</p>
           <DivBUTTON>    
           <button onClick={() => cambioVentana('newproducto')}> Agregar </button>
           </DivBUTTON>
       </MarcoProduct>
      </ContITEM>
     
     );
}
 
export default WindowCarrito;