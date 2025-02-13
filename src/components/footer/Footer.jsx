import "./footer.css";
import footerImage from "../../assets/images/footer logo.png";
import ellipse4 from "../../assets/images/Ellipse 4.png";
import ellipse5 from "../../assets/images/ellipse5.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footerImage} alt="footer-logo" />
          <p>
            "Optimizando tus operaciones y mejorando
            <br />
            la eficiencia de tu negocio."
          </p>
        </div>

        <div className="footer-medic">
          <ul className="footer-lists">
            <li>Inicio</li>
            <li>Home</li>
            <li>Características del Software</li>
            <li>Funcionalidades Principales</li>
            <li>Quienes Somos</li>
            <li>Suscripcion</li>
          </ul>
        </div>

        <div className="footer-about">
          <ul className="footer-lists">
            <li>Gestion de Taller</li>
            <li>Gestión de Citas</li>
            <li>Programación de Servicios</li>
            <li>Asignación de Trabajos</li>
            <li>Historial de Reparaciones</li>
            <li>Soporte</li>
          </ul>
        </div>

        <div className="footer-social-media">
          <ul className="footer-lists">
            <li>Redes Sociales</li>
            <li>Twitter / X</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="footer-contact">
          <ul className="footer-lists">
            <li>Contactanos</li>
            <li>techadmins</li>
            <li>+52 99999999</li>
            <li>techadmin.com</li>
          </ul>
        </div>

        <img className="footer-ellipse1" src={ellipse4} alt="ellipse4" />
        <img className="footer-ellipse2" src={ellipse5} alt="ellipse5" />
      </div>

      <div className="footer-bottom">
        <p>&copy; TechAdministrator 2025</p>
        <p>Política legal</p>
        <p>Mapa del sitio</p>
        <p>Cookies</p>
      </div>
    </>
  );
};

export default Footer;
