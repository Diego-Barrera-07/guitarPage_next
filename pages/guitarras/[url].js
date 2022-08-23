import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/Guitarra.module.css"
import Layout from "../../components/Layout"
const Producto = ({ result, agregarCarrito }) => {
    const { texto, imagen, titulo, precio, id } = result[0]

    const [cantidad, setCantidad] = useState(1)

    const handelSubmit = (e) => {
        e.preventDefault()
        if(cantidad < 1){
            alert('Cantidad no valida')
            return;
        }

        //Agregar al carrito
         const guitarraSelecciona = {
            id,
            imagen: imagen[0].url,
            titulo, 
            precio,
            cantidad,
         }  

         agregarCarrito(guitarraSelecciona)

    }

    return (
        <Layout
            title={`Guitar NY | ${titulo}`}
        >
            <div className={styles.guitarra}>
                <Image priority="true" layout='responsive' width={180} height={350} src={imagen[0].url} alt={`Imagen blog de ${titulo}`} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.texto}>{texto}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form className={styles.formulario} onSubmit={handelSubmit}>
                        <label>Cantidad:</label>
                        <select
                            value={cantidad}
                            onChange={e => setCantidad(e.target.value)}
                        >
                            <option value="">-- Selecciona --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <input
                            type="submit"
                            value="Agregar al carrito"  
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const urlProducto = `${process.env.API_URL}/guitarras?url=${url}`
    const response = await fetch(urlProducto)
    const result = await response.json()
    // console.log(result)
    return {
        props: {
            result
        }
    }
}

export default Producto