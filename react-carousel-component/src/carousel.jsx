import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.state = { currentCharacterIndex: 0 };
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    this.timer = setInterval(() => {
      const lastCharaterIndex = this.props.characters.length - 1;
      this.state.currentCharacterIndex === lastCharaterIndex
        ? this.setState({ currentCharacterIndex: 0 })
        : this.setState({ currentCharacterIndex: this.state.currentCharacterIndex + 1 });
    }, 3000);
  }

  handleLeftArrowClick() {
    clearInterval(this.timer);
    const lastCharaterIndex = this.props.characters.length - 1;
    this.state.currentCharacterIndex === 0
      ? this.setState({ currentCharacterIndex: lastCharaterIndex })
      : this.setState({ currentCharacterIndex: this.state.currentCharacterIndex - 1 });
    this.setTimer();
  }

  handleRightArrowClick() {
    clearInterval(this.timer);
    const lastCharaterIndex = this.props.characters.length - 1;
    this.state.currentCharacterIndex === lastCharaterIndex
      ? this.setState({ currentCharacterIndex: 0 })
      : this.setState({ currentCharacterIndex: this.state.currentCharacterIndex + 1 });
    this.setTimer();
  }

  handleDotClick(ev) {
    clearInterval(this.timer);
    this.setState({ currentCharacterIndex: parseInt(ev.target.id, 10) });
    this.setTimer();
  }

  render() {
    const index = this.state.currentCharacterIndex;
    const characters = this.props.characters;
    const characterName = characters[index].name;
    const url = characters[index].imageUrl;
    return (
      <>
        <LeftArrow handleLeftArrowClick={this.handleLeftArrowClick}/>
        <Character src={url} alt={characterName}/>
        <RightArrow handleRightArrowClick={this.handleRightArrowClick}/>
        <Dots characters={characters} currentCharacterIndex={index} handleDotClick={this.handleDotClick}/>
      </>
    );
  }
}

function LeftArrow(props) {
  return <i className="fas fa-caret-left" onClick={props.handleLeftArrowClick}></i>;
}

function RightArrow(props) {
  return <i className="fas fa-caret-right" onClick={props.handleRightArrowClick}></i>;
}

function Character(props) {
  return <img src={props.src} alt={props.alt} />;
}

function Dots(props) {
  const children = props.characters.map((character, index) => {
    return <div key={character.name} id={index} className={index === props.currentCharacterIndex ? 'dot-fill' : 'dot-hollow'} onClick={props.handleDotClick}></div>;
  });
  return (
    <div className="dots">
      { children }
    </div>
  );
}

export default Carousel;
