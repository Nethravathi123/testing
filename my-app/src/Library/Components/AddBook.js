import React from 'react';
import axios from 'axios';

export default class AddBooks extends React.Component {
  state = {
    name: '',
    author: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8080/books/addBooks`, {
        name: this.state.name,
        author: this.state.author,
      })
      .then((res) => {
        this.props.getValues();
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Book Name:
            <input type="text" name="name" onChange={this.handleNameChange} />
          </label>
          <label>
            Book Author:
            <input
              type="text"
              name="author"
              onChange={this.handleAuthorChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
