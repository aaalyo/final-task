import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import '../Assets/index.css'


function Home() {

    const [articles, setArticles] = useState({
        loading: true,
        items: [],
    });

    const loadArticles = async () => {
        setArticles({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8070/articles/latest';
            const response = await axios.get(url);
            setArticles({
                loading: false,
                items: response.data,

            });

        } catch (e) {
            alert('Whoops, something went wrong');
            setArticles({
                loading: false,
                items: [],
            });
        }
    }

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
        loadArticles();
        loadCategories()
    }, []);


    if (!articles) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        const shownArticles = articles.items.map((article, index) => {
            let activeClass = "carousel-item";
            if (index === 0) {
                activeClass = "carousel-item active"
            }
            return (
                <div key={index} className={activeClass}>
                    <NavLink to={'/articles/' + article._id}>
                    <img src={article.thumbnail} className="d-block w-100" alt="music" />                    
                        <div className="carousel-caption d-none d-md-block alert alert-secondary text-dark">
                            <h3 >{article.title}</h3>
                        </div>
                    </NavLink>
                </div>
            )
        })

        const shownCategories = categories.items.map((category, index) => {
            return (
                <div key={index} className="col-4 col-md-2 mb-2">
                    <NavLink  className="text-decoration-none" to={'/articles/category/' + category._id}>
                    <div className="card">
                        <div className="card-body text-center text-dark fw-bold ">
                            {category.title} reviews
                        </div>
                    </div>
                    </NavLink>
                </div>
            )
        })



        return (
            <div className=" mt-3 me-5 ms-5 container mb-5">
                <div className="row">
                <div><h3>Most recent reviews</h3></div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">                    
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                        
                            {shownArticles}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="row m-0 mt-3 mb-3 justify-content-between">
                    {shownCategories}
                </div>
            </div>
        )
    }
};

export default Home;