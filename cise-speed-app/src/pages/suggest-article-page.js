// This is suggest article page which will have the form for the submitter to suggest a new article/practice.

import React from "react";
import suggestArticleForm from "../components/suggest-article-form.js";
 
const suggestArticle = () =>  {
    return (
    <div>
        <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for possible 
                inclusion in our SPEED repo.</p>
            <suggestArticleForm/>
    </div>
    );
}
 
export default suggestArticle;