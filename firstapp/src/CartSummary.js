import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem, NavLink } from "reactstrap";
import "./style/cartsummary.css";

export default class CartSummary extends Component {
  renderSummary = () => {
    return (
      <div>
        <Dropdown>
          <DropdownToggle className="btn btn-sm btn-success ">
            Your Cart -{" "}
            <Badge className="badge bg-warning">{this.props.cart.length}</Badge>
          </DropdownToggle>
          <DropdownMenu >
            {this.props.cart.map((cartItem) => (
              <DropdownItem className="text-success" key={cartItem.product.id}>
                <Badge
                  className=" badge bg-danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  X
                </Badge>
                {" " + cartItem.product.productName + "  "} -
                <Badge className="badge bg-success">
                  {" " + cartItem.quantity}
                </Badge>
              </DropdownItem>
            ))}
            <div className="dropdown-divider"></div>
            <DropdownItem >
              <Link to="cart" className="btn btn-outline-success"> Go To Cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  };
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
