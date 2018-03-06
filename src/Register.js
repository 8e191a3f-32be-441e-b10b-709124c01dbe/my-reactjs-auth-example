import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnamestate: '',
      secondnamestate: '',
      usernamestate: '',
      passwordstate: '',

      firstnameerrorstate: '',
      secondnameerrorstate: '',
      usernameerrorstate: '',
      passworderrorstate: '',
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
    this.hadleChangeUsername = this.hadleChangeUsername.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeFirstName(event) {
    this.setState({ firstnamestate: event.target.value })
  }

  handleChangeSecondName(event) {
    this.setState({ secondnamestate: event.target.value })
  }
  hadleChangeUsername(event) {
    this.setState({ usernamestate: event.target.value })
  }
  handleChangepassword(event) {
    this.setState({ passwordstate: event.target.value })
  }
  handleSubmit(event) {
    let errormessage = 'SHIT!';

      if (this.state.firstnamestate === ''){
        this.setState({ firstnameerrorstate: errormessage })
      }
      else {
        this.setState({ firstnameerrorstate: '' })
      }

      if (this.state.secondnamestate === ''){
        this.setState({ secondnameerrorstate: errormessage })
      }
      else {
        this.setState({ secondnameerrorstate: '' })
      }

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

  render() {
    return (
      <Card>
        <center>
          <CardText>
            <center>
              <TextField
                hintText="Your firstname"
                onChange={this.handleChangeFirstName}
                errorText={this.state.firstnameerrorstate}
              />
              <TextField
                hintText="Your secondname"
                onChange={this.handleChangeSecondName}
                errorText={this.state.secondnameerrorstate}
              />
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