import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import { format } from 'date-fns';
import Page404 from "../Views/404Page";



function CategoryList({ categoryId }) {

    const [articles, setArticles] = useState({
        loading: true,
        items: [],
        categoryTitle: ""
    });

    const loadArticles = async () => {
        setArticles({
            loading: true,
            items: [],
            categoryTitle: ""
        });
        try {
            const url = `http://localhost:8070/articles/category/${categoryId}`;
            const urlCategory = `http://localhost:8070/categories/${categoryId}`;
            const response = await axios.get(url);
            const categoryResponse = await axios.get(urlCategory);
            setArticles({
                loading: false,
                items: response.data,
                categoryTitle: categoryResponse.data.title

            });

        } catch (e) {
            alert('Whoops, something went wrong');
            setArticles({
                loading: false,
                items: [],
                categoryTitle: ""
            });
        }
    }

    useEffect(() => {
        loadArticles();
    }, [])

    let content = <h5>Loading...</h5>
    if (!articles.loading && articles.items.length === 0) {
        content = <h5>No articles in this category</h5>
    } else if (!articles.loading) {
        const articlesElements = articles.items.map((article, index) => {

           
            const date = format(new Date(article.createdAt), 'dd MMM yyyy')

            return (
                
                <NavLink to={'/articles/' + article._id} className="row border m-3 text-dark text-decoration-none p-2" key={index}>
                <div className="col-12 col-md-2 m-0 p-0">
                    <img className="img-fluid preview" src={article.thumbnail} alt="artist"></img>
                </div>
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="col"><span className="text-muted  fs-5 fw-bold me-3">{article.title} </span></div>
                    </div>
                    <div className="row">
                        <div className="col card-text text-truncate pb-2">{article.text}</div>
                    </div>
                    <div className="row">
                    <p className="text-muted fst-italic">Added on {date}</p>
                    </div>
                </div>
            </NavLink>
            
            )
        })

        content = (
            articlesElements
        )
    } else {

        content = <Page404/>;
    }
    const breadcrumbPaths = [
        {
            link: '/',
            label: 'Home'
        },
        {
            link: '/articles',
            label: 'Articles'
        },
        {
            label: articles.categoryTitle
        }
    ];

    return (
        <div className=" mt-3 me-5 ms-5 container mb-5">
                <div className="row">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
        <div>
            {content}
        </div>
        </div>
    )
}

export default CategoryList;