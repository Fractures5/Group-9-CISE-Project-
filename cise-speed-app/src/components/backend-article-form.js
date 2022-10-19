import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios'; 


class BackendArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      author:'',
      journalName:'',
      publicationYear:'',
      claim:'',
      sePractice:'',
      resultOfEvidence:'',
      researchType:'',
      typeOfParticipant:''
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
      claim: this.state.claim,
      sePractice: this.state.sePractice,
      resultOfEvidence: this.state.resultOfEvidence,
      researchType: this.state.researchType,
      typeOfParticipant: this.state.typeOfParticipant
    };

    axios
      .post("http://localhost:8082/api/backendArticleRoutes", data)
      .then(res => {
        alert("Press 'OK' to confirm submission and return to the backend article submission form");
        this.setState({
          title:'',
          author:'',
          journalName:'',
          publicationYear:'',
          claim:'',
          sePractice:'',
          resultOfEvidence:'',
          researchType:'',
          typeOfParticipant:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div className="BackendArticleForm">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title'
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
                    placeholder='Claim'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='SE Practice'
                    name='sePractice'
                    className='form-control'
                    value={this.state.sePractice}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Result of Evidence'
                    name='resultOfEvidence'
                    className='form-control'
                    value={this.state.resultOfEvidence}
                    onChange={this.onChange}
                  />
                </div><div className='form-group'>
                  <input
                    type='text'
                    placeholder='Research Type'
                    name='researchType'
                    className='form-control'
                    value={this.state.researchType}
                    onChange={this.onChange}
                  />
                </div><div className='form-group'>
                  <input
                    type='text'
                    placeholder='Participant Type'
                    name='typeOfParticipant'
                    className='form-control'
                    value={this.state.typeOfParticipant}
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

export default BackendArticleForm;