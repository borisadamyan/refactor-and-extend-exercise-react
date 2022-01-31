import React, { Component } from "react";

class App extends Component {
  state = { state: '', year: '', isValid: undefined }

  isValidHome = (home) => {
    if (isNaN(home.year)) { return false; }

    if (home.year.length !== 2 && home.year.length !== 4) { return false; }

    if (home.state.toLowerCase() === "new york") {
      if (home.year.length === 2) {
        if (parseInt(home.year) < 97 && parseInt(home.year) > 17) {
          return false;
        } else {
          return true;
        }
      } else if (home.year.length === 4) {
        if (parseInt(home.year) < 1997) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else if (home.state.toLowerCase() === "california") {
      if (home.year.length === 2) {
        if (parseInt(home.year) >= 6 && parseInt(home.year) <= 18) {
          return false;
        } else if (parseInt(home.year) <= 98) {
          return false;
        } else {
          return true;
        }
      } else if (home.year.length === 4) {
        if (parseInt(home.year) >= 2006) {
          return false;
        } else if (parseInt(home.year) <= 1998) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Home Approval System</h2>
        <h3>Current status: {this.state.isValid ? "Approved Home" : "Unapproved"}</h3>
        <span>Please enter your home information below.</span>
        <br />
        <label>State:</label>
        <input type="text" name="state" onChange={(event) => this.setState({ ...this.state, state: event.target.value })} />
        <br />
        <label>Year:</label>
        <input type="text" name="year" onChange={(event) => this.setState({ ...this.state, year: event.target.value })} />
        <br />
        <button onClick={() => this.setState({ ...this.state, isValid: this.isValidCar({ state: this.state.state, year: this.state.year }) })}>Validate</button>
      </div>
    );
  }
}

export default App;
