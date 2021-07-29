import React, {useReducer} from 'react';
import dashContext from './dashContext';
import dashReducer from './dashReducer';

import {
    VISTA_PRODUCTO,
    VISTA_HISTORIA,
    VISTA_METRICAS,
    VISTAS_PRODUCTOS
} from '../../types/index';


const DashState = props => {
    const initialState = {
        viewproductos: true,
        viewhistory: false,
        viewmetricas: false,
        ventana: 'item'
    }

    const [state, dispatch] = useReducer(dashReducer, initialState);

    const vistaProducto = () => {
        dispatch({
            type: VISTA_PRODUCTO
        })
    }

    const vistaHistoria = () => {
        dispatch({
            type: VISTA_HISTORIA
        })
    }

    const vistaMetricas = () => {
        dispatch({
            type: VISTA_METRICAS
        })
    }

    const cambioVentana = (estado) => {
        dispatch({
            type: VISTAS_PRODUCTOS,
            payload: estado
        })
    }

    return(
        <dashContext.Provider
            value={{
            viewproductos: state.viewproductos,
            viewhistory: state.viewhistory,
            viewmetricas: state.viewmetricas,
            ventana: state.ventana,
            vistaProducto,
            vistaHistoria,
            vistaMetricas,
            cambioVentana
            }}
        >
            {props.children}
        </dashContext.Provider>
    )
}

export default DashState;