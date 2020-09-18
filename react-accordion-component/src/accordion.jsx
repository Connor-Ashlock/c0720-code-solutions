import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.createTitle = this.createTitle.bind(this);
    this.state = { clickedTitle: null };
  }

  handleClick() {
    event.target.id === this.state.clickedTitle
      ? this.setState({ clickedTitle: null })
      : this.setState({ clickedTitle: event.target.id });
  }

  createDescription(id) {
    for (let i = 0; i < this.props.shows.length; i++) {
      if (this.props.shows[i][id]) return <p className="description">{this.props.shows[i][id]}</p>;
    }
  }

  createTitle() {
    const frag = <></>;
    frag.props.children = [];
    for (let i = 0; i < this.props.shows.length; i++) {
      Object.keys(this.props.shows[i])[0] === this.state.clickedTitle
        ? frag.props.children.push(<h1 className="title" id={Object.keys(this.props.shows[i])} onClick={this.handleClick}>{Object.keys(this.props.shows[i])}</h1>, this.createDescription(this.state.clickedTitle))
        : frag.props.children.push(<h1 className="title" id={Object.keys(this.props.shows[i])} onClick={this.handleClick}>{Object.keys(this.props.shows[i])}</h1>);
    }
    return frag;
  }

  render() {
    const titles = this.createTitle();
    return titles;
  }
}

export default Accordion;
