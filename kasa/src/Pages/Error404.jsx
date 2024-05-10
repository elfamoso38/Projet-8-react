import { Link } from "react-router-dom";
import "./Error404.scss";

function Error() {
    return (
        <div className="error">
            <h1 className="error404">404</h1>
            <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_text2">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;