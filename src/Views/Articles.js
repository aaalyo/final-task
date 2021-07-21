import Breadcrumb from '../Components/Breadcrumb';
import ArticlesList from '../Components/ArticlesList'
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import '../Assets/index.css'

function Articles() {
    const breadcrumbPaths = [
        {
            link: '/',
            label: 'Home'
        },
        {
            label: 'Articles'
        }
    ];


    const [categories, setCategories] = useState({
        loading: true,
        items: [],
    });

    const loadCategories = async () => {
        setCategories({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8070/categories';
            const response = await axios.get(url);
            setCategories({
                loading: false,
                items: response.data,

            });

        } catch (e) {
            alert('Whoops, something went wrong');
            setCategories({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadCategories()
    }, []);


    if (!categories) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        const shownCategories = categories.items.map((category, index) => {
            return (
                <div key={index} className="col-4 col-md-2 mb-2">
                    <NavLink className="text-decoration-none" to={'/articles/category/' + category._id}>
                        <div className="card">
                            <div className="card-body text-center text-dark fw-bold ">
                                {category.title}
                            </div>
                        </div>
                    </NavLink>
                </div>
            )
        })


        return (
            <div className="  mt-3 me-5 ms-5 mb-5 container">
                <div className="row">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
                <div className="row m-0 mt-3 mb-3 justify-content-between">
                    {shownCategories}
                </div>
                <div className="row">
                    <ArticlesList />
                </div>


            </div>
        )
    }
}

export default Articles