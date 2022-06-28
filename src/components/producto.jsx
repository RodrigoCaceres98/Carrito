import React from "react";
import { Fragment } from "react";

const Producto = ({articulo, articulos, carrito, agregarProducto}) => {
    
    const {id, nombre , precio} = articulo;
   
    
    //funcion para agregar productos al carrito
    const seleccionarProducto =(id) =>{
        const articulo = articulos.filter(articulo => articulo.id === id)[0]
                
        agregarProducto([...carrito, articulo])
        console.log(articulo)
                        
    }   

    return ( 
        <Fragment>
            <div>
                ID: { id} | Nombre: { nombre} | Precio: {precio}
                <button
                    type="button"
                    onClick={ () => seleccionarProducto(id)}
                    >Comprar</button>
                
            </div>
        </Fragment>
     );
}
 
export default Producto;