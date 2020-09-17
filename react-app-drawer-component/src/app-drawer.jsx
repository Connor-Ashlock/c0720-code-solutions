import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <i className="fas fa-bars" onClick={this.handleClick}></i>
      );
    }
    return (
      <>
        <div className="sidebar">
          <h1 className="menu" onClick={this.handleClick}>Menu</h1>
          <p onClick={this.handleClick}>About</p>
          <p onClick={this.handleClick}>Get Started</p>
          <p onClick={this.handleClick}>Sign In</p>
        </div>
        <div className="shade" onClick={this.handleClick}></div>
      </>
    );
  }
}

export default AppDrawer;
