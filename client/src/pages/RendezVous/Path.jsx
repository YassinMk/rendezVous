import { Link } from "react-router-dom/cjs/react-router-dom.min";
import 'bootstrap/dist/css/bootstrap.min.css';


const Path = ({isAnimated}) => {
    return ( 
        <div className={`animation-left ${isAnimated ? "animated" : ""}`}>
                <h6 class="path-page mt-2 ms-2">
                Vous êtes ici :
                <Link to="/" className="color-primary">
                    Acceuil
                </Link>
                {">"} <span class="bold">Rendez-vous</span>
                </h6>
                <p className="px-2 ms-2 mt-3 path-page color-primary">Les créneaux de réservation des rendez-vous sont disponibles en semaine, du lundi au vendredi, et sont soumis<br/> <span className="bold"> à la  disponibilité des horaires</span>, à l'exception des<span className="bold"> samedis et dimanches.</span></p>
      </div> 
     );
}
 
export default Path;