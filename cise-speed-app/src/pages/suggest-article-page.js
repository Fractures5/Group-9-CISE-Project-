// This is suggest article page which will have the form for the submitter to suggest a new article/practice.

import React from "react";
import SuggestArticleForm from "../components/suggest-article-form.js";
 
const SuggestArticle = () =>  {
    return (
    <div>
        <div class="SuggestArticleForm">
            <h2>Suggest an Article</h2>
            <br></br>
                <p>This form allows submitters to submit an article for possible 
                    inclusion in our SPEED application.</p>
                    <br></br>
                <SuggestArticleForm/>
        </div>
    </div>
    );
};
 
export default SuggestArticle;