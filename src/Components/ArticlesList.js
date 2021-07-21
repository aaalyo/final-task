import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
import '../Assets/index.css';


function ArticlesList() {
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
            const url = 'http://localhost:8070/articles';
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



    useEffect(() => {
        loadArticles();
    }, []);


    let content = <h5>Loading...</h5>
    if (!articles.loading && articles.items.length === 0) {
        content = <h5>No articles added</h5>
    } else if (!articles.loading) {
        const articlesElements = articles.items.map((article, index) => {
            const date = format(new Date(article.createdAt), 'dd MMM yyyy')
            return (
                <NavLink to={'/articles/' + article._id} className="row border m-3 text-dark text-decoration-none p-2" key={index}>
                    <div className="col-12 col-md-2 m-0 p-0">
                        <img className="img-fluid preview" src={article.thumbnail} alt="artist"/>
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
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ArticlesList;