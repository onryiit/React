import React, { Component } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Product.css";

export default class ProductList extends Component {
 
  render() {
    return (
      <div className="container">
        <h4>
          {this.props.info.title} {"-" + this.props.currentCategory}
        </h4>
        <Table className="table  text-center table-hover table-bordered">
          <thead className="table table-dark">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <button
                    onClick={() => this.props.addtoCart(product)}
                    type="button"
                    className="btn btn-outline-warning"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
