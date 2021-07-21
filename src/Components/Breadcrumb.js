import { NavLink } from 'react-router-dom';

function Breadcrumb({ paths }) {

    const links = paths.map((path, index) => {
        if (path.link) {
            return <li key={index} className="breadcrumb-item"><NavLink className="text-dark" aria-current="page" exact to={path.link}> {path.label} </NavLink></li>
        }
        return <li key={index} className="breadcrumb-item active" aria-current="page">{path.label}</li>
        
    })

    return (
        <div className="m-1 col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                   {links}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb