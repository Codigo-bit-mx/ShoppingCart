import React, {useContext, useEffect} from 'react';
import styled                         from 'styled-components';
import ListaHistory                   from './ListaHistory';
import carritoContext                 from '../../context/carrito/carritoContext';


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


const History = () => {

    const cartContext = useContext(carritoContext);
    const { historial, obtenerElementosCart } = cartContext;

    useEffect(() => {
        obtenerElementosCart(); 
    }, )

    return ( 

        <ContHistory>

            <h2>Historial de compra</h2>
            
            <UL>
            {historial.map(history => (

                <ListaHistory
                    key={history.id}
                    history = {history}
                />
        
            ))}
            </UL>

        </ContHistory>

     );
}
 
export default History;