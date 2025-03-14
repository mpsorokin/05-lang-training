import React, { Component } from 'react';
import './Collapsible.css';

class Collapsible extends Component {
  state = {
    isOpened: false,
  };

  toggleContent = () => {
    let oldState = this.state.isOpened;
    this.setState({isOpened: !oldState});
  };

  render() {
    const displayContent = this.state.isOpened ?
      <div className="collapsible-content">
        {this.props.content || 'default content'}
      </div>
    : '';

    return <div className="collapsible-container">
      <button onClick={this.toggleContent} className="collapsible-button">{this.props.title || 'Open Section 1'}</button>
      {displayContent}
    </div>;
  }
}

export default Collapsible;