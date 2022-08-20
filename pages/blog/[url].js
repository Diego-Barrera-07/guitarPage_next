import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers/index"
import styles from "../../styles/Entrada.module.css"

const EntradaBlog = ({ result }) => {
    const { contenido, imagen, published_at, titulo } = result
    // console.log(result)
    return (
        <Layout
            title={`Guitar NY | ${titulo}`}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                <Image priority="true" layout='responsive' width={800} height={600} src={imagen[0].url} alt={`Imagen blog de ${titulo}`} />
                    <div>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto__dos}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


// En el build en vez de recargar datos en una misma plantilla lo quehará es crear una página
// por cada objeto a buscar en la query
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    console.log('lA URL: ', url)
    const response = await fetch(url)
    const result = await response.json()

    const paths = result.map(resultado => ({
        params: { url: resultado.url }
    }))

    console.log('This is path: ', paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {

    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    // console.log('la URL 2: ', url)
    const response = await fetch(urlBlog)
    const result = await response.json()


    return {
        props: {
            result: result[0]
        }
    }
}


// export async function getServerSideProps({ query: { id } }) {
//     const url = `http://localhost:1337/blogs/${id}`
//     const response = await fetch(url)
//     const result = await response.json()

//     return {
//         props: {
//             result: result
//         }
//     }
// }

export default EntradaBlog