import React, { Component } from 'react'
import '../App.css';
import '../style.css';
import Language from '../components/Language';
// import FixedMenu from './FixedMenu';
// import './index.js';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
//  Menu,
  Visibility
// Responsive,
//  Modal,
} from 'semantic-ui-react'


class HomePageLayout extends Component {
  
  render() {
    return (
      <div className='landingPage'>
          <Segment
            
            textAlign='center'
            vertical
            className='top-container'
          >
            <Container text>
              <Header
                as='h1'
                content='Studdy Buddy'
                inverted
                style={{ fontSize: '7em', fontWeight: 'normal', marginBottom: 0, marginTop: '1.1em', fontFamily: 'Permanent Marker' }}
              />

              <Icon name='line chart' size='massive' inverted />

              <Header
                as='h2'
                content='Level Up Your Knowledge Now'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal', fontFamily: 'Titillium Web' }}
              />
              <Button size='huge' href='#languages' basic color='green'>
                Level Up
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>

        <div id='languages'>
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Language />
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment inverted vertical style={{ padding: '5em 0em' }}>
          </Segment>
        </div>
      </div>
    )
  }
}

export default HomePageLayout; 

