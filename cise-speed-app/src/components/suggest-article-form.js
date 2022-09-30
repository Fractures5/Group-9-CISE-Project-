import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const SuggestArticleForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  // const onSubmit = (data) => setResult(JSON.stringify(data));

  const onSubmit = e =>{
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      journalName: this.state.journalName,
      publicationYear: this.state.publicationYear,
      articleVolume: this.state.articleVolume,
      articleNumber: this.state.articleNumber,
      articlePages: this.state.articlePages,
      articleDOI: this.state.articleDOI,
      selectedSEPractice: this.state.selectedSEPractice
    };

    axios
      .post('http://localhost:8082/api/articleRoutes', data)
      .then(res => {
        this.setState({
          title: '',
          author:'',
          journalName:'',
          publicationYear:'',
          articleVolume:'',
          articleNumber:'',
          articlePages:'',
          articleDOI:'',
          selectedSEPractice:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in suggesting article!");
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("journalName")} placeholder="Journal Name" /></p>
      <p><input {...register("pubyear")} placeholder="Year of Publication" /></p>
      <p><input {...register("volume")} placeholder="Volume" /></p> 
      <p><input {...register("volume")} placeholder="Number" /></p> 
      <p><input {...register("pages")} placeholder="Pages" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>

     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
        <option value="Pair Programming">Pair Programming</option>
        <option value="Agile Development">Agile Development</option>
      </select>

      <br></br>
      <br></br>
      <p>Upload TextFile in BibTex format</p>
      <input type="file" accept=".txt" name="picture"/>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SuggestArticleForm;