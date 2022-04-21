import React, {Component} from "react";

class App extends Component {
  state = {state: '', year: '', isValid: undefined}

  isValidHome = (home) => {

    if (isNaN(home.year)) {
      return false;
    }

    if (home.year.length !== 2 && home.year.length !== 4) {
      return false;
    }

    switch (home.state.toLowerCase()) {

      case 'new york':
        if (home.year.length === 2) {
          return parseInt(home.year) <= 17 || parseInt(home.year) >= 97;
        }
        if (home.year.length === 4) {
          return parseInt(home.year) >= 1997;
        }
        return false;
      case 'california':
        if (home.year.length === 2) {
          return parseInt(home.year) > 98;
        }
        if (home.year.length === 4) {
          return parseInt(home.year) > 1998 && parseInt(home.year) < 2006;
        }
        return false;

      default:
        return false
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Home Approval System</h2>
        <h3>Current status: {this.state.isValid ? "Approved Home" : "Unapproved"}</h3>
        <span>Please enter your home information below.</span>
        <br/>
        <label>State:</label>
        <input type="text" name="state"
               onChange={(event) => this.setState({...this.state, state: event.target.value})}/>
        <br/>
        <label>Year:</label>
        <input type="text" name="year" onChange={(event) => this.setState({...this.state, year: event.target.value})}/>
        <br/>
        {/*isValidCar function is not defined ----> isValidHome */}
        <button onClick={() => this.setState({
          ...this.state,
          isValid: this.isValidHome({state: this.state.state, year: this.state.year})
        })}>Validate
        </button>
      </div>
    );
  }
}

export default App;
