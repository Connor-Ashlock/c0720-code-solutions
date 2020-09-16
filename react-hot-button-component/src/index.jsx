import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.nextCount = 1;
    this.hotCount = 0;
    this.hotLevel = ['normal', 'dark-purp', 'light-purp', 'light-red', 'light-org', 'yellow', 'white'];
    this.state = { clickCount: 0 };
  }

  handleClick() {
    this.setState({ clickCount: this.nextCount++ });
  }

  render() {
    if (this.state.clickCount === 18) {
      return <button className={this.hotLevel[6]}>Hot Button</button>;
    }
    return (
      this.state.clickCount % 3 === 0
        ? <button className={this.hotLevel[this.hotCount++]} onClick={this.handleClick}>Hot Button</button>
        : <button className={this.hotLevel[this.hotCount - 1]} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
