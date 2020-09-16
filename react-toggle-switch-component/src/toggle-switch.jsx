import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: false };
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn) {
      return (
        <>
          <div className="on">
            <div className="switch" onClick={this.handleClick}></div>
          </div>
          <p className="state">ON</p>
        </>
      );
    }
    return (
      <>
        <div className="off">
          <div className="switch" onClick={this.handleClick}></div>
        </div>
        <p className="state">OFF</p>
      </>
    );
  }
}

export default ToggleSwitch;
