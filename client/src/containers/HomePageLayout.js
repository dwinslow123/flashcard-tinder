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
//  Menu,
  Segment,
  Visibility,
// Responsive,
//  Modal,
  Image
} from 'semantic-ui-react'

const felix = '../assets/Felix_the_Cat.png'


class HomePageLayout extends Component {

  render() {
    return (
      <div className='landingPage'>
          <Segment
            inverted
            textAlign='center'
            vertical
            className='top-container'
          >
            <Container text>
              <Header
                as='h1'
                content='Welcome to Studdy Buddy!'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '.5em' }}
              />

              <Segment basic>
                <Image src={felix} size='small' centered />
              </Segment>
              <Header
                as='h2'
                content='Learn some languages.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge' href='#languages'>
                Get Started
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

