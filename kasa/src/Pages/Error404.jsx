import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../Styles/Error404.css"
function Error() {
    return (
        <div className="error">
            <h1 className="error404">404</h1>
            <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            <link to="/" className="error_text2">Retourner sur la page d'accueil</link>
        </div>
    )
}

export default Error