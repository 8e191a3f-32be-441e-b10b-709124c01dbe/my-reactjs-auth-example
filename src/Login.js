import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernamestate: '',
      passwordstate: '',

      usernameerrorstate: '',
      passworderrorstate: '',
    };
    this.hadleChangeUsername = this.hadleChangeUsername.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hadleChangeUsername(event) {
    this.setState({ usernamestate: event.target.value })
  }
  handleChangepassword(event) {
    this.setState({ passwordstate: event.target.value })
  }
  handleSubmit(event) {
    let errormessage = 'SHIT!';
    if (this.state.usernamestate === '' || this.state.passwordstate === '') {

      if (this.state.usernamestate === ''){
        this.setState({ usernameerrorstate: errormessage })
      }
      else {
        this.setState({ usernameerrorstate: '' })
      }
      
      if (this.state.passwordstate === ''){
        this.setState({ passworderrorstate: errormessage })
      }
      else {
        this.setState({ passworderrorstate: '' })
      }

    }
  }

  render() {
    return (
      <Card>
        <center>
          <CardText>
            <center>
              <TextField
                hintText="Username"
                onChange={this.hadleChangeUsername}
                errorText={this.state.usernameerrorstate}
              />
              <TextField
                hintText="Password"
                type="password"
                errorText={this.state.passworderrorstate}
                onChange={this.handleChangepassword}
              />
              <FlatButton label="Register" onClick={this.handleSubmit}/>
            </center>
          </CardText>
          <CardActions>
            <Link to={"/"}><FlatButton label="Login Page" /></Link>
            <Link to={"/register"}><FlatButton label="Register Page" /></Link>
          </CardActions>
        </center>
      </Card>
    );
  }
}

export default Register;