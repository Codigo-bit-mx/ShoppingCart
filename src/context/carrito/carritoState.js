import React, { useReducer } from 'react';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

import {
    AGREGAR_PRODUCTO_CARRITO
} from '../../types/index';

const CarritoState = props => {
    const initialState = {
        productos: [
         {
            id:123,
            nombre: "Aguacate",
            categoria: 'vegetal',
            descripcion: "fruta color verde" 
         },
         {
            id:234,
            nombre: "Pescado",
            categoria: "salmon",
            descripcion: "filete de pescado salmon" 
         },
         {
            id:345,
            nombre: "Melon",
            categoria: "vegetal",
            descripcion: "fruta de color naranja" 
         },
         {
            id:456,
            nombre: "Miel",
            categoria: "alacena",
            descripcion: "miel de abeja" 
         },
         {
            id:567,
            nombre: "tomate",
            categoria: 'vegetal',
            descripcion: "fruta color verde" 
         },
         {
            id:678,
            nombre: "filete",
            categoria: "pescado",
            descripcion: "filete de pescado salmon" 
         },
         {
            id:789,
            nombre: "sandia",
            categoria: "vegetal",
            descripcion: "fruta de color naranja" 
         },
         {
            id:8910,
            nombre: "chocolate",
            categoria: "dulce",
            descripcion: "miel de abeja" 
         }

        ],
        cats: [],
        item: [],
        carrito: [],
        total: 0
    }

    const [ state, dispatch ] = useReducer (carritoReducer, initialState);

    const agregarCarrito = () => {
        dispatch({
            type: AGREGAR_PRODUCTO_CARRITO
        })
    }
    
    return( 
        <carritoContext.Provider
            value={{

                productos: state.productos,
                cats: state.cats,
                item: state.item,
                agregarCarrito

            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;