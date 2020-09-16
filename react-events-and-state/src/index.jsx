/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    (this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true })
    );
  }

  render() {
    console.log(this.handleClick);
    return (this.state.isClicked
      ? <button onClick={this.handleClick}>Thanks!</button>
      : <button onClick={this.handleClick}>Click Me!</button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
