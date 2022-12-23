import Navi from "./Navi";
import CategoriList from "./CategoriList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { Component } from "react";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.getProducts(category.id);
    this.setState({ currentCategory: category.categoryName });
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addtoCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
      this.setState({ cart: newCart });
      alertify.success(product.productName + " Added to Your Cart");
    }
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " Remove From Your Cart");
  };

  render() {
    let ProductInfo = { title: "ProductList" };
    let CategoriInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart}>
            {" "}
          </Navi>
          <Row>
            <Col xs="3">
              <CategoriList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoriInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <div className="product">
                      <ProductList
                        info={ProductInfo}
                        products={this.state.products}
                        addtoCart={this.addtoCart}
                        currentCategory={this.state.currentCategory}
                      />
                    </div>
                  }
                />
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                />
                <Route path="form" element={<FormDemo1 />} />
                <Route path="form2" element={<FormDemo2 />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
