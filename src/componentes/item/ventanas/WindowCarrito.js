import React, {useContext} from 'react';
import styled              from 'styled-components';
import carritosContext     from '../../../context/carrito/carritoContext';
import productosContext    from '../../../context/productos/productosContext';
import { HiPlus }          from "react-icons/hi";
import { FaTrashAlt }      from "react-icons/fa";
import { MdRemove }        from 'react-icons/md';

const ContITEM = styled.div`
    margin: 16px auto 0 auto;
    padding: 1.5em;
`;
const MarcoProduct = styled.div`
   width: 100%;
   background: #80485B;
   margin: 0 auto;
   padding: 5px 0 5px 0;
   border-radius: 12px;
    p{
        margin: 10px;
        text-align: center;
        color: white;
        font-size: 16px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
    }
`;
const DivBUTTON = styled.div`
    width: 35%;
    margin: 0 auto;

    button{
        padding: 0.8em 1.3em;
        margin: 5px auto;
        text-align: center;
        border-radius: 12px;
        border: 1px solid #000;
        font-family: 'Quicksand', sans-serif;
        font-size: 14px;
    }
`;
const DivShopp = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    margin-top: 13px;
    p{
        font-family: 'Quicksand', sans-serif;
        font-size: 14px;
        font-weight: bold;
    }
`;
const DivPSC = styled.div`
    background: white;
    margin: 0 16px;
    border-radius: 12px;
    padding: 7px 0;
    span {
        margin-right: 3px;
        font-size: 20px;
        color: #F9A109;
        margin: auto 0;
    }
`; 
const BtnPSC = styled.button`
    /* margin: 4px 1em; */
    padding: 2px 13px;
    border-radius: 15px;
    border: 2px solid #F9A109;
    box-sizing: border-box;
    background: transparent;
    font-family: 'Quicksand', sans-serif;
    color: #F9A109;
    margin-right: 10px;
`;
const CestaDIV = styled.div`
    margin-top: 2em;
    padding:  1em 10px;
    background: white;
    border-radius: 12px;
`;
const InputCST = styled.input`
    padding: 10px 3px;
    border-radius: 12px;
    border: 1px solid #BDBDBD;
`;
const BtnCST = styled.button`
    background: #F9A109;
    padding: 10px 0;
    border: 1px solid #F9A109;
    border-radius: 10px;
    color: white;
`;
const DivCesta = styled.div`
    width: 100%;
    margin: 3em auto;
    text-align: center;
  
    h4{
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        margin-bottom: 1em;
    }

    img{
        width: 200px;
        height: 200px;
        margin-top: 1em;
    }
`;


const WindowCarrito = () => {

    const productoContext = useContext(productosContext);
    const { cambioVentana } = productoContext;

    const carritoContext = useContext(carritosContext);
    const { carrito,
            guardarCarrito,
            incrementarCantidad,
            decrementarCantidad,
            eliminarProducto,
            nombreCarrito
          } = carritoContext;

    const ReducirOBorrar = (cart) => {
        const existe = carrito.find( elementCart => elementCart.id === cart.id);
        if(existe.cantidad === 1) {
            eliminarProducto(cart.id);
        }else {
            decrementarCantidad(cart);
        }
    }

    const enviar = (e) => {
        e.preventDefault();
        guardarCarrito()
    }   

    return ( 

     <ContITEM>
       <MarcoProduct>
         <p>Agregar un nuevo producto y categoria</p>
           <DivBUTTON>    
           <button onClick={() => cambioVentana('newproducto')}> Agregar </button>
           </DivBUTTON>
       </MarcoProduct>

   

       {carrito.length !== 0 
        
        ? 

       ( 
        <div>
        <h3>Lista de compras</h3>
      
        {carrito.map((cart) => (
             <DivShopp key={cart.id}>
                 <p>{cart.nombre}</p>
             
             <DivPSC>
             <span onClick={() => eliminarProducto(cart.id)} ><FaTrashAlt /></span>
            
             <span onClick={() =>  ReducirOBorrar(cart)}> <MdRemove /> </span>
             <BtnPSC>{cart.cantidad}pz</BtnPSC>
             <span onClick={() => incrementarCantidad(cart)}><HiPlus /> </span>
             </DivPSC>
             
             </DivShopp>
         ))}
       
       
       <CestaDIV>
            <form>
                <InputCST 
                    name="canasta"
                    type="text"
                    placeholder="Guardar la cesta"
                    onChange={ e => nombreCarrito(e.target.value) }
                />
                < BtnCST onClick={(e) => enviar(e)} >
                    Guardar
                </BtnCST>
            </form>
        </CestaDIV>
        </div>) 

        :

        <DivCesta>
            <h4>Carrito vacio agrega productos</h4>    
            <img src="img/carro.png"/>
        </DivCesta>
        
        }

      </ContITEM>
     
     );
}
 
export default WindowCarrito;