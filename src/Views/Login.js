import { useForm } from "react-hook-form";
import Breadcrumb from '../Components/Breadcrumb';
import axios from "axios";
import { useState } from "react";

function Login() {

    const breadcrumbPaths = [
        {
            link: '/',
            label: 'Home'
        },
        {
            label: 'Log in'
        }
    ];

    const [loggedIn, setLoggedIn] = useState('');


    const { register, handleSubmit, formState: { errors } } = useForm();

   
    const onSubmit = async (values, event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:8070/username', values);
        console.log(response)
        if (response.data.error === true) {
            alert("incorrect password");
            setLoggedIn('');
        } else {
            setLoggedIn('You are logged in!');
            console.log(loggedIn)
        }

    }

    // console.log(watch("username")); // watch input value by passing the name of it

    return (
        <div className=" mt-3 me-5 ms-5 container">
            <div className="row">
                <Breadcrumb paths={breadcrumbPaths} />
            </div>
            <div className="row alert alert-secondary d-inline-flex">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="m-3">
                        <input name="username" defaultValue="" placeholder="Enter username" {...register("username", { required: true })} />
                        <span className="text-danger m-3">
                            {errors.username && <span>This field is required</span>}
                        </span>
                    </div>
                    <div className="m-3">
                        <input name="password" type="password" placeholder="Enter password" {...register("password", { required: true })} />
                        <span className="text-danger m-3">
                            {errors.password && <span>This field is required</span>}
                        </span>
                    </div>
                    <div>
                        {loggedIn}
                    </div>
                    <button className="btn btn-warning text-white m-3" type="submit">Log in</button>
                </form>
            </div>


        </div>

    );
}

export default Login