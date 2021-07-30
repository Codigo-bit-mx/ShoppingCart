import React, { useReducer } from 'react';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

import {
    AGREGAR_PRODUCTO_CARRITO,
    LISTA_DE_PRODUCTOS,
    INCREMENTAR_CANTIDAD_CARRITO,
    DECREMENTAR_CANTIDAD_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    VISTAS_DEL_CARRITO
} from '../../types/index';

const CarritoState = props => {
    const initialState = {
        productos: [
         {
            id:123,
            nombre: "Aguacate",
            categoria: 'Vegetal',
            descripcion: "El aguacate es un fruto exótico carnoso que se obtiene del árbol tropical del mismo nombre. En algunas partes de América del Sur se conoce como Palta. Presenta unas dimensiones de 5-6 cm de longitud. El peso normal oscila entre 200-400 g, aunque pueden encontrarse piezas de hasta 2 kg de peso.",
            img:'img/aguacate.jpg'
        },
         {
            id:234,
            nombre: "Salmon",
            categoria: "Pescado",
            descripcion: "filete de pescado salmon" 
         },
         {
            id:345,
            nombre: "Melon",
            categoria: "Vegetal",
            descripcion: "fruta de color naranja" 
         },
         {
            id:456,
            nombre: "Miel",
            categoria: "Alacena",
            descripcion: "miel de abeja" 
         },
         {
            id:567,
            nombre: "tomate",
            categoria: 'Vegetal',
            descripcion: "fruta color verde" 
         },
         {
            id:678,
            nombre: "filete",
            categoria: "Pescado",
            descripcion: "filete de pescado salmon" 
         },
         {
            id:789,
            nombre: "sandia",
            categoria: "Vegetal",
            descripcion: "fruta de color naranja" 
         },
         {
            id:8910,
            nombre: "chocolate",
            categoria: "Dulce",
            descripcion: "miel de abeja" 
         },
         {
            id:91011,
            nombre: "trapeador",
            categoria: "Limpieza",
            descripcion: "jala el agua" 
         }

        ],
        cats: [],
        carrito: [],
        total: 0,
        ventana: 'item',
        info: []
        
    }

    const [ state, dispatch ] = useReducer (carritoReducer, initialState);

    const agregarLista = (productos) => {    
        dispatch({
            type: LISTA_DE_PRODUCTOS,
            payload: productos
        })
    }

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

    const cambioVentana = ( estado, id ) => {
        console.log(id)
        dispatch({
            type: VISTAS_DEL_CARRITO,
            payload: {
                estado: estado,
                id: id
            } 
        })
    }


    return( 
        <carritoContext.Provider
            value={{

                productos: state.productos,
                cats: state.cats,
                carrito: state.carrito,
                ventana: state.ventana,
                info: state.info,
                agregarLista,
                agregarCarrito,
                incrementarCantidad,
                decrementarCantidad,
                eliminarProducto,
                cambioVentana
              

            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;