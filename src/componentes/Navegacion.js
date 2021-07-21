import React, {Fragment} from 'react';
import styled from 'styled-components';
import { MdDashboard, MdRestore, MdAssessment, MdShoppingCart } from "react-icons/md";


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
`;

const Navegacion = () => {
    return ( 
    <Fragment>
    
    <NavegacionDIV>

      <CampoDIV>
        <Img src="img/user.png" alt="user" />
      </CampoDIV>

      <CampoUl>
          <Ul>
              <Li> <p> <MdDashboard /></p> </Li>
              <Li> <p> <MdRestore /> </p> </Li>
              <Li> <p> <MdAssessment /></p> </Li>
          </Ul>
      </CampoUl>

      <CampoSPAN>
        
          <p> <MdShoppingCart/> </p>
        
      </CampoSPAN>
        
    </NavegacionDIV>

    </Fragment>
    );
}
 
export default Navegacion;