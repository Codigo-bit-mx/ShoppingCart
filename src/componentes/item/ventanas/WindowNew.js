import React, {useContext} from 'react';
import styled              from 'styled-components';
import carritosContext     from '../../../context/carrito/carritoContext';
import productosContext    from '../../../context/productos/productosContext';

const MarcoForm = styled.div`
    padding: 1em 2em;
`;
const Form = styled.form`
    margin-top: 2em;
`;
const Label = styled.label`
    font-family: 'Quicksand', sans-serif; 
    font-size: 14px;
`;
const Input = styled.input`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 1em;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 12px;
    outline: none;
    font-family: 'Quicksand', sans-serif; 
`;
const TextAREA = styled.textarea`
    font-family: 'Quicksand', sans-serif; 
    width: 100%;
    height: 82px;
    margin: 10px 0; 
    padding: 10px;
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    outline: none;
`;
const ContentBTN = styled.div`
    
    margin: 2em auto;
    padding: 0 1em;
`;
const BtnSave = styled.button`
    background-color: #F9A109;
    font-family: 'Quicksand', sans-serif; 
    margin-left: 10px;
    padding: 12px 16px;
    border: none;
    color: white;
    border-radius: 12px;
`;
const BtnCancel = styled.button`
    background-color: #FFF;
    font-family: 'Quicksand', sans-serif; 
    margin-left: 10px;
    padding: 12px 16px;
    border: none;
    color: black;
    border-radius: 12px;
`;

const WindowNew = () => {
    
    const productoContext = useContext(productosContext);
    const { nombre,
            descripcion,
            ruta,
            categoria,
            addProducto,
            subirIMG,
            cambioVentana,
            agregarNombre,
            agrgearDescripcion,
            agregarCategoria,
            mostrarAlerta } = productoContext;
    
    const inputImg = (e) => {
        const formData = new FormData();
        formData.append('archivo', e.target.files[0]);
        subirIMG(formData);
    }

    const envioDatos = (e) => {
        e.preventDefault();
        if(nombre.trim() === "" || descripcion.trim() === "" || ruta.trim() === "" || categoria.trim() === "" ) {
            mostrarAlerta();
        }else{
            addProducto();
        }
    }   

    return ( 
        
        <MarcoForm>   

         <p>Nuevo producto</p>
            
            <Form>
                <Label htmlFor="nombre">Nombre:</Label>
                <Input 
                    name="nombre"
                    type="text" 
                    placeholder="Nombre del Producto"  
                    value = {nombre}
                    onChange={ e => agregarNombre(e.target.value) }   
                />

                <Label htmlFor="nota">Nota:</Label>
                <TextAREA 
                    name="nota"
                    maxLength="250" 
                    placeholder="Agrega una nota"
                    value={descripcion}
                    onChange={ e => agrgearDescripcion(e.target.value) } 
                ></TextAREA>

                <Label htmlFor="imagen">Imagen:</Label>
                <Input 
                    name="imagen"
                    type="file" 
                    placeholder="Agrega una Imagen" 
                    onChange={ e => inputImg (e) }   
                />

                <Label htmlFor="categoria">Categoria:</Label>
                <Input 
                    name="categoria"
                    type="text" 
                    placeholder="Agregar una categoria"
                    value={categoria}
                    onChange={ e => agregarCategoria(e.target.value) }
                    />
            </Form>

            <ContentBTN>
                <BtnCancel onClick={() => cambioVentana('item')}>Cancelar</BtnCancel>
                <BtnSave onClick={ e => envioDatos(e)} >Guardar</BtnSave>
            </ContentBTN>
           
            </MarcoForm>

    );
}
 
export default WindowNew;