import React, { Component } from 'react';

class StoreHeader extends Component {


    render() {
        return (
          <nav className="navbar navbar-dark bg-primary">
            <div className="navbar-brand">Book Store</div>
            <form className="form-inline my-2 my-lg-0"
            onChange={(e) => this.props.handelChange(e.target.value)}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search"/>

            </form>
          </nav>
        )
    }
}

export default StoreHeader;
