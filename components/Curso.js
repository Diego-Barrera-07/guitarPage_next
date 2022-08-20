import styles from "../styles/Curso.module.css"

const Curso = ({ cursos }) => {
    const { titulo, texto, imagen } = cursos
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className="heading">{titulo}</h2>
                    <p className={styles.texto}>{texto}</p>
                    <a className={styles.enlace}>
                        Ver más
                    </a>
                </div>
            </div>

            <style jsx>{`
                section{
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65),
                    rgb(0 0 0 / .7)), url(${imagen[0].url});
                    background-position: center;
                    background-size: cover;
                }
            `}</style>
        </section>
    )
}

export default Curso