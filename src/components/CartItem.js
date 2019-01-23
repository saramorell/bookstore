import React from 'react';


const CartItem = (props) => {
  return (
    <div className = "list-group-item" >
      <div className = "row">

        <div className = "col-md-6" > {props.title} </div>
        <div className = "col-md-2" > ${(props.price).toFixed(2)} </div>
        <div className = "col-md-2 mx-auto align-top btn btn-link">
        <button className="btn btn-link" onClick={()=>props.removeFromCart(props.id)}
        > ✖ </button>

        </div>
      </div>
    </div>
  )
}

export default CartItem;
