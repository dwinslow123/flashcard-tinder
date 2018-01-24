import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export class GreenButton extends Component {
  drawCard = () => {
    this.props.drawCard();
  }

  render() {
    return (
      <Button color='green' circular onClick={this.drawCard} style={ { margin: '0 0 0 1.5rem', height: '5rem', width: '5rem' } }></Button>
    )
  }
}

export class RedButton extends Component {
  rejectCard = () => {
    this.props.rejectCard();
  }

  render() {
    return (
      <Button color='red' circular onClick={this.rejectCard} style={ { margin: '0 1.5rem 0 0', height: '5rem', width: '5rem' } }></Button>
    )
  }
}

export class YellowButton extends Component {
  drawCard = () => {
    this.props.drawCard();
  }

  render() {
    return (
      <Button color='yellow' circular onClick={this.drawCard} style={ { margin: '0 1.5rem 0 1.5', height: '5rem', width: '5rem' }}></Button>
    )
  }
}