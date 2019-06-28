import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import login from '../redux/actions/loginAction';

export class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount () {
    this.props.login();
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit (e) {
    e.preventDefault();
    const loginUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(loginUser);
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <form id="userLogin" onSubmit={this.onSubmit}>
            <h2>Login to iReporter</h2>
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="Enter username" />
            <input type="text" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter password" />
            <button type="submit" className="btn-login">Login</button>
            <p className="form-footer">Don't have an account <a href="./signup">Sign Up</a>.</p>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login.login
});

export default connect(mapStateToProps, { login })(Login);
