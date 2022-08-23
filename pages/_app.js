import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])
  console.log('Carrito: ', carrito)

  useEffect(() => {
    const carritoLocalStorage = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
    setCarrito(carritoLocalStorage)
  }, [])

  useEffect(() => {
    if (carrito.length >= 1) {
      console.log('Guardando...', carrito)
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  }, [carrito])

  const agregarCarrito = (producto) => {
    if (carrito.some(articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }


  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
