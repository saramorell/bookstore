import React, {Component} from 'react'

export default class Book extends Component {


  // addToCart = (e) => {
  //   e.preventDefault()
  //   console.log('click')
  //   {this.props.updateCart()}
  // }

  render() {
    return (
      <li className="list-group-item">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.subtitle}</p>
            <p className="card-text">By: {this.props.author}</p>
            <p className="card-text">{this.props.description}</p>
            <p className="card-text">${(this.props.price).toFixed(2)} </p>
            <button id="bookButton"  onClick={()=>this.props.addToCart(this.props.id)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </li>
    )
  }
}
