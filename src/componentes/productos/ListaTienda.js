import React, { Fragment, useContext, useEffect } from 'react';
import carritoContext from '../../context/carrito/carritoContext';
import styled from 'styled-components';
import { HiPlus } from "react-icons/hi";
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
const ContUL = styled.div`
     width: 100%;
     padding: 1em 1em;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     p{
         margin: 0;
         font-family: 'Quicksand', sans-serif;
         font-style: normal;
         font-weight: bold;
         font-size: 16px;
     }
 `;
const ContProducto = styled.div`
display: grid;
grid-template-columns: auto auto;
margin: 10px;
padding: 14px;
background: white;
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
border-radius: 12px;
 
p{
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
}
span{
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    font-size: 19px;
    color: #C1C1C4;
    text-align: right;
}
`;

const ListaTienda = () => {

   const carritosContext = useContext(carritoContext);
   const { productos, cats, item, agregarLista } = carritosContext;

   productos.sort((o1, o2)=> { //ordenamiento alfabetico en categoria!
        if(o1.categoria < o2.categoria){
            return -1;
        }else if (o1.categoria > o2.categoria){
            return 1;
        }else{
            return 0;
        }
         
   })

    useEffect(() => {

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

        productos.forEach((producto, index) => { // obtener los productos de ma
            if(producto.categoria !== lastCategory) {
                agregarLista(
                    <Categoria 
                        key={index}
                        categoria={producto.categoria}
                    />
                );
            }
                agregarLista(
                    <Productos 
                        key={index}
                        producto={producto.nombre}
                    />
                );

                lastCategory = producto.categoria;
            })
    }, []);
   

    return ( 

        <ContMarco>
        <Parrafo> Agrega tus productos al carrito de compras </Parrafo>

         {cats}
        
        </ContMarco>
     );
}
 
export default ListaTienda;