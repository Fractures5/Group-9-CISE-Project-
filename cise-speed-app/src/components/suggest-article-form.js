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
      .post('https://group9-cise-speed-app.herokuapp.com', data)
      .then(res => {
        alert("Press 'OK' to confirm submission and return to the suggest article page");
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