import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"

const Blog = ({ result }) => {
    console.log(result)    


    return (
        <Layout
            title='Guitar NY | Blog'
        >
            <main className="contenedor">
                <ListadoBlog 
                    result = {result}
                />
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