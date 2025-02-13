import "./navbar.css"
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/search.png"

const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="logo">
        <img src={logo} alt="medic-logo" />
      </div>

      <div className="nav-items">
        <h3>Beneficios para tu Taller</h3>
        <h3>Demostración</h3>
        <h3>Prueba Gratuita</h3>
        <h3>Planes y Precios</h3>
        <h3>Soporte</h3>
      </div>

      <div className="side-nav-items">
        <h3>Login</h3>
        <img src={search} alt="search" />
      </div>


    </div>
  )
}

export default Navbar