import React from "react";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slot1: 0,
      slot2: 0,
      slot3: 0,
    };
    this.spin = this.spin.bind(this);
    this.debug = this.debug.bind(this);
  }
  spin() {
    var s1 = Math.floor(Math.random() * 9) + 1;
    var s2 = Math.floor(Math.random() * 9) + 1;
    var s3 = Math.floor(Math.random() * 9) + 1;
    //  console.log(s1,s2,s3)
    this.setState({
      slot1: s1,
      slot2: s2,
      slot3: s3,
    });
    this.props.pcb(s1, s2, s3);
  }
  debug() {
    this.setState({
      slot1: 7,
      slot2: 7,
      slot3: 7,
    });
    this.props.pcb(7, 7, 7);
  }
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="container">
            <div className="box">
              <div id="st-box">{this.state.slot1}</div>
              <div id="nd-box">{this.state.slot2}</div>
              <div id="rd-box">{this.state.slot3}</div>
            </div>
            <div>
              <h1>slot 1 array {this.state.s1}</h1>
            </div>
            <div className="container">
              <button className="btn btn-outline-primary" onClick={this.spin}>
                Spin
              </button>
              <button className="btn btn-outline-primary" onClick={this.debug}>
                Debug
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={this.props.closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
