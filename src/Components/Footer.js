import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope   } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-0 fixed-bottom">
                <div className="container-fluid p-0">
                    <span className="text-white ms-3">&copy; 2021</span>
                    <h3 className="text-white me-5"><FontAwesomeIcon icon={faEnvelope  } /></h3>
                    

                </div>
            </nav>
        </div>
    )
}

export default Footer