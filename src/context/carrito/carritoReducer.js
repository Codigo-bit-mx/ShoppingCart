import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {
    LISTA_DE_PRODUCTOS,
    AGREGAR_PRODUCTO_CARRITO,
    INCREMENTAR_CANTIDAD_CARRITO,
    DECREMENTAR_CANTIDAD_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    VISTAS_DEL_CARRITO
} from '../../types/index';

const carritoReducer =  (state, action) => {
    switch(action.type){

        case AGREGAR_PRODUCTO_CARRITO:
            return { 
                ...state,
                carrito: [...state.carrito, {...action.payload, cantidad: 1} ]
            }
        
        case LISTA_DE_PRODUCTOS:
            return {
                ...state,
               cats: [ ...state.cats, action.payload ]
            }
        
        case INCREMENTAR_CANTIDAD_CARRITO: 
            return{
                ...state,
                carrito: state.carrito.map( (x) => 
                    x.id === action.payload.id ? {...action.payload, cantidad: action.payload.cantidad + 1} : x
                 )
            }
        
        case DECREMENTAR_CANTIDAD_CARRITO:
            return{
                ...state,
                carrito: state.carrito.map((x) => 
                x.id === action.payload.id ? {...action.payload, cantidad: action.payload.cantidad - 1} : x 
                )
            }
        
        case ELIMINAR_PRODUCTO_CARRITO: 
            return{
                ...state,
                carrito: state.carrito.filter(producto => producto.id !== action.payload)
            }

        case VISTAS_DEL_CARRITO: 
            return{
                ...state,
                ventana: action.payload
            }

        default: 
            return state;
    }
}

export default carritoReducer;

