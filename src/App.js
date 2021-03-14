import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import Popup from "./Popup";
import Login from "./Login";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showPopup: false,
      showLoginPopup: false,
      balance: 0,
      name: "Guest",
      slots: [
        {
          slot1: "",
          slot2: "",
          slot3: "",
          currentTime: "",
        },
      ],
    };
  }

  // sorting
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
  //sorting
  sortBy(key) {
    let arrayCopy = [...this.state.slots];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ slots: arrayCopy });
    console.log("sort fun");
  }
  //callback for updating state
  cb = (s1, s2, s3) => {
    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.setState({
      slots: [...this.state.slots, { s1, s2, s3, time }],
    });

    var bal = 0;
    // console.log(this.state.slots);
    if (s1 === s2 && s2 === s3 && s3 === 7) {
      bal = 9;
    } else if (s1 === s2 && s2 === s3) {
      bal = 4;
    } else if (s1 === s2 || s2 === s3) {
      bal = -0.5;
    } else {
      bal = -1;
    }

    this.setState({ balance: this.state.balance + bal });
  };

  cbLogin = (n) => {
    this.setState({
      name: n,
    });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  toggleLoginPopup() {
    this.setState({
      showLoginPopup: !this.state.showLoginPopup,
    });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">Casino</span>
            <div className="d-flex">
              <span className="navbar-brand">Balance</span>
              <input
                className="form-control me-2"
                readOnly
                value={this.state.balance}
              />
              <>
                <button
                  width="40"
                  height="40"
                  className="rounded-circle"
                  onClick={this.toggleLoginPopup.bind(this)}
                >
                  <img
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                    width="40"
                    height="40"
                    className="rounded-circle"
                    alt="img"
                  />
                </button>
              </>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="py-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <span className="navbar-brand">{this.state.name}</span>
                <div className="d-flex">
                  <button
                    className="btn btn-outline-primary"
                    onClick={this.togglePopup.bind(this)}
                  >
                    Start
                  </button>
                </div>
              </div>
            </nav>

            <table className="table border shadow">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Slot 1</th>
                  <th scope="col">Slot 2</th>
                  <th scope="col">Slot 3</th>
                  <th scope="col">Time</th>
                  {/* <button onClick={() => this.sortBy('slot1')}>mhvhnv</button> */}
                </tr>
              </thead>
              <tbody>
                {this.state.slots.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.s1}</td>
                    <td>{item.s2}</td>
                    <td>{item.s3}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {this.state.showPopup ? (
          <Popup pcb={this.cb} closePopup={this.togglePopup.bind(this)} />
        ) : null}
        {this.state.showLoginPopup ? (
          <Login
            login={this.cbLogin}
            closeLoginPopup={this.toggleLoginPopup.bind(this)}
          />
        ) : null}
        <div className="footer">copyright</div>
      </>
    );
  }
}

export default App;
