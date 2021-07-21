import {
    VISTA_PRODUCTO,
    VISTA_HISORIA,
    VISTA_METRICAS
} from '../../types/index';

export default (state, action) => {
    switch(action.type){

        case VISTA_HISORIA:
            return{
                ...state,
                viewproductos: false,
                viewhistory: true,
                viewmetricas: false
            }

        default:
            return state;
    }
}