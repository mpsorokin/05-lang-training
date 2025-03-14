import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
  pushBackButton = () => {
    console.log('clicked');
    this.props.pushedBack();
  };

  render() {
    const itemsLength = this.props.itemsLength;
    const currentItem = this.props.currentItem;
    const computedWidth = `${currentItem/itemsLength * 100}%`;

    const statsContent = `${currentItem}/${itemsLength}`;


    return <div className="progress_container">
      <div onClick={() => this.pushBackButton()} className="progress_close_button">X</div>
      <div className="progress_bar_container">
        <div className="progress_bar"
             style={{width: computedWidth }}
        ></div>
      </div>
      <div className="progress_stats">{statsContent}</div>
    </div>;
  }
}

export default ProgressBar;