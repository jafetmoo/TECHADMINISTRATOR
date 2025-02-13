import "./partners.css"
import partner1 from "../../assets/images/partner1.png"
import partner2 from "../../assets/images/partner2.png"
import partner3 from "../../assets/images/partner3.png"
import partner4 from "../../assets/images/partner4.png"
import partner5 from "../../assets/images/partner5.png"

const Partners = () => {
  return (
    <div className="partners-container">
        <h3>Colaboraciones Tecnológicas</h3>
        <p>Colaboramos con empresas tecnológicas para mejorar continuamente nuestro software, <br />integrando innovaciones que optimizan la gestión de talleres mecánicos.</p>
        <div className="partners-wrapper">
            <div className="partner-logo">
                <img src={partner1} alt="partner1" />
                <img src={partner2} alt="partner2" />
                <img src={partner3} alt="partner3" />
                <img src={partner4} alt="partner4" />
                <img src={partner5} alt="partner5" />
            </div>
        </div>
    </div>
  )
}

export default Partners