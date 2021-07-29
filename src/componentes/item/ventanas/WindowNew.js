import React, {useContext} from 'react';
import styled from 'styled-components';
import dashsContext from '../../../context/dashbord/dashContext';

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
    
    const dashContext = useContext(dashsContext);
    const { cambioVentana } = dashContext;

    return ( 
        
        <MarcoForm>   

         <p>Nuevo producto</p>
            
            <Form>
                <Label htmlFor="nombre">Nombre:</Label>
                <Input 
                    name="nombre"
                    type="text" 
                    placeholder="Nombre del Producto"     
                />

                <Label htmlFor="nota">Nota:</Label>
                <TextAREA 
                    name="nota"
                    maxLength="250" 
                    placeholder="Agrega una nota"
                ></TextAREA>

                <Label htmlFor="imagen">Imagen:</Label>
                <Input 
                    name="imagen"
                    type="text" 
                    placeholder="Agrega una Imagen"    
                />

                <Label htmlFor="categoria">Categoria:</Label>
                <Input 
                    name="categoria"
                    type="text" 
                    placeholder="Agregar una categoria"
                    />
            </Form>

            <ContentBTN>
                <BtnCancel onClick={() => cambioVentana('item')}>Cancelar</BtnCancel>
                <BtnSave>Guardar</BtnSave>
            </ContentBTN>
           
            </MarcoForm>

    );
}
 
export default WindowNew;