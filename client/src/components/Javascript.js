import React, { Component } from 'react'
import { Divider, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css';
import '../style.css';

class JavaScript extends Component {
   render() {
        return (
        <div>
          <div className="category-icon">
            <Image.Group size='small'>
               <Image src='/assets/javascript_icon.png'/>
            </Image.Group>
            <Divider hidden />
          </div>

          <div className="category">
            <h1 className="category-header">JavaScript Study</h1> 
          </div>
          <ul className="category-list">
             <a href="/flashpage"><li>Overview</li></a>
             <a href="/flashpage"><li>Basic Concepts</li></a>
             <a href="/flashpage"><li>Conditions and Loops</li></a>
             <a href="/flashpage"><li>Functions</li></a>
             <a href="/flashpage"><li>Data Structures</li></a>
             <a href="/flashpage"><li>Objects</li></a>
             <a href="/flashpage"><li>DOM & Events</li></a>
             <a href="/flashpage"><li>Clousers</li></a>
             <a href="/flashpage"><li>ES6</li></a>
             <a href="/flashpage"><li>Syntax</li></a>
             <a href="/flashpage"><li>Apply, Call & Bind</li></a>
             <a href="/flashpage"><li>Scope</li></a>
          </ul>
          <div className="btn-back">
            <Link to="/">
              <Icon name='arrow circle left' size='huge' inverted />
            </Link>
          </div>
        </div>
        );
    }
}
export default JavaScript
