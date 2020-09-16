import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.hotLevel = ['normal', 'dark-purp', 'light-purp', 'light-red', 'light-org', 'yellow', 'white'];
    this.state = { clickCount: 0 };
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount === 18) {
      return <button className={this.hotLevel[6]}>Hot Button</button>;
    }
    return <button className={this.hotLevel[parseInt(this.state.clickCount / 3, 10)]} onClick={this.handleClick}>Hot Button</button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
