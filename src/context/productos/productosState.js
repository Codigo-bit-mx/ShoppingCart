import React, { useReducer } from 'react';
import productosContext      from './productosContext';
import productosReducer      from './productosReducer';
import clienteAxios          from '../../config/axios';
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
        MOSTRAR_ALERTA_FORMULARIO,
        OCULTAR_ALERTA_FORMULARIO,
        AGREGAR_VENTA_PRODUCTO,
        INCREMENTAR_VENTA_PRODUCTO,
        DECREMENTAR_VENTA_PRODUCTO,
        APERTURA
} from '../../types';


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
        cargando: null, 
        open: true
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

    const agregarVenta = async(existeEnProductos) => {
        dispatch({
            type: AGREGAR_VENTA_PRODUCTO,
            payload: existeEnProductos
        })
        try{
            const productos = state.productos;
            const producto = productos.find(IDproductos =>  IDproductos.id === existeEnProductos.id);
            await clienteAxios.put(`/api/productos/${producto._id}`, producto);
        }catch(error){
            console.log(error);
        }
    }
    
    const incrementarVenta = async(existeEnProductos) => {
        dispatch({
            type: INCREMENTAR_VENTA_PRODUCTO,
            payload: existeEnProductos
        });
    try{
        const productos = state.productos;
        const producto = productos.find(IDproductos =>  IDproductos.id === existeEnProductos.id);
        console.log(producto);
        await clienteAxios.put(`/api/productos/${producto._id}`, producto);

    }catch(error){
        console.log(error);
    }
    }

    const decrementarVenta = async(existeEnProductos) => {
        
        dispatch({
            type: DECREMENTAR_VENTA_PRODUCTO,
            payload: existeEnProductos
        })

         try{
            const productos = state.productos;
            const producto = productos.find(IDproductos => IDproductos.id === existeEnProductos.id);
            console.log(producto);
            await clienteAxios.put(`/api/productos/${producto._id}`, producto);
        }catch(error){
            console.log(error);
         }
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
            type: MOSTRAR_ALERTA_FORMULARIO
       }) 

       setTimeout(() => {
        dispatch({
            type: OCULTAR_ALERTA_FORMULARIO
        })
       }, 3000);
    }

    
    //apertura de la ventana lateral
    const aperturaVistas = (open) => {
       dispatch({
           type: APERTURA,
           payload: open
       })
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
            open: state.open,
            obtenerProductos,
            agregarLista,
            addProducto,
            agregarVenta,
            incrementarVenta,
            decrementarVenta,
            subirIMG,
            clearCategorias,
            cambioVentana,
            agregarNombre,
            agrgearDescripcion,
            agregarCategoria,
            mostrarAlerta,
            aperturaVistas
        }}
        > 
        {props.children}
    </productosContext.Provider>
    )
}


export default ProductosState;