import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitarra.module.css"

const Guitarra = ({ guitarra }) => {
    const { titulo, texto, imagen, url, precio } = guitarra
    console.log('Link: ', imagen[0].url)
    return (
        <div className={styles.guitarra}>
            <Image priority="true" layout='responsive' width={180} height={350} src={imagen[0].url} alt={`Imagen blog de ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.texto}>{texto}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver producto
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra