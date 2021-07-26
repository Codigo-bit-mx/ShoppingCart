import React, { useContext } from 'react';
import dashContext from '../../context/dashbord/dashContext'
import styled from 'styled-components';
import ListaTienda from '../productos/ListaTienda';
import History from '../history/history';

const ContMarket = styled.div`
    width: 100%;  
    margin: 0 auto;
`;


const Tienda = () => {

    const dashsContext = useContext(dashContext);
    const { viewproductos, viewhistory, viewmetricas} = dashsContext;

    return(
        <ContMarket>

        { viewproductos ?  <ListaTienda />  : 
          viewhistory   ?  <History /> :
          viewmetricas  ?  <p>vista metricas</p> : null
        }
        
        </ContMarket>
    )
}

export default Tienda;