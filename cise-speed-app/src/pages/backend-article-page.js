import React from "react";
import BackendArticleForm from "../components/backend-article-form.js";
 
const BackendArticle = () =>  {
    return (
    <div>
        <div className="BackendArticleForm">
            <h2>Submit Article</h2>
                <p>This will be a form to allow submitters to submit an article for possible 
                    inclusion in our SPEED repo.</p>
                <BackendArticleForm/>
        </div>
    </div>
    );
};
 
export default BackendArticle;