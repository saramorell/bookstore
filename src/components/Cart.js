import React, { Component } from 'react';
import CartItem from './CartItem'

export default class Cart extends Component {



  render(props){

    return (
      <div>
          <h1>Cart</h1>
          <div className="list-group">
            <div className="list-group-item">
              <h5>
                <div className="row">
                  <div className="col-md-8">Item</div>
                  <div className="col-md-2">Price</div>
                </div>
              </h5>
            </div>
              { this.props.cart.map((item, i) =>

                  <CartItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    removeFromCart={this.props.removeFromCart}
                  />
              )}
            </div>
          <div>
            <div className="list-group-item">
              <h4>
              Total: ${this.props.cart.reduce((total, item)=>{
                return total + (item.price)
              },0)}
              </h4>
            </div>
            </div>

          </div>
    )
  }
}
