import React from 'react';
import styled from 'styled-components';
import Navegacion from './componentes/Navegacion';
import Tienda from './componentes/Tienda';
import Item from './componentes/Item';

//context
import DashState from './context/dashbord/dashState';

const Contenedor = styled.div`
    width: 100%;
`;  

const Marco = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 3fr 1fr;
  grid-gap: 1px;
`;

const ConTienda = styled.div`
  background: #fafafb;
`;

const ContProducto = styled.div`
  width: 100%;
  background: #FFF0DE;
`;


const App = () =>  {
  return (
    <DashState>
      
      <Contenedor>
        <Marco>
        
      <div> 
        <Navegacion />
      </div>
      
      <ConTienda>
        <Tienda />
      </ConTienda>

      <ContProducto>
        <Item />
      </ContProducto>


        </Marco>
      </Contenedor>

      </DashState>
  );
}

export default App;
