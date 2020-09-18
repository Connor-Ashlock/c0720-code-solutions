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

  createDescription(description) {
    return <p className="description">{ description }</p>;
  }

  createTitle() {
    const children = this.props.shows.map(show => {
      const showTitle = Object.keys(show)[0];
      if (showTitle === this.state.clickedTitle) {
        const description = this.createDescription(show[this.state.clickedTitle]);
        return (
          <>
            <h1 className="title" id={ showTitle } onClick={ this.handleClick }>{ showTitle }</h1>
            { description }
          </>
        );
      } else {
        return <h1 className="title" id={ showTitle } onClick={ this.handleClick }>{ showTitle }</h1>;
      }
    });
    return (
      <>
        { children }
      </>
    );
  }

  render() {
    const titles = this.createTitle();
    return titles;
  }
}

export default Accordion;
