import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
    return (
        <Layout
            title='Guitar NY | Nosotros'
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <div>
                        <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Iamgen sobre Nosotros"/>
                    </div>
                    <div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer scelerisque nunc vitae vehicula condimentum.
                            Sed in enim quis velit pharetra pretium in in ante.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum congue eleifend nibh vitae imperdiet. Maecenas non faucibus elit.
                            Suspendisse pulvinar justo et elementum ullamcorper. Donec commodo auctor vestibulum.
                            Phasellus pellentesque ultricies gravida. Morbi interdum, tortor et facilisis egestas, purus lorem maximus nibh,
                            ut iaculis magna dui eget risus. Quisque tincidunt varius lacus. Maecenas ut porta ligula.
                            Morbi id tincidunt elit. Sed neque mi, molestie sed elit id, sodales laoreet nisl. Donec pulvinar nisl nec est ultrices suscipit. Duis non tempus tortor. Duis malesuada nibh vitae orci cursus, sit amet luctus
                            turpis ornare. Proin vel faucibus metus, ut posuere urna. Curabitur eget dictum sem, ut sodales ipsum.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros