import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      introText: 'I came from a state!',
      clickCount: 0
    }
  }

  render() {
    const headerText = "I am a title from a prop!"

    return (
      <div className="App">
      <Header title={headerText} onClick={this.onClick.bind(this)}/>
        <p className="App-intro">
        {this.state.introText}
        </p>
      </div>
    );
  }
  onClick() {
    this.setState ({
      clickCount: this.state.clickCount + 1,
      introText: 'I clicked the button! ' + this.state.clickCount + ' times '
    })
  }
}

export default App;


class Header extends Component {
  render () {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
          <button onClick={this.props.onClick}>Click Me!</button>
      </header>
        );
  }
}
