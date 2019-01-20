import React, { Component } from 'react';

class StoreHeader extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Book Store</a>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        )
    }
}

export default StoreHeader;
