import React, { Component } from 'react';
import App from '../App';
import { Sidebar, Button, Menu, Image, Icon } from 'semantic-ui-react';
import '../App.css';
import '../style.css';

class Menubar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
  }

  toggleVisiblity() {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { visible } = this.state;

    return (
      <div className="menu">
        <Button icon onClick={this.toggleVisiblity} className="menu-button" style={ {padding: '1rem', margin: '1rem'} }>
          <Icon name='sidebar' />
        </Button>
        <Sidebar.Pushable>
          <Sidebar 
            as={Menu}
            animation='overlay'
            width='thin' 
            visible={visible}
            icon='labeled'
            vertical
          >
            <Menu.Item href='/'>
              Home
            </Menu.Item>
            <Menu.Item href='/javascript'>
              Subjects
            </Menu.Item>
          </Sidebar>
            <App />
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Menubar;
