import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.login = this.login.bind(this);
  }

  login(event) {
    var newName = event.target.value;
    this.setState({ name: newName });
    this.props.login(newName);
  }
  
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="container">
            <div className="box">
              <label>
                Enter your name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.login}
                />
              </label>
            </div>
            <div className="container">
              <button
                className="btn btn-outline-primary"
                onClick={this.props.closeLoginPopup}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
