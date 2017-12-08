// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './component/Header';
import Content from './component/Content2';

// Data
import items from './data/menu';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

  render() {
      const { children } = this.props;

    return (
      <div>
        <Header title="Cheers Brothers" items={items} />
        <Content body={children}/>
      </div>
    );
  }
}

export default App;
