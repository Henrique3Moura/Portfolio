import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
            <img src="/logo.png" alt="logo"/>
            </Link>
            <nav>
                 <Link to="/">Home</Link>
                 <Link to="/sobre">Sobre</Link>
                 <Link to="/projetos">Projetos</Link>
                 <Link to="/contatos">Contatos</Link>
                
            </nav>
        </header>
    )
}

export default Header