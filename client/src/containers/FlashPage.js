import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashCard from './FlashCard';
import { RedButton, GreenButton, YellowButton } from '../components/FlashcardButton';
import FixedMenu from './FixedMenu';
import { Icon, Popup, Grid } from 'semantic-ui-react';
import '../App.css';
import '../style.css';

class FlashPage extends Component {
    state = {
      overview: [],
      currentCard: {},
      rejectedCards: [],
    }

  componentWillMount() {
    const currentCards = this.state.overview;

    this.setState({
      overview: currentCards,
      currentCard: this.getNextCard(currentCards)
    })
  }

  getNextCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }


  updateCard = () => {
    const currentCards = this.state.overview;
    this.setState({
      currentCard: this.getNextCard(currentCards)
    })
  }

  rejectCard = () => {
    const currentCards = this.state.overview;
    this.setState({
        rejectedCards: this.getNextCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <FixedMenu inverted />
        <div className='cardRow'>
          <FlashCard frontCard={this.state.currentCard.front}
          backCard={this.state.currentCard.back} 
          />
        </div>
        <div className='buttonRow'>
          <RedButton rejectCard={this.rejectCard} />
          <YellowButton drawCard={this.updateCard} />
          <GreenButton drawCard={this.updateCard} />
        </div>
          <Popup trigger={<Icon name='info circle' size='large' inverted style={ { padding: '0 1rem 0 0', margin: '0 auto' } }/>} flowing hoverable>
            <Grid centered divided columns={3}>
              <Grid.Column textAlign='center'>
                <p>Red Button removes card from consideration</p>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <p>Yellow Button keeps card at same pace</p>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <p>Green Button shows card more frequently</p>
              </Grid.Column>
            </Grid>
          </Popup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('MAPSTATETOPROPS', state);
  return {cards: state.cards}
}
export default connect(mapStateToProps)(FlashPage);

