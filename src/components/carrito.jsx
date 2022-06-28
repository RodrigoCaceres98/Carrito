import React, { Fragment } from "react";
import Producto from "./producto";

const Carrito = ({carrito}) => {
    return ( 
        <Fragment>
            <div>
                <h3>Carrito de compras</h3>
                {
                    carrito.map(
                        articulo => (
                            <Producto
                            
                            key={articulo.id}
                            articulo={articulo}/>
                        )
                    )
                }
            </div>
        </Fragment>
     );
}
 
export default Carrito;