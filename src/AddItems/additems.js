import React, { Component } from "react";
class Additems extends Component {
  state = {
    name: "",
    age: ""
  };
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    this.props.addItem(this.state);
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        add item here
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                placeholder="entrer un nom"
                id="name"
                className="form-control" 
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="text"
                placeholder="entrer une age"
                id="age"
                className="form-control" 
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="col-3">
              <input className="btn btn-success" type="submit" placeholder="ajouter"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Additems;
