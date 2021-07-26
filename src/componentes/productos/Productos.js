import React, {Fragment} from 'react';
import styled from 'styled-components';

import { HiPlus } from "react-icons/hi";
// import carritoContext from '../../context/carrito/carritoContext';

const ContProducto = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin: 10px;
    padding: 14px;
    background: white;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
     
    p{
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
    }
    span{
        padding: 0;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        font-size: 19px;
        color: #C1C1C4;
        text-align: right;
    }
`;

const Productos = ({producto}) => {

    // const carritosContext = useContext(carritoContext); 
    const { nombre } = producto;
    
    const validar = () => {
        console.log("si sirvio");
    }

    return ( 
        <Fragment>
       
        <ContProducto> 
            <p>{nombre}</p>
            <span onClick={() => validar() } > <HiPlus /> </span>
         </ContProducto>

         </Fragment>
     );
}
 
export default Productos;