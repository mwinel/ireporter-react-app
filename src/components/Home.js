import React, { Component } from "react";
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="flag-content">
              <h1>Welcome to iReporter!</h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
