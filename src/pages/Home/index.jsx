import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'
function Home() {
    return(
        <>
      <Header />
      <Container>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br/>
            <span>Pedro Henrique</span> <br/>
            Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_primary}`}>
            Saiba mais.
          </Link>
        </div>
        <figure>
          <img  className={styles.img_home}src="/dev.svg" alt="Imagem de Home"/>
        </figure>
      </section>
      </Container>
      <Footer />
    </>
    )
}

export default Home