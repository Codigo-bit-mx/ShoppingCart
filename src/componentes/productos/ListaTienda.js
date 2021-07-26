import React, { useContext } from 'react';
import carritoContext from '../../context/carrito/carritoContext';
import styled from 'styled-components';
import Categoria from './Categoria';
// import Productos from './Productos';

const ContMarco = styled.div`
    padding: 0em 1em 1em 3em;
`;
const Parrafo = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`;
// const ContUL = styled.div`
//     width: 100%;
//     padding: 1em 1em;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     p{
//         margin: 0;
//         font-family: 'Quicksand', sans-serif;
//         font-style: normal;
//         font-weight: bold;
//         font-size: 16px;
//     }
// `;

const ListaTienda = () => {

    const carritosContext = useContext(carritoContext);
    const { productos, cats } = carritosContext;

    productos.sort((o1, o2)=> { //ordenamiento alfabetico en categoria!
        if(o1.categoria < o2.categoria){
            return -1;
        }else if (o1.categoria > o2.categoria){
            return 1;
        }else{
            return 0;
        }
         
    })

    productos.forEach((producto) => { //categorias
        if( !cats.includes(producto.categoria)){
            console.log(producto.categoria)
            cats.push({
                categoria: producto.categoria
            });
        }
             cats.push({
                producto: producto.nombre
             }
            );
    });

    return ( 

        <ContMarco>
        <Parrafo> Agrega tus productos al carrito de compras </Parrafo>

        <Categoria
            categoria = {cats}
        />

        </ContMarco>
     );
}
 
export default ListaTienda;