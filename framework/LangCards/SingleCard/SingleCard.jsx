import React, { Component } from 'react';
import './SingleCard.css';

class SingleCard extends Component {
  state = {
    showForeign: false
  };

  rotateCard = () => {
    let oldShowForeign = this.state.showForeign;
    return this.setState({showForeign: !oldShowForeign});
  };

  nextCard = () => {
    this.setState({showForeign: false});
    this.props.onNextWord();
  };

  render() {
    const cardContent = this.state.showForeign ?
      <h3>{this.props.currentWord ? this.props.currentWord.english : ''}</h3> :
      <h3>{this.props.currentWord ? this.props.currentWord.russian : ''}</h3>;

    return <div className="single_card_container">
      <div className="card_container" >
        {cardContent}
      </div>
      <div className="button_container">
        <div onClick={this.rotateCard} className="button_rotate">Rotate</div>
        <div onClick={this.nextCard} className="button_next">Next</div>
      </div>
    </div>;
  }
}

export default SingleCard;