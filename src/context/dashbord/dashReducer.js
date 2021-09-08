import {
    VISTA_PRODUCTO,
    VISTA_HISTORIA,
    VISTA_METRICAS,
  
} from '../../types/index';

const dashReducer = (state, action) => {
    switch(action.type){

        case VISTA_PRODUCTO:
            return{
                ...state,
                viewproductos: true,
                viewhistory: false,
                viewmetricas: false
            }

       case VISTA_HISTORIA:
            return{
                ...state,
                viewproductos: false,
                viewhistory: true,
                viewmetricas: false
            }

       case VISTA_METRICAS:
            return{
                ...state,
                viewproductos: false,
                viewhistory: false,
                viewmetricas: true
            }      

        default:
            return state;
    }
}

export default dashReducer;