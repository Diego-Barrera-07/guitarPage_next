import Entrada from "../components/Entrada"
import styles from "../styles/Blog.module.css"

const ListadoBlog = ({result}) => {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className={styles.blog}>
                {result.map(entrada => (
                    <Entrada
                        key={entrada.id}
                        entrada={entrada}
                    />

                ))}
            </div>
        </>
    )
}

export default ListadoBlog