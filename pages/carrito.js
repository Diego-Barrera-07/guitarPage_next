import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'


const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((acc, cur) => acc + (cur.cantidad * cur.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout
            title={"Carrito de compras | Guitar NY"}
        >
            <h2 className='heading'>Carrito de compras</h2>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    <h2>Articulo</h2>
                    {carrito.length === 0 ? 'Carrito vacío' : (
                        carrito.map(producto => (
                            <div
                                key={producto.id}
                                className={styles.producto}
                            >
                                <div>
                                    <Image layout='responsive' width={250} height={480} src={producto.imagen}
                                        alt={producto.titulo} />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.titulo}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad: </p>
                                        <select
                                            value={producto.cantidad}
                                            className={styles.select}
                                            onChange={e => actualizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto.id
                                            })}
                                        >
                                            <option value="">-- Selecciona --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                    <p className={styles.subTotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                                </div>
                                <button
                                    type='button'
                                    className={styles.eliminar}
                                    onClick={() => eliminarProducto(producto.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: {total}</p>
                        </>
                    ) : <p>No hay productos en el carrito, anímate a agregar</p>}


                </div>
            </main>
        </Layout>
    )
}

export default Carrito