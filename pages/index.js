import Layout from "../components/Layout"
import Listado from "../components/Listado"
import Curso from "../components/Curso"
import ListadoBlog from "../components/ListadoBlog"

export default function Home({ guitarras, cursos, blogs }) {
  return (
    <div>
      <Layout
        title='Guitar NY | Inicio'
        guitarra={guitarras[3]}
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
        <section className="contendor">
          <ListadoBlog
            result={blogs}
          />
        </section>
      </Layout>

    </div>
  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3`

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
