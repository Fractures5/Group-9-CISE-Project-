import React from "react";
import BackendArticleForm from "../components/backend-article-form.js";
 
const BackendArticle = () =>  {
    return (
    <div>
        <div className="BackendArticleForm">
            <h2>Submit Article to SPEED Database</h2>
                <p>This will be a form to allow the moderators/analyst to submit an article to have it be included in our SPEED repo and table article view.</p>
                    <br></br>
                <BackendArticleForm/>
        </div>
    </div>
    );
};
 
export default BackendArticle;