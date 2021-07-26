import {
    AGREGAR_PRODUCTO_CARRITO
} from '../../types/index';

export default (state, action) => {
    switch(action.type){

        case AGREGAR_PRODUCTO_CARRITO:
            return (
                console.log("agregar la carrito")
            )

        default: 
            return state;
    }
}