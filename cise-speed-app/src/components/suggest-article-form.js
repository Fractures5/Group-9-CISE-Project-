import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class SuggestArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      author:'',
      journalName:'',
      publicationYear:'',
      articleVolume:'',
      articleNumber:'',
      articlePages:'',
      articleDOI:'',
      selectedSEPractice:'',
      articleBibtex:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
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
      selectedSEPractice: this.state.selectedSEPractice,
      articleBibtex: this.state.articleBibtex
    };

    axios
      .post('http://localhost:8082/api/articleRoutes', data)
      .then(res => {
        this.setState({
          title:'',
          author:'',
          journalName:'',
          publicationYear:'',
          articleVolume:'',
          articleNumber:'',
          articlePages:'',
          articleDOI:'',
          selectedSEPractice:'',
          articleBibtex:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in suggesting article!");
      })
  };

  render() {
    return (
      <div className="SuggestArticleForm">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Suggest Article</h1>
              {/* <p className="lead text-center">
                  Submit an Article
              </p> */}

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Name'
                    name='journalName'
                    className='form-control'
                    value={this.state.journalName}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Publication Year'
                    name='publicationYear'
                    className='form-control'
                    value={this.state.publicationYear}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Article Volume'
                    name='articleVolume'
                    className='form-control'
                    value={this.state.articleVolume}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Article Number'
                    name='articleNumber'
                    className='form-control'
                    value={this.state.articleNumber}
                    onChange={this.onChange}
                  />
                </div>
                
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Article Pages'
                    name='articlePages'
                    className='form-control'
                    value={this.state.articlePages}
                    onChange={this.onChange}
                  />
                </div>
                
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Article DOI'
                    name='articleDOI'
                    className='form-control'
                    value={this.state.articleDOI}
                    onChange={this.onChange}
                  />
                </div>
                
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Selected SE Practice'
                    name='selectedSEPractice'
                    className='form-control'
                    value={this.state.selectedSEPractice}
                    onChange={this.onChange}
                  />
                </div>
                
                <div className='form-group'>
                  <textarea 
                  type='text'
                  placeholder='Paste BibTex file contents'
                  name='articleBibtex'
                  className='form-control'
                  value={this.state.articleBibtex}
                  onChange={this.onChange}
                  />
                </div>
            
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestArticleForm;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// const SuggestArticleForm = () => {
//   const { register, handleSubmit } = useForm();
//   const [result, setResult] = useState("");
//   // const onSubmit = (data) => setResult(JSON.stringify(data));

//   const onSubmit = e =>{
//     e.preventDefault();

    // const data = {
    //   title: this.state.title,
    //   author: this.state.author,
    //   journalName: this.state.journalName,
    //   publicationYear: this.state.publicationYear,
    //   articleVolume: this.state.articleVolume,
    //   articleNumber: this.state.articleNumber,
    //   articlePages: this.state.articlePages,
    //   articleDOI: this.state.articleDOI,
    //   selectedSEPractice: this.state.selectedSEPractice
    // };

    // axios
    //   .post('http://localhost:8082/api/articleRoutes', data)
    //   .then(res => {
    //     this.setState({
    //       title: '',
    //       author:'',
    //       journalName:'',
    //       publicationYear:'',
    //       articleVolume:'',
    //       articleNumber:'',
    //       articlePages:'',
    //       articleDOI:'',
    //       selectedSEPractice:''
    //     })
    //     this.props.history.push('/');
    //   })
    //   .catch(err => {
    //     console.log("Error in suggesting article!");
    //   })
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
    
//       <input {...register("title")} placeholder="Title" />
//       <p><input {...register("authors")} placeholder="Authors" /></p>
//       <p><input {...register("journalName")} placeholder="Journal Name" /></p>
//       <p><input {...register("pubyear")} placeholder="Year of Publication" /></p>
//       <p><input {...register("volume")} placeholder="Volume" /></p> 
//       <p><input {...register("volume")} placeholder="Number" /></p> 
//       <p><input {...register("pages")} placeholder="Pages" /></p>
//       <p><input {...register("doi")} placeholder="DOI" /></p>

     
//       <select {...register("sepractice")}>
//         <option value="">Select SE practice...</option>
//         <option value="TDD">TDD</option>
//         <option value="Mob Programming">Mob Programming</option>
//         <option value="Pair Programming">Pair Programming</option>
//         <option value="Agile Development">Agile Development</option>
//       </select>

//       <br></br>
//       <br></br>
//       <p>Upload TextFile in BibTex format</p>
//       <input type="file" accept=".txt" name="picture"/>
//       <p>{result}</p>
//       <input type="submit" />
//     </form>
//   );
// }
// export default SuggestArticleForm;