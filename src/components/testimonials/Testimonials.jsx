import "./testimonials.css"

const Testimonials = () => {
  return (
    <div className="testimonials-container">
        <h3>Lo que dice la gente</h3>

        <div className="testimonials-wrapper">

            <div className="testimonial-card">

                <div className="testimonial-image">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                </div>

                <div className="testimonial-details">
                    <h6>Andrea Andy, 35</h6>
                    <p>"Desde que implementamos este software, hemos optimizado nuestras citas y mejorado la comunicación entre el equipo. ¡La productividad ha aumentado considerablemente!"</p>
                </div>

            </div>

            <div className="testimonial-card">

                <div className="testimonial-image">
                    <img src="https://i.pravatar.cc/500" alt="avatar" />
                </div>

                <div className="testimonial-details">
                    <h6>Ricky Reynold, 27</h6>
                    <p>"La plataforma es fácil de usar y nos ha permitido gestionar nuestro inventario de manera eficiente. Ya no perdemos tiempo buscando piezas."</p>
                </div>

            </div>

            <div className="testimonial-card">

                <div className="testimonial-image">
                    <img src="https://i.pravatar.cc/400" alt="avatar" />
                </div>

                <div className="testimonial-details">
                    <h6>Grelish David, 30</h6>
                    <p>"La integración de todos los procesos en un solo lugar ha hecho que la administración del taller sea mucho más simple y rápida. ¡Recomendado al 100%!"</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Testimonials