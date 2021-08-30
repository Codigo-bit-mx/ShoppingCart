import React, { useReducer } from 'react';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

import {
    AGREGAR_PRODUCTO_CARRITO,
    INCREMENTAR_CANTIDAD_CARRITO,
    DECREMENTAR_CANTIDAD_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    AGREGAR_NOMBRE_CARRITO,
    AGREGAR_CARRITO_HISTORIAL,
    LIMPIEZA_HISTORIAL,
    RESET_CARRITO,
    COMPLETADO
} from '../../types/index';
import clienteAxios from '../../config/axios';
import { MdImportContacts } from 'react-icons/md';

// import clienteAxios from '../../config/axios';

const CarritoState = props => {
    const initialState = {
        carrito: [],
        total: 0,
        nombre: '',
        historial: [],
        cargando: null,
        completed: false
    }

    const [ state, dispatch ] = useReducer (carritoReducer, initialState);

    const guardarCarrito = async () => {
      const carrito = state.carrito;
      const data = {
            nombre : state.nombre,
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
            dispatch({
                type: RESET_CARRITO
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerElementosCart = async () => {
        try{
            const datos = await clienteAxios.get('/api/carrito');
            dispatch({
                type: AGREGAR_CARRITO_HISTORIAL,
                payload: datos.data.resultado
            })
        }catch(error){
            console.log(error);
        }

    } 

    const completeCarrito = async (history) => {
        try {
            const datos = await clienteAxios.put(`/api/carrito/${history._id}`, history);
            dispatch({
                type: COMPLETADO,
                payload: datos.data.listaExiste 
            })

        } catch (error) {
            console.log(error);
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

    const limpiezaHistorial = () => {
        dispatch({
            type: LIMPIEZA_HISTORIAL
        })
    }
   
   
    return( 
        <carritoContext.Provider
            value={{
                carrito: state.carrito,
                info: state.info,
                historial: state.historial,
                cargando: state.cargando,
                nombre: state.nombre,
                agregarCarrito,
                incrementarCantidad,
                decrementarCantidad,
                eliminarProducto,
                nombreCarrito,
                guardarCarrito,
                obtenerElementosCart,
                limpiezaHistorial,
                completeCarrito
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;