import React, {useContext} from 'react';
import styled from 'styled-components';
import carritosContext from '../../../context/carrito/carritoContext';
import { MdUndo } from "react-icons/md";

const ContWinf = styled.div`
    width: 100;

    p{
        margin: 2em 0px 2em 14px;
        color: #F9A109;
        cursor: pointer;

    }
`;

const MarcoWinf = styled.div`
    margin-top: 1em ;
    padding: 0 15px;

    img{
        width: 300px;
        height: 219px;
    }
    p{  
        font-family: 'Quicksand', sans-serif;
        margin: 0;
        color: #C1C1C4;
    }
    h5{
        font-family: 'Quicksand', sans-serif;
        font-size: 15px;
    }
`;

const WindowInf = () => {
    

    const carritoContext = useContext( carritosContext );
    const { productos, info, cambioVentana } = carritoContext;
 
    const {nombre, categoria, descripcion ,img} = info;

    return ( 
        <ContWinf>
            <p onClick={() => cambioVentana('item')}><span><MdUndo/></span> Regresar</p>
            <MarcoWinf>

            <img src={img} alt="imagen del producto"/>
            <p>Nombre:</p>
            <h4>{nombre}</h4>
            <p>Categoria:</p>
            <h4>{categoria}</h4>
            <p>Descripcion:</p>
            <h5>{descripcion}</h5>

            </MarcoWinf>
        </ContWinf>
        );
}
 
export default WindowInf;