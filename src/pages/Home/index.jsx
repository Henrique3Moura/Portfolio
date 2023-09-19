import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br/>
            <span>Pedro Henrique</span> <br/>
            Dev Full Stack
          </p>
          <Link to="/sobre" className='btn btn-primary'>
            Saiba mais.
          </Link>
        </div>
        <figure>
          <img  className='img-home'src="/dev.svg" alt="Imagem de Home"/>
        </figure>
      </section>
      <Footer />
    </>
    )
}

export default Home