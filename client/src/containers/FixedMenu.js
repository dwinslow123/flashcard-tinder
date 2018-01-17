import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import '../App.css';
import '../style.css';
import {
  Button,
  Container,
  Icon,
  Menu,
  Modal,
 
} from 'semantic-ui-react'

/*
render login
if logged in => render username + LOGOUT Route
*/ 

class FixedMenu extends Component { 
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return  <Button as='a'basic color='green'>Login</Button>;
        break;
      default: 
        return <Button as='a' basic color='green'><a href="/api/logout" style={{ color: 'white'}}>{this.props.auth.username} | Logout</a></Button>;
    }
  }

  render() {
    console.log('FIXED MENU PROPS', this.props.auth);
    return (
      <Menu  inverted fixed='top' size='large'>
        <Container>
          
        <Menu.Item as='a' href="/">Studdy Buddy</Menu.Item>

          <Menu.Menu position='right'>
          {/* 
          if url = /  !render home
          else render home
          
          */}
          {/* <Menu.Item as='a' href="/">Home</Menu.Item> */}

            <Menu.Item>
              <Modal trigger={ this.renderContent() } basic>
              
              <Modal.Content>
                  <Modal.Description>
                  <div className="btn-Signup">
                  <Button.Group 
                  className='btn-social' 
                  vertical style={ { display: 'flex', justifyContent: 'center' } }>
                    <Button icon labelPosition='left' color='google plus' compact><Icon name='google' /> <a href="/auth/google" style={{color:'white'}}>GOOGLE+</a></Button>
                    <Button icon labelPosition='left' color='facebook' compact><Icon name='facebook' /> <a href="/auth/google" style={{color:'white'}}>FACEBOOK</a></Button>
                    <Button icon labelPosition='left' color='black' compact><Icon name='github' /> <a href="/auth/google" style={{color:'white'}}>GITHUB</a></Button>
                    </Button.Group>
                    
                  </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Menu.Item>

          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

function mapStateToProps( { auth }) {
  return { auth };
}
export default connect(mapStateToProps)(FixedMenu);
