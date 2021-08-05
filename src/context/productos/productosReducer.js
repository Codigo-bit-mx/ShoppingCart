import {
    NUEVO_PRODUCTO,
    OBTENER_PRODUCTOS,
    LISTA_DE_PRODUCTOS,
    LIMPIEZA_CATEGORIAS_TIENDA,
    VISTAS_DEL_CARRITO,
    AGREGAR_NOMBRE,
    AGREGAR_DESCRIPCION,
    AGREGAR_IMAGEN,
    AGREGAR_CATEGORIA,
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types/index';
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const productosReducer = (state, action) => {
    switch(action.type){

        case OBTENER_PRODUCTOS: 
            return{
                ...state,
                productos: action.payload,
                cargando: false
            }
        
        case NUEVO_PRODUCTO: 
            return{
                ...state,
                nombre: '',
                descripcion: '',
                ruta: '',
                categoria: '',
                cargando: true
            }
        
        case LISTA_DE_PRODUCTOS:
            return {
                ...state,
               cats: [ ...state.cats, action.payload ]
            }

        case LIMPIEZA_CATEGORIAS_TIENDA:
            return{
                ...state,
                cats: []
            }
        
        case VISTAS_DEL_CARRITO:  // funciona para el cambio de ventana y la informacion del producto
            return{
                ...state,
                ventana: action.payload.estado,
                info: state.productos.find(producto =>  producto.id === action.payload.id),
                nombre: '',
                descripcion: '',
                ruta: '',
                categoria: ''
            }
        
        case AGREGAR_NOMBRE: 
             return{
                 ...state,
                 nombre: action.payload
             }
            
        case AGREGAR_DESCRIPCION:
            return {
                ...state,
                descripcion: action.payload
            }
        
        case AGREGAR_IMAGEN:
            return{
                ...state,
                ruta: action.payload
            }
        
        case AGREGAR_CATEGORIA:
            return{
                ...state,
                categoria: action.payload
            }
        
        case MOSTRAR_ALERTA: 
            return{
                ...state,
                alerta: true
            }
        
        case OCULTAR_ALERTA: 
            return{
                ...state,
                alerta: false
            }

        default: 
            return state;
    }
}


export default productosReducer;