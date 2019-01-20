import React, {Component} from 'react';


const CartItem = (props) => {
  return (
    <div className = "list-group-item" >
      <div className = "row">

        <div className = "col-md-6" > {props.title} < /div>
        <div className = "col-md-2" > ${(props.price).toFixed(2)} < /div>
        <div className = "col-md-2 mx-auto align-middle">
        <a href="#" id="removeButton" value={props.title} onClick={(e)=>props.removeFromCart(e.target.value).bind(this)} className="text-danger"> ✖ </a>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
