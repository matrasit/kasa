import { NavLink, Link } from "react-router";
import logokasa from "../assets/logos/logo-kasa.svg"; 
const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logokasa} alt="kasa - Accueil" />
            </Link>
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/a-propos">A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;