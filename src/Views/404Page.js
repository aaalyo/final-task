import { NavLink } from 'react-router-dom';

function Page404() {


    return (
        <div className=" mt-3 me-5 ms-5 mb-5 container text-center">
            <div className="row mt-5">
                <h3>SORRY!</h3>
            </div>
            <div className="row">
                <h5>The page you are looking for was not found.</h5>
            </div>
            <div className="row mt-5">
                <NavLink exact to='/'><button className="btn btn-warning text-white">Go to Home page</button></NavLink>
            </div>


        </div>
    )
}

export default Page404