import React, { Component } from 'react';

export default class BookList extends Component {



    render() {
        return (
            <div className="book-list">
              <h1>{this.props.title}</h1>
                <ul className="list-group">
                {this.props.renderBooks()}
                </ul>
            </div>
        )
    }
}

BookList.defaultProps = {
  books: []
}
