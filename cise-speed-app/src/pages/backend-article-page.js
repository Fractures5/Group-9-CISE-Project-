import React from "react";
import BackendArticleForm from "../components/backend-article-form.js";
 
const BackendArticle = () =>  {
    return (
    <div>
        <div className="BackendArticleForm">
            <h2>Submit Article to SPEED Database</h2>
                <p>This will be a form to allow submitters to submit an article for possible 
                    inclusion in our SPEED repo.</p>
                    <br></br>
                <BackendArticleForm/>
        </div>
    </div>
    );
};
 
export default BackendArticle;