import React               from 'react';
import styled              from 'styled-components';
import Navegacion          from './componentes/navegacion/Navegacion';
import Tienda              from './componentes/navegacion/Tienda';
import Item                from './componentes/item/Item';

//estados
import DashState      from './context/dashbord/dashState';
import CarritoState   from './context/carrito/carritoState';
import ProductosState from './context/productos/productosState';


  const Contenedor = styled.div`
      width: 100%;
  `;  
  const Marco = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    @media (min-width: 1000px){
     grid-template-columns: 0.3fr 3fr 1fr;
    } 
    grid-gap: 1px;
  `;
  const ConTienda = styled.div`
    background: #FAFAFB;
  `;
  

const App = () =>  {
  
  return (
    <DashState>
      <ProductosState>
      <CarritoState>

      <Contenedor>
        <Marco>
        
      <div> 
        <Navegacion />
      </div>
      
      <ConTienda>
        <Tienda />
      </ConTienda>
 
      <Item />
     
        </Marco>
      </Contenedor>

      </CarritoState>
      </ProductosState>
    </DashState>
  );

}

export default App;
