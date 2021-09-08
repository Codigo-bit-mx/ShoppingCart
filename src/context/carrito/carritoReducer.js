
import {
    AGREGAR_PRODUCTO_CARRITO,
    INCREMENTAR_CANTIDAD_CARRITO,
    DECREMENTAR_CANTIDAD_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    VISTAS_DEL_CARRITO,
    AGREGAR_NOMBRE_CARRITO,
    AGREGAR_CARRITO_HISTORIAL,
    RESET_CARRITO,
    COMPLETADO,
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types/index';

const carritoReducer =  (state, action) => {
    switch(action.type){
       //FUNCIONES DEL CARRITO VISTA PRINCIPAL
        case AGREGAR_PRODUCTO_CARRITO:
             return { 
                ...state,
                carrito: [...state.carrito, {...action.payload, cantidad: 1} ]
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
        case VISTAS_DEL_CARRITO:  // funciona para el cambio de ventana y la informacion del producto
            return{
                ...state,
                ventana: action.payload.estado,
                info: state.productos.find(producto =>  producto.id === action.payload.id)
            }
        //NOMBRE
        case AGREGAR_NOMBRE_CARRITO: 
            return{
                ...state,
                nombre: action.payload
            }
        
        //FUNCIONES CARRITO VISTA HISTORIAL

        case AGREGAR_CARRITO_HISTORIAL: 
            return {
                ...state,
                historial: action.payload
            }
        
        case RESET_CARRITO:
            return {
                ...state,
                carrito: [],
                nombre: ''
            }

        case COMPLETADO: 
            return {
                ...state,
                historial: state.historial.map(elem => elem._id === action.payload._id  ? action.payload : elem )
            }
        
        case MOSTRAR_ALERTA:
            return{
            ...state,
            alerta: true
        }

        case OCULTAR_ALERTA:
            return {
                ...state,
                alerta: false
            }

        default: 
            return state;
    }
}

export default carritoReducer;

