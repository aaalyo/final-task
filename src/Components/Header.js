import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';



function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow ">
                <div className="container-fluid">
                <NavLink className="navbar-brand fs-3 nav-link" exact to="/"><FontAwesomeIcon icon={faMusic} />  <span className="text-warning">Live music</span> REVIEWS</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/articles">Articles</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/chat">Chat</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/login">Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about-us">About us</NavLink>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>            
        </div>
    )
}

export default Header
