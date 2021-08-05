import React, { useContext, useEffect } from 'react';
import productosContext from '../../context/productos/productosContext';
import styled from 'styled-components';
import Categoria from './Categoria';
import Productos from './Productos';

const ContMarco = styled.div`
    padding: 0em 1em 1em 3em;
`;
const Parrafo = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`;

const ListaTienda = () => {

   const productoContext = useContext(productosContext);
   const { productos, cats, cargando, obtenerProductos, agregarLista, clearCategorias } = productoContext;

     useEffect( () => {
       
        obtenerProductos(); 
        clearCategorias();     
       
        let lastCategory = null;
        productos.sort((o1, o2)=> { //ordenamiento alfabetico en categoria!
              if(o1.categoria < o2.categoria){
                  return -1;
              }else if (o1.categoria > o2.categoria){
                  return 1;
              }else{
                  return 0;
              }
         });
   
        productos.map((producto) => { // obtener los productos de ma               
            if(producto.categoria !== lastCategory) {
                  agregarLista(
                   <Categoria 
                          key={producto._id}
                          categoria={producto.categoria}
                      />
                  );
            }
                  agregarLista(   
                      <Productos 
                          key={producto.id}
                          nombre={producto.nombre}
                          producto={producto}
                      />
                  );
   
                  lastCategory = producto.categoria;
         });
       //eslint-disable-next-line
     }, [cargando]);

    
    return ( 

        <ContMarco>
        <Parrafo> Agrega tus productos al carrito de compras </Parrafo>
        
          { cats }
        
        </ContMarco>
     );
}
 
export default ListaTienda;