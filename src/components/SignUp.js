import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import signUp from '../redux/actions/signUpAction';

export class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      othernames: '',
      username: '',
      email: '',
      password: '',
      phone_number: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount () {
    this.props.signUp();
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit (e) {
    e.preventDefault();
    const signup = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      othernames: this.state.othernames,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number
    };
    this.props.signUp(signup);
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <form id="addUser" onSubmit={this.onSubmit}>
            <h2>Please Sign Up</h2>
            <input type="text" name="firstname" onChange={this.onChange} value={this.state.firstname} placeholder="Enter firstname" />
            <input type="text" name="lastname" onChange={this.onChange} value={this.state.lastname} placeholder="Enter lastname" />
            <input type="text" name="othernames" onChange={this.onChange} value={this.state.othernames} placeholder="Enter othernames" />
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="Enter username" />
            <input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter email" />
            <input type="text" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter password" />
            <input type="text" name="phone_number" onChange={this.onChange} value={this.state.phone_number} placeholder="Enter phone number" />
            <button type="submit" className="btn-signup">Sign Up</button>
            <p className="form-footer">Already have an account <a href="./login">Login</a>.</p>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, { signUp })(SignUp);
