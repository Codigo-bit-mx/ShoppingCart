import React, {Fragment, useContext} from 'react';
import styled                        from 'styled-components';
import { HiPlus }                    from "react-icons/hi";
import carritoContext                from '../../context/carrito/carritoContext';
import productosContext              from '../../context/productos/productosContext';

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
        cursor: pointer;
    }
    span{
        padding: 0;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        font-size: 19px;
        color: #C1C1C4;
        text-align: right;
        cursor: pointer;
    }
`;

const Productos = ({nombre, producto}) => {
    
    const id = producto.id;
    
    //productos
    const productoContext = useContext(productosContext);
    const { productos, agregarVenta, incrementarVenta, cambioVentana } = productoContext;
    //carrito
    const carritosContext = useContext(carritoContext);
    const { carrito, agregarCarrito, incrementarCantidad } = carritosContext;
    
    const validar = (id, producto) => {
    
        const existe = carrito.find(elemento => elemento.id === id);
        const existeEnProductos = productos.find(idProducto => idProducto.id === id);
        
        if(existe && existeEnProductos){
        incrementarCantidad(existe);
        incrementarVenta(existeEnProductos);
        }else{
        agregarCarrito(producto);
        agregarVenta(existeEnProductos);
       }       
    }

    return ( 
        <Fragment>

        <ContProducto> 
            <p onClick={() => cambioVentana('informacion', id)}>{nombre}</p>
            <span onClick={() => validar(id, producto) } > <HiPlus /> </span>
         </ContProducto>
  
        </Fragment>
     );
}
 
export default Productos;