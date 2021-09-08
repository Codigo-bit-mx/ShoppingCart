import React, { Fragment, useContext} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import productosContext               from '../../context/productos/productosContext';
import styled                         from 'styled-components';

const ContendorMetricas = styled.div`
  margin: 2em 0 0 0;
  padding: 0em;
`; 

const H3 = styled.h2`
  margin: 20px 20px;
    font-family: 'Quicksand',sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`; 

const Graficas = () => {

const productoContext = useContext(productosContext);
const { productos } = productoContext; 

    return ( 
      <Fragment>
        <H3>Estadisticas de ventas</H3>
      <ContendorMetricas>
        
        <ResponsiveContainer width={'99%'} height={550}>
        <AreaChart
          // width={800}
          // height={550}
          data={productos}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          
          <Area type="monotone" dataKey="ventas" stroke="#eab16c" fill="#8884d8" />

        </AreaChart>
      </ResponsiveContainer>

      </ContendorMetricas>
    </Fragment>
     );
}
 
export default Graficas;