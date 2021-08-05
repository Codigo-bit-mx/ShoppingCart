import React, { useReducer } from 'react';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

import {
    AGREGAR_PRODUCTO_CARRITO,
    INCREMENTAR_CANTIDAD_CARRITO,
    DECREMENTAR_CANTIDAD_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    AGREGAR_NOMBRE_CARRITO
} from '../../types/index';
import clienteAxios from '../../config/axios';

// import clienteAxios from '../../config/axios';

const CarritoState = props => {
    const initialState = {
        carrito: [],
        total: 0,
        nombre: '',
        productos: []
    }

    const [ state, dispatch ] = useReducer (carritoReducer, initialState);

    const guardarCarrito = async () => {
      const carrito = state.carrito;
      const data = {
            id : '123',
            nombre : state.nombre,
            fecha : '12-05-2150',
            productos: 
                carrito.map(car =>  (
                   {
                     id: car.id,
                     nombre: car.nombre, 
                     cantidad: car.cantidad,
                   } 
               ))
            }
        try {
            await clienteAxios.post('api/carrito', data);
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerElementosCart = async () => {
        try{
            const datos = await clienteAxios.get('/api/carrito');
            console.log(datos)
        }catch(error){
            console.log(error)
        }

    } 
  
    //Funciones para el carrito
    const agregarCarrito = (producto) => {
        dispatch({
            type: AGREGAR_PRODUCTO_CARRITO,
            payload: producto
        })
    }

    const incrementarCantidad = (existe) => {
        dispatch({
            type: INCREMENTAR_CANTIDAD_CARRITO,
            payload: existe
        })
    }

    const decrementarCantidad = (cart) => {
        dispatch({
            type: DECREMENTAR_CANTIDAD_CARRITO,
            payload: cart
        })
    }

    const eliminarProducto = (producto) => {
        dispatch({
            type: ELIMINAR_PRODUCTO_CARRITO,
            payload: producto
        })
    }

    const nombreCarrito = (nombre) => {
        dispatch({
            type: AGREGAR_NOMBRE_CARRITO,
            payload: nombre
        })
    }
   
   


    return( 
        <carritoContext.Provider
            value={{
                carrito: state.carrito,
                info: state.info,
                agregarCarrito,
                incrementarCantidad,
                decrementarCantidad,
                eliminarProducto,
                nombreCarrito,
                guardarCarrito,
                obtenerElementosCart
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;