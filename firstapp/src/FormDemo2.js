import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.tatget.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " Added to db!");
    alertify.success(this.state.password + " Added to db!");
    alertify.success(this.state.city + " Added to db!");
    alertify.success(this.state.description + " Added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Eescription"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option defaultValue>Choose a City...</option>
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>Adana</option>
              <option>İzmir</option>
              <option>Zonguldak</option>
            </Input>
          </FormGroup>
          <button type="submit" className="btn btn-secondary">
            Save
          </button>
        </Form>
      </div>
    );
  }
}
