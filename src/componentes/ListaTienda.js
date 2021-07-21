import React from 'react';
import styled from 'styled-components';
import { HiPlus } from "react-icons/hi";

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
    p{
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
    }
`;
const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
`;
const Li = styled.li`
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
    return ( 
        <ContMarco>
        <Parrafo>Agrega tus productos al carrito de compras</Parrafo>
        
        <ContUL>
            <p>Fruta y vegetales</p>
            <Ul>
            <Li> <p>Aguacate </p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Platano </p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Tomate </p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Manzanas </p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Mandarinas </p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Melon</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Sandia</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Naranja</p> <span> <HiPlus /> </span> </Li>
            </Ul>
        </ContUL>

        <ContUL>
            <p>Peces</p>
            <Ul>
            <Li> <p>Salmon</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Pulpo</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Filete</p> <span> <HiPlus /> </span></Li>
            <Li> <p>Camarones</p> <span> <HiPlus /> </span> </Li>
            
            </Ul>
        </ContUL>

        <ContUL>
            <p>Carne</p>
            <Ul>
            <Li> <p>Puerco</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Pollo</p><span> <HiPlus /> </span> </Li>
            <Li> <p>Res</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Caballo</p> <span> <HiPlus /> </span> </Li>
            </Ul>
        </ContUL>

        <ContUL>
            <p>Alacena</p>
            <Ul>
            <Li> <p>Azucar</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Cafe</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Miel</p> <span> <HiPlus /> </span> </Li>
            <Li> <p>Avena</p> <span> <HiPlus /> </span> </Li>
            </Ul>
        </ContUL>
        </ContMarco>

     );
}
 
export default ListaTienda;