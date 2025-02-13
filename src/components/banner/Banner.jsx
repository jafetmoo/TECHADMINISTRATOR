import "./banner.css"
import ellipse from "../../assets/images/ellipse.png"
import doctor from "../../assets/images/banner-doctor.png"

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">

                <div className="banner-heading">
                    <h2>Donde cada<br />taller<br />cuenta</h2>
                </div>

                <div className="banner-subheading">
                    <p>Optimiza la gestión de tu taller mecánico:
                    fluidez y control en cada etapa del proceso..</p>
                </div>

                <div className="banner-buttons">
                    <button className="banner-appointment-button">Solicitar cita</button>
                    <button className="banner-learn-button">Más información</button>
                </div>

            </div>

            <div className="banner-graphic">
                <img src={ellipse} alt="ellipse" />
                <img src={doctor} alt="doctor" />
            </div>

        </div>
    )
}

export default Banner