import React from 'react';
import { Link } from 'react-router';
import './style/base.scss';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  },
});

export default App;
