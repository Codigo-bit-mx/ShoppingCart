import React, {useContext} from 'react';
import styled from 'styled-components';
import dashsContext from '../../../context/dashbord/dashContext';




const WindowInf = () => {
    
    const dashContext = useContext(dashsContext);
    const { cambioVentana } = dashContext;

    return ( 
        <p>hola soy informacion</p>
     );
}
 
export default WindowInf;