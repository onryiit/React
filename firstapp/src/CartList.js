import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/cartlist.css"

export default class CartList extends Component {
  renderCart() {
    console.log(this.props);
    return (
      
      <table className="table  text-center table-hover table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Categori Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => this.props.removeFromCart(cartItem.product)}> Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  render() {
    return <div>
      <div className="container">
      <div className="text text-center"><h3>Cart </h3></div>
      </div>
      
      {this.renderCart()}</div>;
  }
}
