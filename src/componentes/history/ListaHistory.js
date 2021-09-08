import React, {useState, useContext, Fragment} from 'react';
import carritoContext                           from '../../context/carrito/carritoContext';
import styled                                   from 'styled-components';
import {BsCalendar}                             from 'react-icons/bs';
import { MdNavigateNext }                       from 'react-icons/md';
import { makeStyles }                           from '@material-ui/core/styles';
import Modal                                    from '@material-ui/core/Modal';
import Backdrop                                 from '@material-ui/core/Backdrop';
import Fade                                     from '@material-ui/core/Fade';


const LI = styled.li`
    background: #fff;
    padding: 8px 6px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    margin: 1em 0;

    @media(min-width: 768px){
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 50% 25% 15% 10%;
    }
    p{  
       
        margin: 10px 0;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
    }

    button{
        background: transparent;
        color: ${ ({completado}) => completado ? '#56CCF2' : 'red'};
        border: ${({completado}) => completado ? '1px solid #56CCF2' : '1px solid red'} ;
        box-sizing: border-box;
        border-radius: 8px;
        width: 100%;
      }
`;
const Parrafo = styled.p`
    text-align: end;
    font-size: 20px;
    color: #F9A109;
    font-weight: bold;
`;

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#fff',
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    h4: {
        margin: '3px 0'
    }
  }));

const DivModal = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto;
    padding: 0 16px;
    margin: 0 auto;
    
    p {
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
    }
  `;

const ListaHistory = ({history}) => {
    
    const { nombre, creado, productos, completado } = history;
    
    //context
    const cartContext = useContext(carritoContext);
    const {completeCarrito} = cartContext;
  
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

   
     const cambiarState = (history) => { 
           
            if(history.completado === true){
                history.completado = false
            }else {
                history.completado = true
            }   
            completeCarrito(history);
    }

    return (    
        <Fragment>

        <LI 
            completado={completado}
        >
        <p>Lista de {nombre}</p>
        <p><span><BsCalendar /></span>{creado}</p>
        
        {completado 
        ? (<button onClick={() => cambiarState(history)}> Completed </button>) 
        : (<button onClick={() => cambiarState(history)}> Incompleted </button>)
        }        

        <Parrafo onClick={() => {handleOpen()}}> <span> <MdNavigateNext /> </span></Parrafo>
        </LI>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => {handleClose()}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
        >
        <Fade in={open}>
        <div className={classes.paper}>
        <h4>Productos</h4>
         {productos.map(producto => (
             <DivModal key={producto.id}>
                
                <p>{producto.nombre}</p>
                <p>Piezas: {producto.cantidad}</p>
                
             </DivModal>
         ))}

        </div>
        </Fade>
        </Modal>
        </Fragment>
     );
}
 
export default ListaHistory;