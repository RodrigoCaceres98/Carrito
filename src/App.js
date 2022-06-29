
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Producto from './components/producto';
import Carrito from './components/carrito';
import { Fragment, useState } from 'react';

function App() {
  //Hook para la lista de productos
  
   const [articulos, guardarProductos] = useState([
    {id:0, nombre:'Purina cat chow 1kg', precio:1800},
    {id:1, nombre:'Piedritas', precio:1200},
    {id:2, nombre:'Cama', precio:2000},
    {id:3, nombre:'Exelent 7kg', precio:8000}
  ])

  //Hook para la lista carrito(articulos comprados)
  const [carrito, agregarProducto] = useState([])

  

  return (
    <Fragment>
      <Header
        title = 'Carrito de compras'
      />
      <div className='lista'>
          <div>
            <h3> Lista de productos</h3>
            {
              articulos.map(
                articulo => (
                  <Producto
                    articulo={articulo}
                    key={articulo.id}
                   articulos= {articulos}
                   carrito ={carrito}
                   agregarProducto = {agregarProducto} />
                )
              )
            }
          </div>
      <Carrito
        carrito = {carrito} 
        />
      </div>
      <Footer/>

    </Fragment>
  );
}

export default App;
