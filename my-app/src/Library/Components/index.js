import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import AddBooks from './AddBook';

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Book ID',
          field: 'id',
        },
        {
          title: 'Book Name',
          field: 'name',
        },
        { title: 'Author', field: 'author' },
      ],
      data: [
        // {
        //   id: '1',
        //   bookName: 'Library Science',
        //   author: 'author1',
        // },
        // {
        //   id: '2',
        //   bookName: 'book2',
        //   author: 'author2',
        // },
        // {
        //   id: '3',
        //   bookName: 'book3',
        //   author: 'author387',
        // },
      ],
    };
  }

  getValues = () => {
    axios.get(`/books/`).then((res) => {
      console.log('response', res.data);
      const data = res.data;
      this.setState({ data });
    });
  };

  componentDidMount() {
    this.getValues();
  }

  render() {
    return (
      <React.Fragment>
        <MaterialTable
          options={{
            search: false,
            toolbar: false,
            paging: false,
          }}
          columns={this.state.columns}
          data={this.state.data}
        />
        <div>{'Please Add Books here'}</div>
        <AddBooks getValues={this.getValues} />
      </React.Fragment>
    );
  }
}

export default Editable;
