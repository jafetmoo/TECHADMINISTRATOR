import "./doctors.css"
import sphere2 from "../../assets/images/Ellipse 2.png"
import sphere3 from "../../assets/images/Ellipse 3.png"
import Doctor from "../doctor/Doctor"

const Doctors = () => {
  return (
    <div className="doctors-container">
        <h3>Nuestro Equipo</h3>
        <p>El trabajo en equipo y la comunicación efectiva entre los miembros del taller son fundamentales  <br />  para proporcionar un servicio de alta calidad y garantizar resultados positivos en cada reparación y mantenimiento.</p>

        <img className="sphere2" src={sphere2} alt="sphere2" />
        <img className="sphere3" src={sphere3} alt="sphere3" />

        <div className="doctors-wrapper">
            <Doctor />
        </div>

        <button>Ver Mas</button>

    </div>
  )
}

export default Doctors