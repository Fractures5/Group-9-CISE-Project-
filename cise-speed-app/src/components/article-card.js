import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const article = props.article;

    return(
        <div className="card-container">
            {/* <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" /> */}
            <div className="desc">
                <p>Test</p>
                <h2>
                    <Link to={`/ShowArticlesList/${article._id}`}>
                    </Link>
                </h2>
                <p>{article.title}</p>
                <h3>{article.author}</h3>
            </div>
        </div>
    );
};

export default ArticleCard;