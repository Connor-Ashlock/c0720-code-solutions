import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleClickWatch = this.handleClickWatch.bind(this);
    this.state = { isStopped: true, time: 0 };
  }

  handleClickIcon() {
    if (this.state.isStopped) {
      this.setState({ isStopped: false });
      this.timerId = setInterval(() => { this.setState({ time: this.state.time + 1 }); }, 1000);
    } else {
      clearInterval(this.timerId);
      this.setState({ isStopped: true, time: this.state.time });
    }
  }

  handleClickWatch() {
    if (this.state.isStopped) {
      this.setState({ time: 0 });
    }
  }

  render() {
    return (
      <>
        <div className="watch" onClick={this.handleClickWatch}>
          <div className="time">{this.state.time}</div>
        </div>
        <i className={this.state.isStopped ? 'fas fa-play' : 'fas fa-pause'} onClick={this.handleClickIcon}></i>
      </>
    );
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
