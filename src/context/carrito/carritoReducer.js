import {
    AGREGAR_PRODUCTO_CARRITO,
    LISTA_DE_PRODUCTOS
} from '../../types/index';

const carritoReducer =  (state, action) => {
    switch(action.type){

        case AGREGAR_PRODUCTO_CARRITO:
            return (
                console.log("agregar la carrito")
            )
        
        case LISTA_DE_PRODUCTOS:
            return {
                ...state,
               cats: [ ...state.cats, action.payload ]
            }

         
        default: 
            return state;
    }
}

export default carritoReducer;

