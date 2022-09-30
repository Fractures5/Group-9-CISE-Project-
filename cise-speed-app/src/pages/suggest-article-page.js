// This is suggest article page which will have the form for the submitter to suggest a new article/practice.

import React from "react";
import SuggestArticleForm from "../components/suggest-article-form.js";
 
const SuggestArticle = () =>  {
    return (
    <div>
        <div class="SuggestArticleForm">
            <h2>Submit Article</h2>
                <p>This form allows submitters to submit an article for possible 
                    inclusion in our SPEED application.</p>
                <p>Please fill in all the fields (except BibTex optional)</p>
                    <br></br>
                <SuggestArticleForm/>
        </div>
    </div>
    );
};
 
export default SuggestArticle;