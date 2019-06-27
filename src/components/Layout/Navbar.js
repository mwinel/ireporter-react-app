import React, { Component } from 'react';

class Navbar extends Component {
  render () {
    return (
      <div>
        <div className="nav">
          <div className="container">
            <div className="brand">
              <a href="./">iReporter</a>
            </div>
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" />
            <div className="menu">
              <a href="./signup">signup</a>
              <a href="#">login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
