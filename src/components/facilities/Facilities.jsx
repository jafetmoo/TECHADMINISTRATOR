import "./facilities.css"
import facility1 from "../../assets/images/facility1.jpg"
import facility2 from "../../assets/images/facility2.jpg"

const Facilities = () => {
  return (
    <div className="facilities-container">
        <h3>Nuestra App</h3>

        <div className="facilities-wrapper">

            <div className="facility-details">
                <div className="facility-detail-head">
                    <h6>Gestión de talleres al alcance de tu mano,<br /> en cualquier dispositivo.</h6>
                </div>
                <div className="facility-detail-body">
                    <p>Con nuestra app móvil, los dueños y empleados de los talleres mecánicos pueden gestionar las operaciones de su taller desde cualquier lugar. Disponible tanto para Android como para iOS, nuestra aplicación proporciona acceso instantáneo a las funciones clave del software, como la programación de citas, el seguimiento de reparaciones y la gestión de inventarios.</p>
                </div>
                <div className="facility-detail-button">
                    <button>Saber Mas</button>
                </div>
            </div>

            <div className="facility-images">
                <img className="facility1" src={facility1} alt="facility1" />
                <img className="facility2" src={facility2} alt="facility2" />
            </div>

        </div>
    </div>
  )
}

export default Facilities