import Layout from "../components/Layout"
import Listado from "../components/Listado"
import Curso from "../components/Curso"

export default function Home({ guitarras, cursos, blogs }) {
  return (
    <div>
      <Layout
        title='Guitar NY | Inicio'
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
        <Curso 
          cursos={cursos}
        />
      </Layout>

    </div>
  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs`

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [guitarras, cursos, blogs] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()
  ])


  return {
    props: {
      guitarras,
      cursos,
      blogs
    }
  }

}
