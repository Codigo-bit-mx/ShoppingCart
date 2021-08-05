import React, { useReducer } from 'react';
import productosContext      from './productosContext';
import productosReducer      from './productosReducer';

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

} from '../../types';
import clienteAxios         from '../../config/axios';

const ProductosState = props => {

    const initialState = {
        productos:[],
        cats: [],
        ventana: 'item',
        info: [],
        nombre: '',
        descripcion: '',
        ruta: '',
        categoria: '',
        alerta:  false,
        cargando: null
    }

 const [ state, dispatch ] = useReducer (productosReducer, initialState);

       //FUNCIONES PARA EL ESTADO DE LOS PRODUCTOS
    const obtenerProductos = async () => {
        try{
           const producto = await clienteAxios.get('/api/productos');
        //    console.log(producto);
            dispatch({
                type: OBTENER_PRODUCTOS,
                payload: producto.data.productos
            })
        }catch(error){
            console.log('existio un error');
        }
    }

    const addProducto = async () => {
        const data = {
            nombre: state.nombre,
            categoria: state.categoria,
            descripcion: state.descripcion,
            ruta: state.ruta,
        }
        try{
            await clienteAxios.post('/api/productos', data);
            dispatch({
                type: NUEVO_PRODUCTO
            })
        }catch (error) {
            console.log(error);
        }
    }

    const agregarLista = (productos) => {  // <---- SEPARAR LOS PRODUCTOS POR CATEGORIA 
        dispatch({
            type: LISTA_DE_PRODUCTOS,
            payload: productos
        })
    }

    const clearCategorias = () => {
        dispatch({
            type: LIMPIEZA_CATEGORIAS_TIENDA
        })
    }

    //SUBIR IMAGEN
    const subirIMG = async(formData) => {
        try{
            const img = await clienteAxios.post('/api/img', formData);
            dispatch({
                type: AGREGAR_IMAGEN,
                payload: img.data.ruta
            })

        }catch (error) {
            console.log(error);
        }
    }

      //ESTADOS PARA EL FORMULARIO
    const agregarNombre = (nombre) => {
        dispatch({
            type: AGREGAR_NOMBRE,
            payload: nombre
        })
    }
    const agrgearDescripcion = (descripcion) => {
        dispatch({
            type: AGREGAR_DESCRIPCION,
            payload: descripcion
        })
    }
    const agregarCategoria = categoria => {
        dispatch({
            type: AGREGAR_CATEGORIA,
            payload: categoria
        })
    }

    //CAMBIO ENTRE VENTANAS DEL CARRITO
    const cambioVentana = ( estado, id ) => {
        dispatch({
            type: VISTAS_DEL_CARRITO,
            payload: {
                estado: estado,
                id: id
            } 
        })
    }

    const mostrarAlerta = () => {
       dispatch({
            type: MOSTRAR_ALERTA
       }) 

       setTimeout(() => {
        dispatch({
            type: OCULTAR_ALERTA
        })
       }, 3000)
    }

    

return(
    <productosContext.Provider
        value={{
            productos: state.productos,
            cats: state.cats,
            info: state.info,
            ventana: state.ventana,
            nombre: state.nombre,
            descripcion: state.descripcion,
            ruta: state.ruta,
            categoria: state.categoria,
            alerta: state.alerta,
            cargando: state.cargando,
            obtenerProductos,
            agregarLista,
            addProducto,
            subirIMG,
            clearCategorias,
            cambioVentana,
            agregarNombre,
            agrgearDescripcion,
            agregarCategoria,
            mostrarAlerta
        }}
        > 
        {props.children}
    </productosContext.Provider>
    )
}


export default ProductosState;