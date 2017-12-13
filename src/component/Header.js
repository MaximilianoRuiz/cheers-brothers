// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

// Assets
import logo from './image/beer.svg';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <div className="Header-header">
          <img src={logo} className="Header-logo-beer" alt="logo" />
          <h1 className="Header-title">{title}</h1>
          <ul className="Menu">
            {
              items && items.map(
                  (item, key) => <li key={key}><Link to={item.url}><Button>{item.title}</Button></Link></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}


export default Header;
