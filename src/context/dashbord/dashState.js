import React, {useReducer} from 'react';
import dashContext from './dashContext';
import dashReducer from './dashReducer';

import {
    VISTA_PRODUCTO,
    VISTA_HISORIA,
    VISTA_METRICAS
} from '../../types/index';


const DashState = props => {
    const initialState = {
        viewproductos: true,
        viewhistory: false,
        viewmetricas: false
    }

    const [state, dispatch] = useReducer(dashReducer, initialState);

    const vistaHistoria = () => {
        dispatch({
            type: VISTA_HISORIA
        })
    }


    return(
        <dashContext.Provider
            value={{
            viewproductos: state.viewproductos,
            viewhistory: state.viewhistory,
            viewmetricas: state.viewmetricas,
            vistaHistoria
            }}
        >
            {props.children}
        </dashContext.Provider>
    )
}

export default DashState;