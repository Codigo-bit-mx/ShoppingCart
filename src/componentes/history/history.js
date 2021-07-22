import React from 'react';
import styled from 'styled-components';
import {BsCalendar} from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';

const ContHistory = styled.div`
    width: 100%;

    h2{
        margin: 20px 20px;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: bold;
    }
`;
const UL = styled.ul`
    list-style: none;
    margin: 2em 0 0 0;
    padding: 5px 2em;
`;
const LI = styled.li`
    display: grid;
    grid-template-columns: 50% 25% 15% 10%;
    grid-template-rows: 1fr;
    background: #fff;
    padding: 8px 6px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    margin: 1em 0;
    p{
        margin: 10px 0;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
    }

    button{
        background: transparent;
        color: #56CCF2;
        border: 1px solid #56CCF2;
        box-sizing: border-box;
        border-radius: 8px;
    }
`;
const Parrafo = styled.p`
    text-align: end;
    font-size: 15px;
`;

const History = () => {
    return ( 

        <ContHistory>

            <h2>Historial de compra</h2>

            <UL>
            <h5>Agosto 2021</h5>
            <LI><p>Lista de Cruzito</p>
            <p><span><BsCalendar /></span>Mon 22/07/2021</p>
            <button>Completed</button>
            <Parrafo><span><MdNavigateNext /></span></Parrafo>
            </LI>

            <LI><p>Lista de Cruzito</p>
            <p><span><BsCalendar /></span>Mon 22/07/2021</p>
            <button>Completed</button>
            <Parrafo><span><MdNavigateNext /></span></Parrafo>
            </LI>
            </UL>

        </ContHistory>

     );
}
 
export default History;