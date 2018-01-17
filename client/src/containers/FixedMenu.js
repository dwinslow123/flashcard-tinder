import React, { Component } from 'react'
import '../App.css';
import '../style.css';

// import Language from '../components/Language';
// import './index.js';
import {
  Button,
  Container,
  // Grid,
  // Header,
  Icon,
  Menu,
  // Segment,
  // Visibility,
  // Responsive,
  Modal,
  // Image
} from 'semantic-ui-react'

class FixedMenu extends Component { 

  render() {
    return (
      <Menu  inverted fixed='top' size='large'>
        <Container>
        <Menu.Item as='a' href="/">Studdy Buddy</Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item as='a' href="/">Home</Menu.Item>
            <Menu.Item>
<<<<<<< HEAD:src/containers/FixedMenu.js
              <Modal trigger={<Button as='a' primary>Sign Up</Button>} basic>
                <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }>Ace the Dev Interview!</Modal.Header>
                <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }><h3>Sign Up to Get Started!</h3></Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                  <div className="btn-Signup">
                  <Button.Group className='btn-social' vertical>
                    <Button icon labelPosition='left' color='black' compact><Icon name='github' />GITHUB</Button>
                    <Button icon labelPosition='left' color='google plus' compact><Icon name='google' /> <a href="/auth/google">GOOGLE+</a></Button>
                    <Button icon labelPosition='left' color='facebook' compact><Icon name='facebook f' />FACEBOOK</Button>
                    <Button icon labelPosition='left' color='teal' compact><Icon name='signup' />SIGN IN</Button>
                    </Button.Group>
                  </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Menu.Item>
            <Menu.Item>
              <Modal trigger={<Button as='a' secondary>Log In</Button>} basic>
=======
              <Modal trigger={<Button as='a' secondary>LOG IN</Button>} basic>
>>>>>>> 8f8d5312cad32b927590632b5830b23f74185f53:client/src/containers/FixedMenu.js
              <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }>Log In With</Modal.Header>
              <Modal.Content>
                  <Modal.Description>
                  <div className="btn-Signup">
                  <Button.Group className='btn-social' vertical style={ { display: 'flex', justifyContent: 'center' } }>
                    <Button icon labelPosition='left' color='google plus' compact><Icon name='google' /> <a href="/auth/google">GOOGLE+</a></Button>
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

export default FixedMenu;

// export default class HomepageLayout extends Component {
//   state = {}

//   hideFixedMenu = () => this.setState({ visible: false })
//   showFixedMenu = () => this.setState({ visible: true })

//   render() {
//     const { visible } = this.state

//     return (
//       <div className='landingPage'>
//         { visible ? <FixedMenu /> : null }

//         <Visibility
//           onBottomPassed={this.showFixedMenu}
//           onBottomVisible={this.hideFixedMenu}
//           once={false}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             vertical
//             className='top-container'
//           >
//             <Container>
//               <Menu inverted pointing secondary size='large'>
//                 <Menu.Item as='a' active>Home</Menu.Item>
//                 <Menu.Item position='right'>
//                 <Modal className='modal' trigger={<Button as='a' inverted>Sign Up</Button>} basic>
//             <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }>Ace the Dev Interview!</Modal.Header>
//             <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }><h3>Sign Up to Get Started!</h3></Modal.Header>
//             <Modal.Content>
//               <Modal.Description>
//               <div className="btn-Signup">
//               <Button.Group className='btn-social' vertical>
//                 <Button icon labelPosition='left' color='black' compact><Icon name='github' />GITHUB</Button>
//                 <Button icon labelPosition='left' color='google plus' compact><Icon name='google' /><a href="/auth/google">GOOGLE+</a></Button>
//                 <Button icon labelPosition='left' color='facebook' compact><Icon name='facebook f' />FACEBOOK</Button>
//                 <Button icon labelPosition='left' color='teal' compact><Icon name='signup' />SIGN IN</Button>
//                 </Button.Group>
//               </div>
//               </Modal.Description>
//             </Modal.Content>
//           </Modal>
//         </Menu.Item>
//         <Menu.Item>
//           <Modal trigger={<Button as='a' primary>Log In</Button>} basic>
//           <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }>Log In With</Modal.Header>
//           <Modal.Content>
//               <Modal.Description>
//               <div className="btn-Signup">
//               <Button.Group className='btn-social' vertical>
//                 <Button icon labelPosition='left' color='black' compact><Icon name='github' />GITHUB</Button>
//                 <Button icon labelPosition='left' color='google plus' compact><Icon name='google' /><a href="/auth/google">GOOGLE+</a></Button>
//                 <Button icon labelPosition='left' color='facebook' compact><Icon name='facebook f' />FACEBOOK</Button>
//               </Button.Group>
//               </div>
//               </Modal.Description>
//             </Modal.Content>
//           </Modal>
//         </Menu.Item>
//         </Menu>
//         </Container>

//             <Container text>
//               <Header
//                 as='h1'
//                 content='Welcome to Studdy Buddy!'
//                 inverted
//                 style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '.5em' }}
//               />

//               <Segment basic>
//                 <Image src={felix} size='small' centered />
//               </Segment>
//               <Header
//                 as='h2'
//                 content='Learn some languages.'
//                 inverted
//                 style={{ fontSize: '1.7em', fontWeight: 'normal' }}
//               />
//               <Button primary size='huge' href='#languages'>
//                 Get Started
//                 <Icon name='right arrow' />
//               </Button>
//             </Container>
//           </Segment>
//         </Visibility>
//         <a id='languages'>
//           <Segment style={{ padding: '8em 0em' }} vertical>
//             <Grid container stackable verticalAlign='middle'>
//               <Grid.Row>
//                 <Language />
//               </Grid.Row>
//             </Grid>
//           </Segment>
//           <Segment inverted vertical style={{ padding: '5em 0em' }}>
//           </Segment>
//         </a>
//       </div>
//     )
//   }
// }
