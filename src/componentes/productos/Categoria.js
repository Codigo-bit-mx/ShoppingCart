import React, {useContext} from 'react';
import carritoContext from '../../context/carrito/carritoContext';

const Categoria = () => {
    
    const carritosContext = useContext(carritoContext);
    const {productos, cats } = carritosContext;

    return ( 
        <h1>hola</h1>
        // categoria.map(cate => (
        // <div>
        //     <p>{}</p>
        //     <ul>
        //         <li>{cate}</li>
        //     </ul>
        // </div>
        // ))

     );
}
 
export default Categoria;