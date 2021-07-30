import React, { useContext, useEffect } from 'react';
import carritoContext from '../../context/carrito/carritoContext';
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

   const carritosContext = useContext(carritoContext);
   const { productos, cats, agregarLista, clearCategorias } = carritosContext;

    useEffect(() => {
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
             
       })

      productos.forEach((producto) => { // obtener los productos de ma
            if(producto.categoria !== lastCategory) {
                agregarLista(
                 <Categoria 
                        key={Math.random().toString(36).substr(2, 9)}
                        categoria={producto.categoria}
                    />
                );
            }
                agregarLista(   
                  
                    <Productos 
                        key={Math.random().toString(36).substr(2, 9)}
                        nombre={producto.nombre}
                        producto={producto}
                    />
                
                );

                lastCategory = producto.categoria;
            })

      
    
    }, [productos]);
   
    return ( 

        <ContMarco>
        <Parrafo> Agrega tus productos al carrito de compras </Parrafo>
        
          { cats }
        
        </ContMarco>
     );
}
 
export default ListaTienda;