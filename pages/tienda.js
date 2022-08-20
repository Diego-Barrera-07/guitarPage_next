import Layout from "../components/Layout"
import Listado from "../components/Listado"

const Tienda = ({ result }) => {
    return (
        <Layout
            title='Guitar NY | Tienda Virtual'
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>
            <Listado
                guitarras={result}
            />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            result
        }
    }

}

export default Tienda