import React, {Fragment, useContext} from 'react';
import styled                        from 'styled-components';
import { MdDashboard, MdRestore, MdAssessment, MdShoppingCart } from "react-icons/md";

//context
import dashContext      from '../../context/dashbord/dashContext';
import productosContext from '../../context/productos/productosContext';
import carritosContext  from '../../context/carrito/carritoContext';

const NavegacionDIV = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr 1fr;
`; 
const Img = styled.img`
    width: 38.76px;
    height: 38.89px;
`;
const Ul = styled.ul`
    list-style: none;
    padding: 3em 0;
`;
const Li = styled.li`
    padding: 1em;
    margin: 0em 0 0 0;
    border-left: ${
        ({viewproductos, viewhistory, viewmetricas}) => viewproductos ? '4px solid #F9A109' : 
            viewhistory ? '4px solid #F9A109' : 
            viewmetricas ? '4px solid #F9A109' : null
    };

    p{
        font-size: 30px;
        margin: 0;
        color: #454545;
    }
`;
const CampoDIV = styled.div`
    text-align: center;
    margin: 1em 0 0 0;
`;
const CampoUl = styled.div`
    text-align: center;
    margin: 1em 0 0 0;
`;
const CampoSPAN = styled.div`
    text-align: center;
    margin: auto 1em;
    border-radius: 50px;
    background: #F9A109;
    /* padding: 10px; */
    p{
        font-size: 25px;
        margin: 0;
        color: white;
    }
    span{
        font-size: 15px;
    }
`;


const Navegacion = () => {
    
    const dashsContext = useContext(dashContext);
    const { viewproductos,
            viewhistory,
            viewmetricas,
            vistaProducto,
            vistaHistoria,
            vistaMetricas,
             } = dashsContext;
    
    const productoContext = useContext(productosContext);
    const { open, aperturaVistas} = productoContext;
    
    const carritoContext = useContext(carritosContext)
    const { carrito } = carritoContext;

    return ( 

    <Fragment>
    
    <NavegacionDIV>

      <CampoDIV>
        <Img src="img/user.png" alt="user" />
      </CampoDIV>

      <CampoUl>
          <Ul>
              <Li
                 viewproductos = {viewproductos}
              > <p onClick={() => vistaProducto()}> <MdDashboard /></p> </Li>
              <Li
                 viewhistory={viewhistory}
              > <p onClick={() => vistaHistoria()}> <MdRestore /> </p> </Li>
              <Li
                 viewmetricas={viewmetricas}
              > <p onClick={() => vistaMetricas()}> <MdAssessment /></p> </Li>
          </Ul>
      </CampoUl>
      
      <CampoSPAN>
        
          <p onClick={ () => aperturaVistas(open) } > <MdShoppingCart/> <span>{carrito.length}</span> </p>
          
      </CampoSPAN>
        
    </NavegacionDIV>

    </Fragment>
    );
}
 
export default Navegacion;