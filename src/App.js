import React from 'react';
import styled from 'styled-components';
import Navegacion from './componentes/navegacion/Navegacion';
import Tienda from './componentes/navegacion/Tienda';
import Item from './componentes/item/Item';

//context
import DashState from './context/dashbord/dashState';
import CarritoState from './context/carrito/carritoState';

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
      <CarritoState>

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

      </CarritoState>
    </DashState>
  );
}

export default App;
