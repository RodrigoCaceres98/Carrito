import React from "react";
import { Fragment } from "react";
import '../index.css'

const Producto = ({articulo, articulos, carrito, agregarProducto}) => {
    
    const {id, nombre , precio} = articulo;
   
    
    //funcion para agregar productos al carrito
    const seleccionarProducto =(id) =>{
        const articulo = articulos.filter(articulo => articulo.id === id)
        agregarProducto([...carrito, articulo])   
        console.log(articulo)  
    };
     

    return ( 
        <Fragment>
            <div className="producto">
                <p>ID: {id}</p>
                <p>Nombre: { nombre}</p>
                <p>Precio: {precio}</p>
                <button
                    id="comprar"
                    onClick={ () => seleccionarProducto(id)}
                    >Comprar</button>
                
            </div>
        </Fragment>
     );
}
 
export default Producto;