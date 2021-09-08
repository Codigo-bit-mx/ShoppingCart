import React, {useContext} from 'react';
import styled              from 'styled-components';
import carritosContext     from '../../../context/carrito/carritoContext';
import productosContext    from '../../../context/productos/productosContext';
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
        text-align: center;
    }
`;
const DivPSC = styled.div`
    background: white;
    margin: 0 13px;
    border-radius: 12px;
    padding: 7px 0;
    @media(min-width: 1000px){
        margin: 0 20px;        
    }
    span {
        font-size: 20px;
        color: #F9A109;
        margin: auto 0;
        text-align: center;
        padding: 0 3px 0 3px;
       
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
    margin: 0 10px 0 18px;
`;
const CestaDIV = styled.div`
    margin-top: 2em;
    padding:  1em 15px;
    background: white;
    border-radius: 12px;
`;
const InputCST = styled.input`
    width: 98%;
    padding: 10px 3px;
    border-radius: 12px;
    border: 1px solid #BDBDBD;
    margin-bottom: 15px;    
    font-family: Quicksand, sans-serif;
    outline: none;
`;
const BtnCST = styled.button`
    background: #F9A109;
    padding: 10px 0;
    border: 1px solid #F9A109;
    border-radius: 10px;
    color: white;
    width: 80px;

    &:hover{
        background-color: #e49100;
    }
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

const AlertaParrafo = styled.p`
    font-family: 'Quicksand',sans-serif;
    font-size: 13px;
    color: red;
    text-align: center;
    margin-top: 0;
    /* margin-bottom: 4px; */
`;

const WindowCarrito = () => {

    const productoContext = useContext(productosContext);
    const { productos, open, aperturaVistas, decrementarVenta, cambioVentana } = productoContext;

    const carritoContext = useContext(carritosContext);
    const { nombre, 
            carrito,
            alerta,
            guardarCarrito,
            decrementarCantidad,
            eliminarProducto,
            nombreCarrito,
            mostrarAlerta
          } = carritoContext;

    const ReducirOBorrar = (cart) => {
       
        const existe = carrito.find( elementCart => elementCart.id === cart.id);
        const existeEnProductos = productos.find(idProducto => idProducto.id === cart.id);
        if(existe.cantidad === 1 ) {
            
            eliminarProducto(cart.id);
            
        }else {
            decrementarCantidad(cart);
            decrementarVenta(existeEnProductos);
        }
    }

    const enviar = (e) => {
        e.preventDefault();
        if(nombre.trim() !== "" ){
            guardarCarrito();
        }
        //agregar alarma
            console.log("ingresa el nombre al carrito");
            mostrarAlerta();
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
             <BtnPSC>{cart.cantidad}pz</BtnPSC>
             <span onClick={() =>  ReducirOBorrar(cart)}> <MdRemove /> </span>
             </DivPSC>
             
             </DivShopp>
         ))}
       
       
       <CestaDIV>
           { alerta ? <AlertaParrafo> !ingresa el nombre de la cesta¡ </AlertaParrafo> : null }
            <form>
                <InputCST 
                    name="canasta"
                    type="text"
                    placeholder="Guardar la cesta"
                    onChange={ e => nombreCarrito(e.target.value) }
                />
                <br></br>
                < BtnCST onClick={(e) => enviar(e)} >
                    Guardar
                </BtnCST>
            </form>
        </CestaDIV>
        </div>) 

        :

        <DivCesta>
            <h4>Carrito vacio, presiona cualquier icono del carrito para cerrar o abrir esta ventana</h4>    
          
            <div onClick={() => aperturaVistas(open)}>
            <img src="img/carro.png" alt="carrito compra"/>
            </div>

        </DivCesta>
        
        }

      </ContITEM>
     
     );
}
 
export default WindowCarrito;