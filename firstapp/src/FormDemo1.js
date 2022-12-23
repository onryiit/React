import React, { Component } from 'react'

//event.preventDefault() refresh atmayı engeller
export default class FormDemo1 extends Component {
    state = {userName:'' ,city:''}
    onChangeHandler = (event)=>{
        //this.setState({userName:event.target.value})
        let name = event.target.name;
        let value= event.target.value;
        
        this.setState({[name]:value})
    }
    onSubmitHandler =(event)=> {
        event.preventDefault();
        let value = {userName: this.state.userName,city:this.state.city}
        alert(value.city)
        alert(value.userName)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name="userName"onChange={this.onChangeHandler} type="text" ></input>
            <h3>User Name is {this.state.userName}</h3>
            
            <h3>City</h3>
            <input name="city"onChange={this.onChangeHandler} type="text" ></input>
            <h3>City is {this.state.city}</h3>
            <input type="submit" value="Save" className='btn btn-dark btn-sm'></input>
        </form>
      </div>
    )
  }
}
