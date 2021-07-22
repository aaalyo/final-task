import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import Breadcrumb from '../Components/Breadcrumb';
import { format } from 'date-fns';
import { SRLWrapper } from "simple-react-lightbox";
import '../Assets/index.css';


function Article() {

    const { articleId } = useParams();
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

    const filteredArticle = articles.items.filter((article) => { return articleId === article._id });
    const article = filteredArticle[0];


    if (!article) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
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
                label: article.title
            }
        ];

        const date = format(new Date(article.createdAt), 'dd MMM yyyy')

        return (

            <div className=" mt-3 me-5 ms-5 container mb-5 p-0">
                <div className="row">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
                <SRLWrapper>
                    <div className="row p-0 m-0 d-inline-flex">
                        <div className="col-12 p-0 m-0 col-md-6 ">
                            <div className="row p-0 m-0  d-inline-flex">
                                <div className="col p-0 m-0">
                                    <img src={article.thumbnail} className="img-fluid" alt="main photo"/>
                                </div>
                            </div>
                            <div className="row  p-0 m-0 d-inline-flex">
                                {article.images.map((image, index) => {
                                    return <div key={index} className="col-4 p-0 m-0"><img className="img-fluid preview" src={image} alt={`photo ${index+1}`} /></div>
                                })}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <h4>{article.title}</h4>
                            </div>
                            <div className="row">
                                <p>{article.text}</p>
                            </div>
                            <div className="row">
                                <p className="text-muted fst-italic">Added on {date}</p>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
            </div>
        )
    }
}

export default Article