import { Link } from "react-router-dom"
import style from './NavBar.module.css'
import logo from '../../imagen/logo.png'
import SearchBar from '../../components/SearchBar/Searchbar';

const NavBar = () => {
  return (
    <div className={style.navbar}>
        <Link to="/home">
          <img src={logo} alt="logo" className={style.logo}/>
        </Link>
      <button className={style.boton}><Link to="/crear" className={style.link}>Crear Actividad</Link></button>
      <SearchBar/>
    </div>
  )
}

export default NavBar