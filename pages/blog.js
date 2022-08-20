import Layout from "../components/Layout"
import Entrada from "../components/Entrada"
import styles from "../styles/Blog.module.css"


const Blog = ({ result }) => {
    console.log(result)    


    return (
        <Layout
            title='Guitar NY | Blog'
        >
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div className={styles.blog}>
                    {result.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada}
                        />

                    ))}
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    console.log(process.env.API_URL)
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const result = await response.json()

    console.log('Resultados: ', result)

    return {
        props: {
            result: result
        }
    }
}


export default Blog